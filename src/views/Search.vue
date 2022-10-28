<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <div v-else>
    <NavBar></NavBar>
    <Categories></Categories>
    <v-container class="mb-4">
    <v-row>
      <v-col
          v-for="event in events"
          :key="event.name"
          class="col-sm-6 col-md-4 col-lg-3"
        >
          <EventCard :eventDetails="event" onclick="goToEvent"></EventCard>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import LoadingScreen from '../components/LoadingScreen.vue';
import Categories from '@/components/Categories.vue';
import NavBar from '@/components/NavBar.vue';
import EventCard from '@/components/EventCard.vue';


export default {
    name: "Home",
    components: { LoadingScreen, NavBar, Categories, EventCard },
    mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    },
    data() {
      return {
        isLoading: true,
        events:[],
      }
    },
    methods: {
      gotoEvent: function (id){
        this.$router.push({ path:`/event?id=${id}`})
      },
      getAllSearchEvents: function(name, location, groupSize, startDate, endDate){
        this.events = [];
        //location search api goes here
        for (let e of this.$store.state.events){
          let eName = e.eventName.toLowerCase();
          let eGroupSize = e.maxCapacity - e.attendees.length;
          //add date search

          if (eName.includes(name.toLowerCase())){
            this.events.push(e)
          }
        }
      }
    },
    watch: {
    '$route.params': {
        handler() {
            let nameSearch = this.$route.query.name
            console.log(nameSearch)
            let locationSearch = this.$route.query.location
            console.log(locationSearch)
            let groupSizeSearch = this.$route.query.groupSize
            console.log(groupSizeSearch)
            let startDateSearch = this.$route.query.startdate
            console.log(startDateSearch)
            let endDateSearch = this.$route.query.enddate
            console.log(endDateSearch)
            this.getAllSearchEvents(nameSearch, locationSearch, groupSizeSearch, startDateSearch, endDateSearch)
        },
        immediate: true,
    }
}
};
</script>
