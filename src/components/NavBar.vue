<template>
  <!-- html -->
  <v-app-bar height="min-height" color="white" class="navbar mb-0 mt-2" elevation="0">
    <v-row class="align-start justify-start mx-1" v-if="smBreakpoint">  
      <v-col order="1" class="col-12 d-flex pt-2 pb-0">
        <v-img
          id="v-img"
          class="my-4 mx-0"
          max-height="100px"
          max-width="80px"
          src="../src/assets/images/logo.png"
          @click="toHome()"
        />
        <v-spacer></v-spacer>
        <LoginProfileButton class="my-auto" ></LoginProfileButton>
        <v-app-bar-nav-icon class="my-auto" @click="showDrawer"></v-app-bar-nav-icon>
      </v-col>
      <v-col order="2" class="pb-0 pt-1">
        <SearchBar class="d-block mt-0 mb-4"></SearchBar>
      </v-col>
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
        <SearchBar class="col-md-7"></SearchBar>
        <div class="col-sm-2 col-md-2 text-right mr-2 ml-0 pl-0">
          <v-btn color="greenDark" class="white--text" elevation="0" @click="createEvent()"
          >Create Event</v-btn
        >
        </div>
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
      default: "../src/assets/images/test.jpg",
    },
  },
  data(){
    return {
      drawer: false
    }
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
      if (this.$store.state.user == null){
        this.$router.push("/login");
      }
      else {
        this.$router.push("/events/create");
      }
    },
    showDrawer(){
      this.$emit('drawerShown', true)
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
#v-img {
  display: inline-block
}
</style>
