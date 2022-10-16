<template>
  <!-- html -->
  <v-app-bar height="min-height" color="white" class="navbar">
      <v-img
        class="ma-5 logo"
        max-height="100px"
        max-width="100px"
        src="../src/assets/images/logo.png"
        contain
        @click="toHome()"
      />
      <SearchBar></SearchBar>
      <v-spacer></v-spacer>
      <v-btn color="greenDark mx-4" class="white--text" @click="createEvent()"
        >Create an Event</v-btn
      >

      <ProfileButton></ProfileButton>

  </v-app-bar>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import ProfileButton from "./ProfileButton.vue";
// javascript
export default {
  name: "NavBar",
  components: { SearchBar, ProfileButton },
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    imageURL: {
      type: String,
      default: "../src/assets/images/test.png",
    },
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    login() {
      // TOOD: implement login function onclick
      console.log(this.$store.state.user);
      this.$router.push("/login");
    },
    getInitials() {
      // TODO: implement getInitials function
    },
    createEvent() {
      this.$router.push("/events/create");
    },
    logout: function (event) {
      this.$store.state.user = null;
    },
  },
};
</script>

<style>
/* css */
.navbar {
  flex: 0;
}
.logo {
  cursor: pointer;
}
</style>
