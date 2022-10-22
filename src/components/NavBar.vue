<template>
  <!-- html -->
  <v-app-bar height="min-height" color="white" class="navbar mb-0" elevation="0">
    <v-row class="align-center justify-center">  
    <v-img
      class="ma-4 logo"
      max-height="100px"
      max-width="100px"
      src="../src/assets/images/logo.png"
      contain
      @click="toHome()"
    />
    <SearchBar></SearchBar>
    <v-spacer></v-spacer>
    <!-- <v-row class="ma-0"> -->
      <v-btn color="greenDark mx-2 d-none d-sm-flex px-1" class="white--text" @click="createEvent()"
      >Create Event</v-btn
    >
    <Google_button></Google_button>
    <LoginProfileButton class="d-none d-sm-flex mx-2"></LoginProfileButton>
    </v-row>
      
  </v-app-bar>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import LoginProfileButton from "./LoginProfileButton.vue";
import Google_button from '@/components/google_button.vue';
// javascript
export default {
  name: "NavBar",
  components: { SearchBar, LoginProfileButton, Google_button },
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
    createEvent() {
      this.$router.push("/events/create");
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
