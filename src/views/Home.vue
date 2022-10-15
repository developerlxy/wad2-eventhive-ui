<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <NavBar></NavBar>
    <Categories></Categories>
  </div>
</template>

<script>
import LandingScreen from '../components/LandingScreen.vue';
import Categories from '@/components/Categories.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    name: "Home",
    components: { LandingScreen, Categories, NavBar },
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      this.$store.dispatch('getEvents')
      if (this.$store.state.user != null) {
        console.log(`current user: ${this.$store.state.user.userName}`)
      }
    },
    data() {
      return {
        isLoading: true
      }
    }
};
</script>
