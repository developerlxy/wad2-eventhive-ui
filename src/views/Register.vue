<template>
  <LandingScreen v-if="isLoading"></LandingScreen>
  <div v-else fluid class="peachLight fill-height">
    <NavBar></NavBar>
    <div class="my-8">
      <RegistrationCard></RegistrationCard>
    </div>
  </div>
</template>

<script>
import RegistrationCard from "../components/RegistrationCard.vue";

export default {
  name: "Register",
  components: { RegistrationCard},
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
