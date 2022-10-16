<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <NavBar> </NavBar>
    <br>
    <h1>
      Fancy A New Event?
    </h1>
    <p style="color: grey;">
      Create a cool name and tell event-goers why they should come. Add details so they know what kind of fun they are in for!
    </p>

    <v-form ref="form" v-model="valid" lazy-validation class="mx-16">
      <v-text-field v-model="eventName" :counter="50" :rules="nameRules" label="Event Name" required></v-text-field>

      <v-text-field v-model="category" :rules="categoryRules" label="Category" required></v-text-field>

      <v-text-field v-model="location" :rules="locationRules" label="Location" required></v-text-field>

      <!-- <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required>
      </v-select> -->
      <!-- commented this for if wan convert categories to dropdown list in the future -->


      <!-- <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
        required></v-checkbox> -->

      <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn> -->
    </v-form>
    <br>
    <!-- Checking if the component is imported correctly, here is eventName: {{eventName}}<br>
    Checking if the component is imported correctly, here is Category: {{category}}<br>
    Checking if the component is imported correctly, here is location: {{location}}<br>
    Checking if the component is imported correctly, here is eventTime: {{eventTime}}<br>
    Checking if the component is imported correctly, here is eventDate: {{eventDate}}<br>
    <br> -->
    
    <v-expansion-panels class="ml-16">
      <v-expansion-panel>
        <v-expansion-panel-header v-slot="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              Event date and time
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span v-if="open">When is your event going to be held?</span>
                <v-row
                  v-else
                  no-gutters
                  style="width: 100%"
                >
                  <v-col cols="6">
                    Event date: {{ eventDate || 'Not set' }}
                  </v-col>
                  <v-col cols="6">
                    Event time: {{ eventTime || 'Not set' }}
                  </v-col>
                </v-row>
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row
            justify="space-around"
            no-gutters
          >
            <v-col cols="3">
              <v-menu
                ref="dateMenu"
                :close-on-content-click="false"
                :return-value.sync="eventDate"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="eventDate"
                    label="Event date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dateMenu.isActive = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dateMenu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="3"> 
              <!-- https://vuetifyjs.com/en/components/time-pickers/#misc -->
              <v-dialog
                ref="dialog"
                v-model="modal2"
                :return-value.sync="eventTime"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="eventTime"
                    label="Event time"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="modal2"
                  v-model="eventTime"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="modal2 = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(eventTime)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>



    <br>
    <v-btn color="success" class="mr-4" v-on:click="submitCreateEvent">
        Let's go!
    </v-btn>
  </div>
</template>

<script>
import LandingScreen from '../components/LandingScreen.vue';
import Categories from '@/components/Categories.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    name: "createEvent",
    components: { LandingScreen, Categories, NavBar },
    mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    },
    data() {
      return {
        isLoading: true,

        valid: true,
        eventName: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 50) || 'Name must be less than 50 characters',
        ],
        category: '',
        categoryRules: [
          v => !!v || 'Please indicate what category your event BEE-longs to',
        ],
        location: '',
        locationRules: [
          v => !!v || 'Please tell us where is your event located at',
        ],

        eventDate: null,
        eventTime: null,
        modal2: false
      }
    },
    methods: {
      submitCreateEvent: function() {
        var self = this;
        var data = JSON.stringify({
          // "eventID": "Testis1",
          "eventName": self.eventName,
          "eventLocation": self.location,
          "eventDate": self.eventDate,
          "eventCategory": self.category,
          // "eventPhotoURL": "url here"
        });

        var config = {
          method: 'post',
          url: 'https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };

        this.axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
};

</script>
