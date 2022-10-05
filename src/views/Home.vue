<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <!-- navbar component -->
    <NavBar></NavBar>

    <Categories></Categories>
    <EventCard :eventDetails="{
      name: 'Event Name',
      imageURL: 'https://picsum.photos/200/300',
      date: '2020-12-12',
      time: '12:00',
      location: 'Location',
      category: 'Category',
      id: 0
    }"></EventCard>
  </div>
</template>

<script>
import LandingScreen from '../components/LandingScreen.vue';
import Categories from '@/components/Categories.vue';
import SearchBar from '@/components/SearchBar.vue';
import NavBar from '@/components/NavBar.vue';
import EventCard from '@/components/EventCard.vue';

export default {
    name: "Home",
    components: { LandingScreen, Categories, SearchBar, NavBar, EventCard },
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
