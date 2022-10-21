<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <NavBar> </NavBar>
    <br>
    <h1>
      Fancy A New Event?
    </h1>
    <p style="color: grey;">
      Create a cool name and tell event-goers why they should come. Add details so they know what kind of fun they are
      in for!
    </p>

    <v-form ref="form" v-model="valid" lazy-validation class="mx-16">
      <v-text-field v-model="eventName" :counter="100" :rules="nameRules" label="Event Name" required></v-text-field>

      <v-textarea v-model="eventDescription" clearable clear-icon="mdi-close-circle" label="Event Description"
        :rules="descriptionRules" required></v-textarea>

      <v-select v-model="selectedCategory" :items="category" :rules="categoryRules" label="Category" required>
      </v-select>

      <LocationSearchBar></LocationSearchBar>

      <br>
      selected location: {{ select }}

      <v-text-field v-model="location" :rules="locationRules" label="Location" required></v-text-field>
      <v-text-field v-model="maxCapacity" label="Max Capacity" required></v-text-field>
      <v-slider
              v-model="maxCapacity"
              color="orange"
              label="Fun Slider"
              hint="Be honest"
              min="1"
              max="1000"
              thumb-label
            ></v-slider>

    </v-form>
    <br>
    Checking if the component is imported correctly, here is eventName: {{eventName}}<br>
    Checking if the component is imported correctly, here is eventDescription: {{eventDescription}}<br>
    Checking if the component is imported correctly, here is selectedCategory: {{selectedCategory}}<br>
    Checking if the component is imported correctly, here is select: {{select}}<br>

    Checking if the component is imported correctly, here is location: {{location}}<br>
    Checking if the component is imported correctly, here is maxCapacity: {{maxCapacity}}<br>
    Checking if the component is imported correctly, here is eventTime: {{eventTime}}<br>
    Checking if the component is imported correctly, here is eventDate: {{eventDate}}<br>
    <br>

    <v-expansion-panels class="ml-16">
      <v-expansion-panel>
        <v-expansion-panel-header v-slot="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              Event date and time
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open">When is your event going to be held?</span>
                <v-row v-else no-gutters style="width: 100%">
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
          <v-row justify="space-around" no-gutters>
            <v-col cols="3">
              <v-menu ref="dateMenu" :close-on-content-click="false" :return-value.sync="eventDate" offset-y
                min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="eventDate" label="Event date" prepend-icon="mdi-calendar" readonly
                    v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="$refs.dateMenu.isActive = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dateMenu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="3">
              <!-- https://vuetifyjs.com/en/components/time-pickers/#misc -->
              <v-dialog ref="dialog" v-model="modal2" :return-value.sync="eventTime" persistent width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="eventTime" label="Event time" prepend-icon="mdi-clock-time-four-outline"
                    readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-time-picker v-if="modal2" v-model="eventTime" full-width>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal2 = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(eventTime)">
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
    <v-btn :disabled="!valid" color="success" class="mr-4" v-on:click="submitCreateEvent()">
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
      eventName: 'How to fucking create a motherfucking web application',
      nameRules: [
        v => !!v || 'No name? Come on you can do better than that',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters',
      ],

      eventDescription: 'This will teach you to fucking create a web application that does not fucking send cocksucking errors every other fucking second and make you wanna throw your sucking fucking balls to the walls',
      descriptionRules: [
        v => !!v || `Nobody is gonna come if you don't add fun details!`,
      ],

      // category: '',
      category: ['Sports', 'Arts', 'Music', 'Food', 'Pets', 'Games', 'Others'],
      selectedCategory: '',
      categoryRules: [
        v => !!v || 'Please indicate what category your event BEE-longs to',
      ],

      select: null,

      location: 'Sum backward toothless hillbilly shack somewhere',
      locationRules: [
        v => !!v || 'Please tell us where is your event located at',
      ],
      maxCapacity: null,

      eventDate: null,
      eventTime: null,
      modal2: false,
      date: null
    }
  },
  methods: {
    submitCreateEvent: function () {
      var self = this;
      var data = JSON.stringify({
        "eventName": self.eventName,
        "eventDesc": self.eventDescription,
        "eventLocation": self.location,
        "maxCapacity": self.maxCapacity,
        "eventDate": self.eventDate,
        "eventCategory": self.selectedCategory,
        "eventTime": self.eventTime
        // ------------------------ NEED TO ADD -------------------------
        // "eventPhotoURL": "url here"
        // "eventHost": self.eventHost
      });

      var config = {
        method: 'post',
        url: 'https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
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
