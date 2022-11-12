<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <div v-else>
    <!-- navbar component -->
    <NavBar></NavBar>
    <UserEventCarousel :user-event-type="getUserEventType"></UserEventCarousel>      

  </div>
</template>
  
<script>
  import LoadingScreen from '../components/LoadingScreen.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import NavBar from '@/components/NavBar.vue';
  import UserEventCarousel from '@/components/UserEventCarousel.vue'

  export default {
    name: "UserEvents",
    components: { LoadingScreen, SearchBar, NavBar, UserEventCarousel},
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    data() {
      return {
        isLoading: true,
      }
    },
    computed: {
      getUserEventType() {
        console.log("userevents view", this.$route.query.type)
      if (this.$route.query.type == 'registered'){
        return'Registered Events'
      } else if (this.$route.query.type == 'attended') {
        return 'Attended Events'
      } else if (this.$route.query.type == 'hosted') {
        return 'Hosted Events'
      }
      }
    }
  };
  
</script>
  