<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <NavBar></NavBar>
    <Categories></Categories>
    <div class="my-2" v-if="this.$store.state.user">
      <h2 class="peachDark--text">Just For You</h2>
      <EventCarousel :allEvents="getAllUser(this.$store.state.events, this.$store.state.user)"></EventCarousel>
    </div>
    <div class="my-2 ">
      <h2 class="peachDark--text">Buzzing Now!</h2>
      <EventCarousel :allEvents="getAllBuzzing(this.$store.state.events)"></EventCarousel>
    </div>
    <RandomEventPrompt></RandomEventPrompt>
  </div>
</template>

<script>
import LandingScreen from '../components/LandingScreen.vue';
import Categories from '@/components/Categories.vue';
import NavBar from '@/components/NavBar.vue';
import EventCarousel from '@/components/EventCarousel.vue';

export default {
    name: "Home",
    components: { LandingScreen, Categories, NavBar, EventCarousel },
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
    },
    methods: {
      getAllBuzzing: function (events){
        var buzzingEvents = [];
        for (let indiv of events){
          if (indiv.isBuzzing){
            buzzingEvents.push(indiv)
          }
        }
        return buzzingEvents
      },
      getAllUser: function (events, user){
        var reccEvents = [];
        for (let indiv of events){
          if (user.categoryPrefs.includes(indiv.eventCategory)){
            reccEvents.push(indiv)
          }
        }
        return reccEvents
      }
    }
};
</script>
