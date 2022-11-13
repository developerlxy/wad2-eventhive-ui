<template>
  <div>
  <div class="event-card brownLight py-4 py-lg-8 px-lg-16">
    <v-card class="mx-auto mt-2 pt-4" :width="cardWidth">
      <v-container>
        <v-row>
          <v-card
            class="mx-auto mt-5"
            :width="width"
            outlined
            color="transparent"
          >
            <img
              :src="eventObj['eventPhotoURL']"
              aspect-ratio="16/9"
              width="100%"
            />
          </v-card>
          <v-card class="mx-auto" :width="width" outlined color="transparent">
            <v-container class="fill-height">
              <v-row class="d-flex flex-column">
                <v-col> </v-col>
                <v-col>
                  <h1 class="text-left">{{ eventObj["eventName"] }}</h1>
                </v-col>
                <v-col class="text-left">
                  <!-- <template>
                            <div>
                            <v-dialog
                            v-model="dialog"
                            width="500"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-card
                                    block
                                    color="greenDark"
                                    class="white--text no-text-transform btn-multiline"
                                    v-bind="attrs"
                                    v-on="on"  
                                >
                                <v-card-title
                                class="justify-center"
                                >
                                
                                    Delete Event
                                
                            </v-card-title>
                                </v-card>
                        </template>
                        <v-card>
                            <v-card-title class="text-h5 grey lighten-2">
                                Confirmation
                            </v-card-title>

                            <v-card-text>
                               Are you sure you want to delete this event: {{eventObj["eventName"]}}?
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                color="danger"
                                text
                                @click="intermediate"
                                >
                                Confirm
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                        </div>
                        </template> -->
                </v-col>
              </v-row>
              <v-row class="align-end justify-left"> </v-row>
            </v-container>
          </v-card>
        </v-row>
        <v-row>
          <v-card
            class="mx-auto px-4 px-2 pt-8"
            :width="width"
            outlined
            color="transparent"
          >
            <h2 class="text-left font-weight-medium mb-12">Description</h2>
            <span v-html="desc" class="text-left"> </span>
          </v-card>
        </v-row>
      </v-container>

      <link
        href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css"
        rel="stylesheet"
      />
    </v-card>
  </div>

  <div class="event-card brownLight py-4 py-lg-8 px-lg-16">
    <v-card class="mx-auto mt-2 pt-4" :width="cardWidth">
      <v-container>
        <v-row>
          <v-card
            class="mx-auto mt-5"
            :width="width"
            outlined
            color="transparent"
          >
            <img
              :src="eventObj['eventPhotoURL']"
              aspect-ratio="16/9"
              width="100%"
            />
          </v-card>
        </v-row>
      </v-container>
    </v-card>

    <v-divider></v-divider>
    <v-card>
      <div v-if="attendees.length == 0">No attendees yet...</div>
      <div v-else>
        <div v-for="attendee of attendees">
          <v-card-title
            ><v-avatar><img :src="'/src/assets/images/test.jpg'" /></v-avatar
            >&nbsp; {{ attendee["userName"] }}</v-card-title
          >
          <v-card-subtitle></v-card-subtitle>
        </div>
      </div> </v-card
    ><br />

    <v-row>
      <v-col>
        <v-date-picker
          v-model="picker"
          :landscape="!landscape"
          :reactive="true"
        ></v-date-picker>
        <v-btn color="primary" @click="changeDate"> change event date </v-btn>
        <v-btn class="ma-2" color="success" @click="increasePax">
          increase pax
        </v-btn>

        <v-text-field
          v-model="capacity"
          hide-details
          single-line
          type="number"
        />

        <v-btn class="ma-2" color="error" @click="deleteEvent">
          delete event
        </v-btn>
        {{ getFormattedDate }}
      </v-col>
    </v-row>
  </div>
</div>
</template>

<script>
import EditEvent from '../components/EditEvent.vue';
export default {
  name: "HostManagement1",
  components: {EditEvent},
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    this.setPicker();
    this.getCapacity();
  },
  data() {
    return {
      // landscape: true,
      reactive: true,
      showSlider: false,
      isLoading: true,
      eventID: "",
      picker: "",
      capacity: 0,
      dialog: false,
    };
  },
  computed: {
    eventObj() {
      for (let event of this.$store.state.events) {
        if (event["_id"] == this.eventID) {
          return event;
        }
      }
    },
    attendees() {
      return this.eventObj["attendees"];
    },
    landscape() {
      return this.$vuetify.breakpoint.width <= 700;
    },
    width () {
            switch(this.$vuetify.breakpoint.name) {
            case 'xs': return 450
            case 'sm': return 450
            case 'md': return 450
            case 'lg': return 500
            case 'xl': return 500
            }
        },
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 500;
        case "sm":
          return 760;
        case "md":
          return 1000;
        case "lg":
          return 1300;
        case "xl":
          return 1500;
      }
    },},
    watch: {
      "$route.params": {
        handler() {
          this.eventID = this.$route.query.id;
        },
        immediate: true,
      },
    },
    methods: {
      deleteEvent() {
        if (confirm("Are you sure you want to delete this event?")) {
          this.axios.delete(
            `https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events/delete/${this.eventID}`
          );
          this.$store.dispatch("getEvents");
          this.$router.push("/");
        }
      },
      increasePax() {
        console.log(typeof this.capacity);
        this.axios.put(
          `https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events/capacity`,
          { _id: this.eventID, maxCapacity: parseInt(this.capacity) }
        );
        this.$store.dispatch("getEvents");
      },
      changeDate() {
        this.axios.put(
          `https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events/date`,
          { _id: this.eventID, eventDate: this.picker }
        );
        this.$store.dispatch("getEvents");
      },
      setPicker() {
        let thearray = this.eventObj["eventDate"].split("T");
        this.picker = thearray[0];
      },
      getCapacity() {
        this.capacity = this.eventObj["maxCapacity"];
      },
    },
  }
</script>
