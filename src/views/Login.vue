<template>
  <LandingScreen v-if="isLoading"></LandingScreen>
  <v-container v-else fluid class="fill-height peachLight">
    <LoginCard></LoginCard>
  </v-container>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";

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
      isLoading: true,
    };
  },
};
</script>
