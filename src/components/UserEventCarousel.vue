<template>
  <div class="user-event-carousel mx-lg-12 mx-sm-10 mx-6 mt-2">
    <p class="d-flex text-h4 brownDark--text font-weight-bold ml-4">
      {{ userEventType }}
    </p>
    <v-row v-for="event in getFilteredEvents" :key="event._id" class="my-4">
      <v-col>
        <UserEventCard
          :event-obj="event"
          :event-type="userEventType"
        ></UserEventCard>
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
      type: String,
      default: "Registered Events",
    },
  },

  data() {
    return {
      allEvents: [],
      user: this.$store.state.user,
      filteredEvents: [],
    };
  },
  mounted() {
    this.allEvents = this.$store.state.events;
    this.$store.dispatch("getUser");
    // this.getFilteredEvents();
    console.log(this.user.registeredEvents);
  },
  computed: {
    getFilteredEvents() {
      this.filteredEvents = [];
      console.log("getFilteredEvents", this.userEventType);
      const allUserEvents = this.user.registeredEvents;
      console.log(allUserEvents);
      if (this.userEventType == "Registered Events") {
        allUserEvents.forEach((eventID) => {
          // const eventObj = this.allEvents.find((eventObj) => eventObj._id == event._id)
          for (let existing in this.$store.state.events) {
            if (this.$store.state.events[existing]._id == eventID) {
              let eventObj = this.$store.state.events[existing];
              const eventDate = new Date(eventObj.eventDate);
              if (this.isAfterToday(eventDate)) {
                this.filteredEvents.push(this.$store.state.events[existing]);
              }
            }
          }
        });
      } else if (this.userEventType == "Attended Events") {
        allUserEvents.forEach((eventID) => {
          for (let existing in this.$store.state.events) {
            if (this.$store.state.events[existing]._id == eventID) {
              let eventObj = this.$store.state.events[existing];
              const eventDate = new Date(eventObj.eventDate);
              if (!this.isAfterToday(eventDate)) {
                this.filteredEvents.push(this.$store.state.events[existing]);
              }
            }
          }
        });
      } else if (this.userEventType == "Hosted Events") {
        this.$store.state.user.createdEvents.forEach((eventID) => {
          for (let existing in this.$store.state.events) {
            if (this.$store.state.events[existing]._id == eventID) {
              this.filteredEvents.push(this.$store.state.events[existing]);
            }
          }
        });
      }
      console.log("filteredEvents:", this.filteredEvents);
      return this.filteredEvents;
    },
  },
  methods: {
    isAfterToday(date) {
      const today = new Date();

      today.setHours(23, 59, 59, 998);

      return date > today;
    },
  },
};
</script>

<style></style>
