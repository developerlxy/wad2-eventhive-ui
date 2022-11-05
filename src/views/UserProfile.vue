<template>
  <LandingScreen v-if="isLoading"></LandingScreen>
  <div v-else-if="this.$store.state.user == null">
    <NavBar></NavBar>
    <v-alert class="brownLight ma-2">
      You are not logged in. Please login to view your profile.
    </v-alert>
  </div>
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

      <v-row class="col-6 pa-0 ma-0">
        <v-text-field
        v-model="contact"
        outlined
        hide-details
        label="Phone number"
        class="ma-2"
        ></v-text-field>
      </v-row>
      <hr class="my-4">

      <div class="d-flex text-h5 brownDark--text font-weight-medium ma-4">
        General Information
      </div>

      <div class="d-flex brownDark--text mx-4">
        My Interests
      </div>
      <v-row class="col-12 pa-0 ma-0">
      <v-chip-group
          multiple
          v-model="chips"
          active-class="greenDark--text"
          class="ma-2"
        >
          <v-chip
            v-for="tag in items"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-row>
      <div class="d-flex brownDark--text mx-4">
        About me
      </div>
      <v-row class="col-12 pa-0 ma-0">
        <tiptap-vuetify class="ma-2" v-model="userDescription" :extensions="extensions" />
      </v-row>

      <v-row>
        <v-btn
          color="greenDark"
          class="white--text ma-4 pa-1"
          @click="updateProfile()"
          >Update Profile</v-btn
        >
        <v-icon
          v-if="updateSuccess"
          color="greenDark"
          transition="scale-transition"
          large
        >
          check_circle
        </v-icon>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import LandingScreen from "../components/LandingScreen.vue";
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
  name: "UserProfile",
  components: { LandingScreen, TiptapVuetify },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    this.setExistingPrefs();
    this.$store.dispatch('getUser') // use this to get the current user after updating their particulars in db
  },
  data() {
    return {
      isLoading: true,
      updateSuccess: false,
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

      chips: [],
      items: ['Sports', 'Arts', 'Music', 'Food', 'Pets', 'Games'],

      contact: this.$store.state.user["userPhone"] == null ? "" : this.$store.state.user["userPhone"],
      userDescription: this.$store.state.user["userDesc"] == null ? "" : this.$store.state.user["userDesc"],
      
      //FOR RICH TEXT
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [Heading, {
          options: {
            levels: [1, 2, 3]
          }
        }],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak
      ],
    };
  },
  methods: {
    setAlertTimeout() {
      setTimeout(() => {
        this.updateSuccess = false;
      }, 2000);
    },
    updateProfile() {
      // update categoryPrefs
      if (this.chips.length > 0) {
        let prefReqBody = {};
        prefReqBody["userEmail"] = this.email;
        let newCategoryPrefs = [];
        for(let index of this.chips) {
          newCategoryPrefs.push(this.items[index]);
        }
        prefReqBody["categoryPrefs"] = newCategoryPrefs;
        this.axios
        .patch(
          `https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users/prefs`,
          prefReqBody
        )
        .then((response) => {
        });
      }

      // update other details
      let reqBody = {};
      if (this.userName != "") {
        reqBody["userName"] = this.userName;
      }
      if (this.password != "") {
        reqBody["userPassword"] = this.password;
      } else {
        reqBody["userPassword"] = this.$store.state.user["userPassword"];
      }
      if (this.age > 0) {
        reqBody["userAge"] = this.age;
      }
      if (this.gender != "") {
        reqBody["userGender"] = this.gender;
      }
      if (this.userDescription != "") {
        reqBody["userDesc"] = this.userDescription;
      }
      if (this.contact != "") {
        reqBody["userPhone"] = this.contact;
      }

      this.axios
        .put(
          `https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users/${this.$store.state.user["_id"]}`,
          reqBody
        )
        .then((response) => {
          if (response.data == "Update Success") {
            this.updateSuccess = true;
            this.setAlertTimeout();
          }
        });
      
    },
    setExistingPrefs() {
      if (this.$store.state.user["categoryPrefs"] == null) {
        this.chips = [];
      } else {
        let existingPrefs = []
        for (let category of this.$store.state.user["categoryPrefs"]) {
          existingPrefs.push(this.items.indexOf(category));
        }
        this.chips = existingPrefs;
      }
    }
  },
  computed: {
  },
};
</script>
