<template>
  <!-- html -->
  <v-app-bar height="min-height" color="white" class="navbar mb-0 mt-2" elevation="0">
    <v-row class="align-center justify-center mx-2" v-if="smBreakpoint">  
      <v-img
          class="my-4 logo col-xs-3"
          max-height="100px"
          max-width="80px"
          src="../src/assets/images/logo.png"
          contain
          @click="toHome()"
        />
        <v-spacer></v-spacer>
        <v-btn color="greenDark" class="white--text col-xs-2 mr-sm-4 mr-md-5 mr-2 px-1" elevation="0" @click="createEvent()"
          >Create Event</v-btn
        >
        <GoogleSignInButton v-show="this.$store.state.user==null"></GoogleSignInButton>
        <LoginProfileButton></LoginProfileButton>
        <SearchBar class="mt-0"></SearchBar>
        <v-spacer></v-spacer>
        <!-- <v-row class="ma-0"> -->
    </v-row>
    <v-row  v-else class='align-center justify-center mx-4'>
      <v-img
          class="my-4 logo mr-3"
          max-height="100px"
          max-width="100px"
          src="../src/assets/images/logo.png"
          contain
          @click="toHome()"
        />
        <SearchBar class="col-7 col-md-6"></SearchBar>
        <div class="col-sm-2 text-right mr-2">
          <v-btn color="greenDark" class="white--text" elevation="0" @click="createEvent()"
          >Create Event</v-btn
        >
        </div>
        <GoogleSignInButton v-show="this.$store.state.user==null"></GoogleSignInButton>
        <LoginProfileButton ></LoginProfileButton>
        
        
        <!-- <v-row class="ma-0"> -->
        
        
    </v-row>
  </v-app-bar>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import LoginProfileButton from "./LoginProfileButton.vue";
import GoogleSignInButton from "./GoogleSignInButton.vue";

// javascript
export default {
  name: "NavBar",
  components: { SearchBar, LoginProfileButton, GoogleSignInButton },
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
  computed: {
    smBreakpoint() {
      return this.$vuetify.breakpoint.name == 'xs' || this.$vuetify.breakpoint.name == 'sm' 
    }
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
