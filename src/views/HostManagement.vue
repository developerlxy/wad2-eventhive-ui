<template>
    <LoadingScreen v-if="isLoading"></LoadingScreen>
  
    <div v-else>
        <v-container fluid>
    <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
      <v-col
        class="text-left">
        <h1>Event: {{ eventObj["eventName"] }}</h1>
      </v-col>
</v-row>
          
            <div>

              <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
    <v-col
        cols="7"
        class="text-left"> 
        <v-img :src="eventObj['eventPhotoURL']"></v-img>
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

          <h2>Attendees</h2>
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
      
    <v-row>
      <v-col>
        <v-date-picker v-model="picker" :landscape="!landscape" :reactive=true ></v-date-picker>
        <v-btn color="primary"
    @click="changeDate"
    >
      change event date
    </v-btn>
        <v-btn
      class="ma-2"
      color="success"
      @click="increasePax"
    >
      increase pax
    </v-btn>

    <v-text-field
  v-model="capacity"
  hide-details
  single-line
  type="number"
/>
    
    
    <v-btn
      class="ma-2"
      color="error"
      @click="deleteEvent"
    >
      delete event
    </v-btn>
{{ getFormattedDate }}
    
   
      </v-col>
    </v-row>
  </div>
  
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
      this.setPicker();
      this.getCapacity()
      },
      data() {
        return {
          // landscape: true,
          reactive: true,
          showSlider:false,
          isLoading: true,
          eventID:'',
          picker:'',
          capacity:0,
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
        attendees() {
          return this.eventObj["attendees"]
        },
        landscape() {
        return this.$vuetify.breakpoint.width <= 700
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
      this.$store.dispatch('getEvents')
      this.$router.push('/') 
  }
  },
  increasePax() {
    console.log(typeof this.capacity)
    this.axios.put(`https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events/capacity`,{'_id':this.eventID, 'maxCapacity':parseInt(this.capacity)})
    this.$store.dispatch('getEvents')
  },
  changeDate() {
    this.axios.put(`https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events/date`,{'_id':this.eventID, 'eventDate':this.picker})
    this.$store.dispatch('getEvents')
  },
  setPicker() {
          let thearray = this.eventObj["eventDate"].split("T"); 
            this.picker = thearray[0]
          },
  getCapacity() {
    this.capacity = this.eventObj["maxCapacity"]
  }
  
  }
}

  
  </script>