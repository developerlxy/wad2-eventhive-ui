<template>
    <div class="user-event-carousel mx-lg-12 mx-sm-10 mx-6 mt-2">
      <p class="d-flex text-h4 brownDark--text font-weight-bold  ml-4 mt-6">
        {{this.title}}
      </p>
      <p class="text-h6 mt-6 font-weight-medium">
        {{this.message}}
      </p>
      <v-row
          v-for="event in this.filteredEvents"
          :key="event._id"
          class="my-4"
          data-aos="fade-left"
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
  name: "UserEventCarousel",
  components: { UserEventCard },
  props: {
    userEventType: {
      type: String
    },
  },
    
    data() {    
        return {
          allEvents: [],
          user: this.$store.state.user,
          filteredEvents: [],
          title: "",
          message: ""
        }
    },
    mounted() {
        this.allEvents = this.$store.state.events
        this.$store.dispatch('getUser')
        AOS.init(
          {duration: 1000}
        )
        
    },
    methods: {
      isAfterToday(date) {
        const today = new Date();

        today.setHours(23, 59, 59, 998);

        return date > today;
      },
      getFilteredEvents(userEventType) {
        this.filteredEvents = []
        const allUserEvents = this.user.registeredEvents
        if (userEventType == 'registered') {
          this.title = "Registered Events"
          allUserEvents.forEach(
            (eventId) => {
              let eventObj = this.allEvents.find((event) => event._id == eventId)
              let eventDate = new Date(eventObj.eventDate)
              if(this.isAfterToday(eventDate)){
                this.filteredEvents.push(eventObj) 
              }
            }
          )
          if (this.filteredEvents.length == 0) {
            this.message = "No registered events. What are you waiting for?"
          }
        } else if (userEventType == 'attended') {
          this.title = "Attended Events"
          allUserEvents.forEach(
            (eventId) => {
              let eventObj = this.allEvents.find((event) => event._id == eventId)
              console.log(eventObj)
              let eventDate = new Date(eventObj.eventDate)
              if(!this.isAfterToday(eventDate)){
                this.filteredEvents.push(eventObj) 
              }
            }
          )
          if (this.filteredEvents.length == 0) {
            this.message = "You haven't attended any events yet..."
          }
        } else if (userEventType == 'hosted') {
          console.log("here", this.$store.state.events)
          console.log("userEvents", this.$store.state.user.createdEvents)
          this.title = "Hosted Events"
          this.$store.state.user.createdEvents.forEach(
            (eventID) => {
              for (let existing in this.$store.state.events) {
                if (this.$store.state.events[existing]._id == eventID) {
                  this.filteredEvents.push(this.$store.state.events[existing])
                }
              }              
            }
          )
          if (this.filteredEvents.length == 0) {
            this.message = "You haven't hosted any events yet. Why don't you give it a shot?"
          }
        }
        console.log("filteredEvents:", this.filteredEvents)
        return this.filteredEvents
      },
    },
    watch: {
    '$route.params': {
        handler() {
            this.allEvents = this.$store.state.events
            const userEventType = this.$route.query.type
            this.getFilteredEvents(userEventType)
        },
        immediate: true,
    }
  }
}


</script>

<style></style>
