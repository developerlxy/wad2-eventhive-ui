<template>
    <div class="user-event-carousel mx-lg-12 mx-sm-10 mx-6 mt-2">
      <p class="d-flex text-h4 brownDark--text font-weight-bold  ml-4">
        {{userEventType}}
      </p>
      <v-row
          v-for="event in filteredEvents"
          :key="event._id"
          class="my-4"
      >
        <v-col>
          <UserEventCard :event-obj="event" :event-type="userEventType" ></UserEventCard>
        </v-col>
          
      </v-row>

    </div>


</template>



<script>
import UserEventCard from "./UserEventCard.vue";

export default {
    name: 'UserEventCarousel',
    components: { UserEventCard},
    props: {
        userEventType: {
            type: String,
            default: 'Registered Events'
        }
    },
    data() {    
        return {
            allEvents: [],
            user: null,
            filteredEvents: []
        }
    },
    mounted() {
        this.allEvents = this.$store.state.events
        this.user = this.$store.state.user
        this.getFilteredEvents();
        console.log(this.user.registeredEvents)
    },
    methods: {
      getFilteredEvents() {
        console.log("getFilteredEvents", this.userEventType)
        const allUserEvents = this.user.registeredEvents
        if (this.userEventType == 'Registered Events') {
          allUserEvents.forEach(
            (eventID) => {
              const eventObj = this.allEvents.find((eventObj) => eventObj._id == eventID)
              const eventDate = new Date(eventObj.eventDate)
              if(this.isAfterToday(eventDate)){
                this.filteredEvents.push(eventObj) 
              }
            }
          )
        } else if (this.userEventType == 'Attended Events') {
          allUserEvents.forEach(
            (eventID) => {
              const eventObj = this.allEvents.find((eventObj) => eventObj._id == eventID)
              const eventDate = new Date(eventObj.eventDate)
              if(!this.isAfterToday(eventDate)){
                this.filteredEvents.push(eventObj) 
              }
            }
          )
        } else if (this.userEventType == 'Hosted Events') {
          console.log("here", this.$store.state.events)
          console.log("userEvents", this.$store.state.user.createdEvents)
          this.$store.state.user.createdEvents.forEach(
            (eventObj) => {
              console.log(eventObj)
              if(eventObj.eventHost._id == this.user._id){
                this.filteredEvents.push(eventObj)
              }
            }
          )
        }
      },
      isAfterToday(date) {
        const today = new Date();

        today.setHours(23, 59, 59, 998);

        return date > today;
      }
    }
}


</script>

<style>

</style>

