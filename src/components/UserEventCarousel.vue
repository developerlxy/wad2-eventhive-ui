<template>
    <div class="user-event-carousel mx-12 mt-10">
      <div>
        {{userEventType}}
      </div>
      <v-row
          v-for="event in allEvents"
          :key="event._id"
          class="my-6"
      >
        <v-col>
          <UserEventCard :event-obj="event"></UserEventCard>
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
            allEvents: []
        }
    },
    mounted() {
        this.allEvents = this.$store.state.events
    }
}


</script>

<style>

</style>