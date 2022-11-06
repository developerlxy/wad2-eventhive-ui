<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <div v-else>
      <NavBar></NavBar>
      <HostDetails :eventHost="host"></HostDetails>
  


      
    </div>
  </template>
  
  <script>
  import LoadingScreen from '../components/LoadingScreen.vue';
  import NavBar from '@/components/NavBar.vue';
  import HostDetails from '@/components/HostDetails.vue';
  
  
  export default {
      name: "Home",
      components: { LoadingScreen, NavBar, HostDetails },
      mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      },
      data() {
        return {
          isLoading: true,
          events: [],
          eventID: "",
          eventDetails: {
                type: Object,
                required: true,
                
            },
          
        }
      },
      computed: {
        host() {
          for (let event of this.$store.state.events) {
            if (event["_id"]=="636634167611b279e286e15b") {
              return event["eventHost"]
            }
          }
          
        }
      },
  };
  </script>
  