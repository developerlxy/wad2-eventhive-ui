<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <!-- navbar component -->
        <Google_button></Google_button>
        <SearchBar></SearchBar>

    <Categories></Categories>

  </div>
</template>

<script>
import LandingScreen from '../components/LandingScreen.vue';
import Categories from '@/components/Categories.vue';
import SearchBar from '@/components/SearchBar.vue';
import Google_button from '@/components/google_button.vue';

export default {
    name: "Home",
    components: { LandingScreen, Categories, SearchBar, Google_button },
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
