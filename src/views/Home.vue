<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <NavBar></NavBar>
    <Categories></Categories>
    <v-row class="mx-6">
      <v-col class="d-flex align-content-center flex-wrap justify-end mx-6">
        <h1 id="header" class="font-weight-black peachMid--text ml-14 pl-14 text-start">BEE there or BEE <span style="background-color: peachpuff;">square!</span></h1>
      </v-col>
      <v-col class="d-flex align-content-center justify-start pr-16 mr-16">
        <img src="../assets/images/graphics1.png" height="400px">
      </v-col>
    </v-row>
    <div class="my-2 pa-6 ml-6" v-if="this.$store.state.user">
      <h1 class="greenDark--text mb-3 font-weight-black carouselheader ml-16 pl-16 text-start">Just For You</h1>
      <EventCarousel :allEvents="getAllUser(this.$store.state.events, this.$store.state.user)"></EventCarousel>
    </div>
    <div class="my-2 pa-6 ml-6">
      <h1 class="greenDark--text mb-3 font-weight-black carouselheader ml-16 pl-16 text-start">Buzzing Now!</h1>
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

<style>
#header{
  font-size: 4em
}

.carouselheader{
  font-size: 3em
}
</style>