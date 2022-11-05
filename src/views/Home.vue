<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <NavBar></NavBar>
    <Categories></Categories>
    <WelcomeImage></WelcomeImage>
    <div v-if="xsBreakpoint" class="">
      <div class="mb-2 mt-1 pt-6 pb-6" v-if="this.$store.state.user">
        <h1 class="mb-3 font-weight-black carouselheader text-center"><a class="greenDark--text" @click="pushToForYou">Just For You</a></h1>
        <EventCarousel :allEvents="userForYou"></EventCarousel>
      </div>
      <div class="my-2 pt-6 pb-6">
        <h1 class=" mb-3 font-weight-black carouselheader text-center"><a class="greenDark--text" @click="pushToBuzzing">Buzzing Now!</a></h1>
        <EventCarousel :allEvents="buzzingEvents"></EventCarousel>
      </div>
    </div>

    <div v-else>
      <div class="mb-2 mt-1 pa-6 ml-6" v-if="this.$store.state.user">
        <h1 class="mb-3 font-weight-black carouselheader ml-16 pl-16 text-start"><a class="greenDark--text" @click="pushToForYou">Just For You</a></h1>
        <EventCarousel :allEvents="userForYou"></EventCarousel>
      </div>
      <div class="my-2 pa-6 ml-6">
        <h1 class=" mb-3 font-weight-black carouselheader ml-16 pl-16 text-start"><a class="greenDark--text" @click="pushToBuzzing">Buzzing Now!</a></h1>
        <EventCarousel :allEvents="buzzingEvents"></EventCarousel>
      </div>
    </div>

    <RandomEventPrompt class="bottom-stick"></RandomEventPrompt>
  </div>
</template>

<script>
import LandingScreen from '../components/LandingScreen.vue';
import Categories from '@/components/Categories.vue';
import NavBar from '@/components/NavBar.vue';
import EventCarousel from '@/components/EventCarousel.vue';
import RandomEventPrompt from '@/components/RandomEventPrompt.vue';
import WelcomeImage from '@/components/WelcomeImage.vue';

export default {
    name: "Home",
    components: { LandingScreen, Categories, NavBar, EventCarousel, RandomEventPrompt, WelcomeImage },
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
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
      },
      pushToBuzzing: function() {
        this.$router.push( {
          name: 'Buzzing',
          params: {
            events: this.buzzingEvents
          }
        })
      },
      pushToForYou: function() {
        this.$router.push( {
          name: 'For You',
          params: {
            events: this.userForYou
          }
        })
      }
    },
    computed: {
      userForYou() {
        return this.getAllUser(this.$store.state.events, this.$store.state.user)
      },
      buzzingEvents() {
        return this.getAllBuzzing(this.$store.state.events)
      },
      xsBreakpoint() {
        return this.$vuetify.breakpoint.name == 'xs' 
      }
    }
};
</script>

<style>


.carouselheader{
  font-size: 3em
}

.bottom-stick {
  z-index: 999;
  position: fixed;
  bottom: 0;
}
</style>