<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <div v-else height="100%">
    <NavBar></NavBar>
    <Categories></Categories>
    <v-container v-if="events.length==0">
      <v-row class="justify-center mb-5">
        <img src="../assets/images/flying-bee.gif">
      </v-row>
      <v-row class="justify-center">
        <h2>Buzz off, there ain't any events for ya!</h2>
      </v-row>
    </v-container>
    <v-container v-else class="mb-4 mx-8" width="80%" fluid>
      <v-row cols="2">
        <v-col>
          <v-row cols="12">
            <v-col
                v-for="event in events"
                :key="event.name"
                class="col-sm-12"
              >
                <SecondaryEventCard :eventDetails="event" @mouseover.native="previewEvent(event)" @mouseout.native="eventPreview=false" onclick="goToEvent"></SecondaryEventCard>
            </v-col>
          </v-row>
        </v-col>
        <v-col col-sm-1>
          <div v-if="eventPreview!=false" id="preview" class="mt-2">
            <PreviewEventCard :eventDetails="this.eventPreview"></PreviewEventCard>
          </div>
          <div v-else>
            <v-row class="justify-center my-5">
              <img src="../assets/images/flying-bee.gif">
            </v-row>
            <h2>Hover over for a sneak peek!</h2>
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
          let eDate = e.eventDate;
          let dateMatch = true;
          if (startDate != "" && endDate != "") {
            if (Date.parse(eDate) < Date.parse(startDate) || Date.parse(eDate) > Date.parse(endDate)) {
              dateMatch = false
            }
          }
          if (eName.includes(name.toLowerCase()) && dateMatch){
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
            this.eventPreview = false
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