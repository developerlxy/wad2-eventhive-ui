<template>
  <div id="login-profile-btn">
    <button
      v-if="this.$store.state.user == null"
      class="login-btn mx-4"
      id="login-btn"
      @click="login"
    >
      Log In
    </button>

    <v-menu
      v-else
      ref="showProfile"
      v-model="showProfile"
      open-on-hover
      offset-y
      nudge-bottom="5"
      bottom
      left
      min-width="auto"

      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <button>
          <v-avatar
            class="white--text"
            id="profile-btn"
            color="rgb(119, 153, 119)"
            size="36"
            v-bind="attrs"
            v-on="on"
          >
            {{ initials }}
          </v-avatar>
        </button>
      </template>
      <v-list>
        <v-list-item @click="myProfile"> My Profile </v-list-item>
        <v-list-item @click="logout"> Log Out </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
// javascript
export default {
  name: "ProfileButton",
  data() {
    return {
      initials: null,
    };
  },
  mounted() {
    this.getInitials();
    console.log(this.initials);
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.commit("logout");
    },
    getInitials() {
      if (this.$store.state.user != null) {
        var userName = this.$store.state.user.userName;
        var userNameArr = userName.split(" ");
        if (userNameArr.length > 1) {
          this.initials =
            userNameArr[0][0].toUpperCase() + userNameArr[1][0].toUpperCase();
        } else {
          this.initials = userNameArr[0][0].toUpperCase();
        }
      }
    },
    myProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style>
/* css */

#login-btn {
  color: rgb(119, 153, 119);
  font-weight: bold;
}
</style>
