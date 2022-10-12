<template>
  <!-- html -->
  <v-toolbar class="navbar" height="100px">
    <v-img
      class="ma-5 logo"
      max-height="100px"
      max-width="100px"
      src="src/assets/images/logo.png"
      @click="toHome()"
    />
    <SearchBar></SearchBar>
    <v-spacer></v-spacer>
    <v-btn color="greenDark" class="white--text">Create an Event</v-btn>
    <v-avatar v-if="isLoggedIn" color="greenMid" class="ml-5" size="50">
      <span class="white--text text-h5">JA</span>
    </v-avatar>
    <v-btn v-else text class="greenDark--text ml-5">Log In</v-btn>
  </v-toolbar>
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
    toHome() {
      this.$router.push("/");
    },
    login() {
      //TOOD: implement login function onclick
      this.$router.push("/login");
    },
    logout: function(event) {
      if (localStorage.getItem('user')) {
        console.log("logging out")
        console.log(JSON.parse(localStorage.getItem('user')))
        localStorage.removeItem('user')
      }
    }
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
