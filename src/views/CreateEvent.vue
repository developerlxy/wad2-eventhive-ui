<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <!-- navbar component -->
    <SearchBar></SearchBar>

    <br>
    <h1>
      Fancy A New Event?
    </h1>
    <p style="color: grey;">
      Create a cool name and tell event-goers why they should come. Add details so they know what kind of fun they are in for!
    </p>

    <CreateEventForm></CreateEventForm>
    <br>
    <CreateEventFormDate></CreateEventFormDate>
  </div>
</template>

<script>
import LandingScreen from '../components/LandingScreen.vue';
import Categories from '@/components/Categories.vue';
import SearchBar from '@/components/SearchBar.vue';
import CreateEventForm from '@/components/CreateEventForm.vue';
import CreateEventFormDate from '@/components/CreateEventFormDate.vue';


export default {
    name: "Create Event",
    components: { LandingScreen, Categories, SearchBar, CreateEventForm, CreateEventFormDate },
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
