<template>
  <LandingScreen v-if="isLoading"></LandingScreen>
  <div v-else class="fill-height peachLight">
    <NavBar></NavBar>
    <div class="my-12">
      <LoginCard></LoginCard>
    </div>
  </div>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Login",
  components: { LoginCard, NavBar },
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
