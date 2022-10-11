<template>
  <LandingScreen v-if="isLoading"></LandingScreen>
  <v-container v-else fill-height fluid class="peachLight">
    <LoginCard></LoginCard>
    
  </v-container>
  </template>
  
  <script>
  import LoginCard from '../components/LoginCard.vue';
  
  export default {
      name: "Login",
      components: { LoginCard },
      mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      },
      data() {
        return {
          isLoading: true
        }
      }
  };
  </script>
  