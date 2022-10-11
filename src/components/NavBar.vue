<template>
  <!-- html -->
  <v-toolbar class="navbar" height="100px">
    <v-img
      class="ma-5"
      max-height="100px"
      max-width="100px"
      src="src/assets/images/logo.png"
    />
<<<<<<< HEAD
    <SearchBar></SearchBar>
    <v-spacer></v-spacer>
    <v-btn color="greenDark" class="white--text">Create an Event</v-btn>
    <v-avatar v-if="isLoggedIn" color="greenMid" class="ml-5" size="50">
      <span class="white--text text-h5">JA</span>
    </v-avatar>
    <v-btn v-else text class="greenDark--text ml-5">Log In</v-btn>
  </v-toolbar>
=======

    <SearchBar id="search-bar"></SearchBar>
    <button class="login-btn" id="login-btn" @click="login">Log In</button>
    <button @click="logout">Logout</button>

    <img
        :src="imageURL"
      alt="User"
      class="user-profile-pic"
    />

    <!-- <button class="logged-in-user" id="logged-in-user" @click="logout">
      <font-awesome-icon icon="user-circle" />
      {{ user }}
    </button> -->
  </div>
>>>>>>> f1da1c2e9ebfb38736e4686fe1b46eb889a97268
</template>

<script>
import SearchBar from "./SearchBar.vue";
// javascript
export default {
  name: "NavBar",
  components: { SearchBar },
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
    login() {
      //TOOD: implement login function onclick
      this.$router.push("/login");
    },
<<<<<<< HEAD
=======
    logout: function(event) {
      if (localStorage.getItem('user')) {
        console.log("logging out")
        console.log(JSON.parse(localStorage.getItem('user')))
        localStorage.removeItem('user')
      }
    }
>>>>>>> f1da1c2e9ebfb38736e4686fe1b46eb889a97268
  },
};
</script>

<style>
/* css */
.navbar {
  flex: 0;
}
</style>
