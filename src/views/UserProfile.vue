<template>
  <LandingScreen v-if="isLoading"></LandingScreen>
  <div v-else>
    <NavBar></NavBar>
    <v-container>
      <br />
      <div class="d-flex text-h5 brownDark--text font-weight-medium ma-4">
        My Profile
      </div>
      <v-row class="col-12 pa-0 ma-0">
        <v-text-field
          v-model="userName"
          outlined
          label="Username"
          required
          hide-details
          class="ma-2"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          outlined
          disabled
          hide-details
          label="Email"
          class="ma-2"
        ></v-text-field>
      </v-row>

      <v-row class="col-12 pa-0 ma-0">
        <v-text-field
          v-model="firstname"
          :rules="nameRules"
          label="First Name"
          outlined
          hide-details
          required
          class="ma-2"
        ></v-text-field>

        <v-text-field
          v-model="lastname"
          :rules="nameRules"
          label="Last Name"
          outlined
          hide-details
          required
          class="ma-2"
        ></v-text-field>
      </v-row>

      <v-row class="col-12 pa-0 ma-0">
        <v-select
          v-model="gender"
          :items="['Male', 'Female']"
          :menu-props="{ bottom: true, offsetY: true }"
          label="Gender"
          outlined
          hide-details
          class="ma-2 col"
        ></v-select>
        <v-text-field
          v-model="age"
          outlined
          type="number"
          label="Age"
          hide-details
          class="ma-2 col"
        ></v-text-field>
      </v-row>

      <v-row class="col-12 pa-0 ma-0">
        <v-text-field
          v-model="password"
          :append-icon="showPass ? 'visibility' : 'visibility_off'"
          :rules="[passwordRules.min]"
          :type="showPass ? 'text' : 'password'"
          label="New Password"
          hint="At least 8 characters"
          outlined
          class="ma-2"
          hide-details
          @click:append="showPass = !showPass"
        ></v-text-field>
        <v-text-field
          v-model="password2"
          :append-icon="showPass ? 'visibility' : 'visibility_off'"
          :rules="[passwordRules.match]"
          :type="showPass ? 'text' : 'password'"
          label="Confirm Password"
          hint="At least 8 characters"
          outlined
          class="ma-2"
          hide-details
          @click:append="showPass = !showPass"
        ></v-text-field>
      </v-row>
      <v-btn
        color="greenDark"
        class="white--text ma-4 pa-1"
        @click="updateProfile()"
        >Update Profile</v-btn
      >
    </v-container>
  </div>
</template>
<script>
import LandingScreen from "../components/LandingScreen.vue";

export default {
  name: "UserProfile",
  components: { LandingScreen },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  data() {
    return {
      isLoading: true,
      updateSuccess: false,
      firstname:
        this.$store.state.user["userFirstName"] == null
          ? ""
          : this.$store.state.user["userFirstName"],
      lastname:
        this.$store.state.user["userLastName"] == null
          ? ""
          : this.$store.state.user["userLastName"],
      email:
        this.$store.state.user["userEmail"] == null
          ? ""
          : this.$store.state.user["userEmail"],
      userName:
        this.$store.state.user["userName"] == null
          ? ""
          : this.$store.state.user["userName"],
      gender:
        this.$store.state.user["userGender"] == null
          ? ""
          : this.$store.state.user["userGender"],
      age:
        this.$store.state.user["userAge"] == null
          ? 0
          : this.$store.state.user["userAge"],
      password: "",
      password2: "",
      showPass: false,
      passwordRules: {
        match: (v) => v == this.password || "Passwords do not the match",
        min: (v) => v.length == 0 || v.length >= 8 || "Min 8 characters",
      },
      nameRules: [
        (v) => /^[a-zA-Z-']+$/.test(v) || "Name cannot have special characters",
      ],
      emailRules: [(v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    };
  },
  methods: {
    updateProfile() {
      let reqBody = {};
      if (this.firstname != "") {
        reqBody["userFirstName"] = this.firstname;
      }
      if (this.lastname != "") {
        reqBody["userLastName"] = this.lastname;
      }
      if (this.password != "") {
        reqBody["userPassword"] = this.password;
      }
      if (this.age > 0) {
        reqBody["userAge"] = this.age;
      }
      if (this.gender != "") {
        reqBody["userGender"] = this.gender;
      }

      this.axios
        .put(
          `https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users/${this.$store.state.user["_id"]}`,
          reqBody
        )
        .then((response) => {
          if (response.data == "Update Success") {
            this.updateSuccess = true;
          }
        });
    },
  },
};
</script>
