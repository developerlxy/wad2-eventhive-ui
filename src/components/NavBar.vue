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
        <v-btn color="greenDark" class="white--text col-xs-2" @click="createEvent()"
          >Create Event</v-btn
        >
        
        <Google_button></Google_button>
        <LoginProfileButton></LoginProfileButton>
        <SearchBar class="mt-0"></SearchBar>
        <v-spacer></v-spacer>
        <!-- <v-row class="ma-0"> -->
    </v-row>
    <v-row  v-else class='align-center justify-center mx-4'>
      <v-img
          class="my-4 logo"
          max-height="100px"
          max-width="100px"
          src="../src/assets/images/logo.png"
          contain
          @click="toHome()"
        />
        <SearchBar class="col-7"></SearchBar>
        <v-btn color="greenDark col-sm-2" class="white--text" @click="createEvent()"
          >Create Event</v-btn
        >
        <Google_button></Google_button>
        <LoginProfileButton ></LoginProfileButton>
        
        
        <!-- <v-row class="ma-0"> -->
        
        
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
