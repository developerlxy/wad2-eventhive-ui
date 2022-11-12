<template>
    <LoadingScreen v-if="isLoading"></LoadingScreen>
  
    <div v-else>
        <v-container fluid>
    <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
      <v-col
        cols="7"
        class="text-left">
        <h1>Event: {{ eventObj["eventName"] }}</h1>
            <img :src="eventObj['eventPhotoURL']">
            <div>

              <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
    <v-col
        cols="7"
        class="text-left"> 
        <v-date-picker v-model="picker" :landscape=true :reactive=true ></v-date-picker>
    </v-col>
    <v-col>
      <v-btn
      class="ma-2"
      color="success"
      @click="increasePax"
    >
      increase pax
    </v-btn>

      <v-slider v-model="capacity" label="Set capacity" hint="Be honest" min="0" max="200" thumb-label>
        </v-slider>
    </v-col>
  </v-row>
    
    <v-btn
      class="ma-2"
      color="error"
      @click="deleteEvent"
    >
      cancel event
    </v-btn>

    
    <v-btn color="primary"
    @click="changeDate"
    >
      change event date
    </v-btn>
  </div>


      </v-col>

      <v-col
        cols="1"
        style="min-width: 100px; max-width: 100%;"
        class="flex-grow-1 flex-shrink-0"
      >
        <v-card
          class="pa-2 text-left"
          outlined
          tile
        >

          <h1>Attendees</h1>
          <v-card
    class="pa-4"
    flat
    height="100px"
  >
 
  </v-card>
  <v-divider></v-divider>
        <v-card>
          <div v-if="attendees.length==0">No attendees yet...</div>
            <div v-else>
              <div v-for="attendee of attendees">
                <v-card-title><v-avatar><img :src="'/src/assets/images/test.png'"></v-avatar>&nbsp;  {{attendee["userName"]}}</v-card-title>
                <v-card-subtitle></v-card-subtitle>
              </div>
    
  </div>

        </v-card><br/>
        <br/>
       <br/>
        <br/>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
    </div>

</template>

<script>
  import LoadingScreen from '../components/LoadingScreen.vue';  
  
  
  export default {
      name: "HostManagement",
      components: { LoadingScreen },
      mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      },
      data() {
        return {
          picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
          landscape: true,
          reactive: true,
          showSlider:false,
          isLoading: true,
          eventID:'',
        }
      },
      computed: {
        eventObj() {
          for (let event of this.$store.state.events) {
            if (event["_id"]==this.eventID) {
              return event
            }
          }
        },
        capacity() {
          return this.eventObj["maxCapacity"]
        },
        attendees() {
          return this.eventObj["attendees"]
        }
      },
      watch: {
    '$route.params': {
        handler() {
            this.eventID = this.$route.query.id
        },
        immediate: true,
    }
},
methods: {
  deleteEvent() {
    if (confirm("Are you sure you want to delete this event?")) {
      this.axios.delete(`https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events/delete/${this.eventID}`);
      this.$router.push('Home') 
  }
  },
  increasePax() {
    this.axios.put(`https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users/${this.eventID}`,{'maxCapacity':this.capacity})

  },
  changeDate() {
    this.axios.put(`https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users/${this.eventID}`,{'eventDate':this.picker})
  }
  }
}

  
  </script>