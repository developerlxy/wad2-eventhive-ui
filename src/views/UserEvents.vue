<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <!-- navbar component -->
    <NavBar></NavBar>
    <UserEventCarousel :user-event-type="userEventType"></UserEventCarousel>      

  </div>
</template>
  
<script>
  import LandingScreen from '../components/LandingScreen.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import NavBar from '@/components/NavBar.vue';
  import UserEventCarousel from '@/components/UserEventCarousel.vue'

  export default {
    name: "UserEvents",
    components: { LandingScreen, SearchBar, NavBar, UserEventCarousel},
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      if (this.$route.params.eventType == 'registered-events'){
        this.userEventType = 'Registered Events'
      } else if (this.$route.params.eventType == 'attended-events') {
        this.userEventType = 'Attended Events'
      }
    },
    data() {
      return {
        isLoading: true,
        userEventType: null
      }
    }
  };
  
</script>
  