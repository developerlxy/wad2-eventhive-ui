<template>
  <!-- html -->
  <v-toolbar>
  <v-img
  class="ma-5"
      max-height="100px"
      max-width="100px"
      src="src/assets/images/logo.png"
    />
    <SearchBar></SearchBar>
    <v-spacer></v-spacer>
    <v-btn color="greenDark" class="ma-2 white--text">Create an Event</v-btn>
    <v-btn text class="ma-2 greenDark--text">Log In</v-btn>
  </v-toolbar>
  <!-- <div class="navbar" id="navbar">
    <img
      src="../assets/images/logo.png"
      alt="logo"
      class="logo"
      id="navbar-logo"
    />

    <SearchBar id="search-bar"></SearchBar>
    <button class="login-btn" id="login-btn" @click="login">Log In</button>

    <img
        :src="imageURL"
      alt="User"
      class="user-profile-pic"
    />

    <button class="logged-in-user" id="logged-in-user" @click="logout">
      <font-awesome-icon icon="user-circle" />
      {{ user }}
    </button>
  </div> -->
</template>

<script>
import SearchBar from "./SearchBar.vue";
// javascript
export default {
  name: "NavBar",
  components: { SearchBar },
  props: {
    imageURL: {
      type: String,
      default: "../src/assets/images/test.png",
    },
  },
  methods: {
    login() {
      //TOOD: implement login function onclick
      this.$router.push("/login");
    },
  },
};
</script>

<style>
/* css */
.colored-btn {
  color: black;
  background-color: #c62e2e;
}

</style>
