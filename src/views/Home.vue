<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <Categories></Categories>

  </div>
</template>

<script>
import LandingScreen from '../components/LandingScreen.vue';
import Categories from '@/components/Categories.vue';
import EventCard from '@/components/EventCard.vue';

export default {
    name: "Home",
    components: { LandingScreen, Categories, EventCard },
    mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    },
    data() {
      return {
        isLoading: true
      }
    }
};
</script>
