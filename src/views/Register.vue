<template>
  <LandingScreen v-if="isLoading"></LandingScreen>
  <v-container v-else fluid class="peachLight fill-height">
    <RegistrationCard></RegistrationCard>
    </v-container>
  </template>
  
  <script>
  import RegistrationCard from '../components/RegistrationCard.vue';
  
  export default {
      name: "Register",
      components: { RegistrationCard },
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
  