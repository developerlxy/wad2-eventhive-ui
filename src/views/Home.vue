<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <NavBar @drawerShown="showDrawer"></NavBar>
    <Categories v-if="!xsBreakpoint"></Categories>
    <WelcomeImage></WelcomeImage>
    <div v-if="xsBreakpoint">
      <div class="my-2 pt-6 pb-6">
        <h1 class=" mb-3 font-weight-black carouselheader text-center"><a class="greenDark--text" @click="pushToBuzzing">BUZZING NOW</a></h1>
        <EventCarousel :allEvents="buzzingEvents"></EventCarousel>
      </div>
      <div class="mb-2 pt-6 pb-6" v-if="this.$store.state.user">
        <h1 class="mb-3 font-weight-black carouselheader text-center"><a class="greenDark--text" @click="pushToForYou">JUST FOR YOU</a></h1>
        <EventCarousel :allEvents="userForYou"></EventCarousel>
      </div>
      <v-navigation-drawer
          v-model="drawer"
          absolute
          bottom
          temporary
        >
          <v-list
            nav
            dense
          >
            <v-list-item class="d-flex justify-center my-5">
              <h1 class="brownDark--text">CATEGORIES</h1>
            </v-list-item>
            <v-list-item class="mb-5">
              <Categories></Categories>
            </v-list-item>
            <v-list-item class="d-flex justify-center my-5">
              <v-btn x-large class="d-flex brownDark font-weight-bold white--text" elevation="0" @click="createEvent()">Create Event</v-btn>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
    </div>

    <div v-else>
      <div class="mb-2 mt-10 pt-6 px-sm-3 px-md-6 px-lg-10 pb-16 greenLight">
        <h1 class=" mb-3 font-weight-black carouselheader ml-16 pl-16 text-start"><a class="greenDark--text" @click="pushToBuzzing">BUZZING NOW</a></h1>
        <EventCarousel :allEvents="buzzingEvents"></EventCarousel>
      </div>
      <div class="mb-2 mt-10 pt-6 px-10 pb-16" v-if="this.$store.state.user">
        <h1 class="font-weight-black carouselheader ml-16 pl-16 text-start"><a class="greenDark--text" @click="pushToForYou">JUST FOR YOU</a></h1>
        <EventCarousel :allEvents="userForYou"></EventCarousel>
      </div>
      <div class="mb-2 mt-10 pt-6 px-10 pb-16">
        <h1>Don't buzz off by yourself... Join EventHive and BEE happy!</h1>
        <p>Find friends through casual and chill events</p>
        <p>Host events for other like-minded fellas to join</p>
        <p>There will be something for everyone!</p>
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
        drawer: false,
        isLoading: true
      }
    },
    methods: {
      showDrawer(){
        this.drawer = true
      },
      getAllBuzzing (events){
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
      },
      createEvent() {
        if (this.$store.state.user == null){
          this.$router.push("/login");
        }
        else {
          this.$router.push("/events/create");
        }
      },
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

p{
  font-size: 2em
}

</style>