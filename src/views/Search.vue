<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <div v-else>
    <NavBar></NavBar>
    <Categories></Categories>
    <v-container class="mb-4 mx-8" width="80%" fluid>
      <v-row cols="2">
        <v-col>
          <v-row cols="12">
            <v-col
                v-for="event in events"
                :key="event.name"
                class="col-sm-12"
              >
                <SecondaryEventCard :eventDetails="event" @mouseover.native="previewEvent(event)" onclick="goToEvent"></SecondaryEventCard>
            </v-col>
          </v-row>
        </v-col>
        <v-col col-sm-1>
          <div v-if="eventPreview!=false" id="preview">
            <PreviewEventCard :eventDetails="this.eventPreview"></PreviewEventCard>
          </div>
          <div v-else>
            <h4>Hover over to view!</h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoadingScreen from '../components/LoadingScreen.vue';
import Categories from '@/components/Categories.vue';
import NavBar from '@/components/NavBar.vue';
import SecondaryEventCard from '@/components/SecondaryEventCard.vue';
import PreviewEventCard from '@/components/PreviewEventCard.vue';


export default {
    name: "Home",
    components: { LoadingScreen, NavBar, Categories, SecondaryEventCard, PreviewEventCard },
    mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    },
    data() {
      return {
        isLoading: true,
        events:[],
        eventPreview: false,
      }
    },
    methods: {
      gotoEvent: function (id){
        this.$router.push({ path:`/event?id=${id}`})
      },
      previewEvent: function(event){
        console.log(event)
        this.eventPreview = event
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

<style>
#preview{
  position: sticky; 
  z-index: 1;
  top: 50px; 
  margin: auto;
}
</style>