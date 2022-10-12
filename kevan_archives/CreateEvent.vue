<template>
  <LandingScreen v-if="isLoading"></LandingScreen>

  <div v-else>
    <!-- navbar component -->
    <SearchBar></SearchBar>

    <br>
    <h1>
      Fancy A New Event?
    </h1>
    <p style="color: grey;">
      Create a cool name and tell event-goers why they should come. Add details so they know what kind of fun they are in for!
    </p>

    <CreateEventForm></CreateEventForm>
    <br>
    Checking if the component is imported correctly, here is eventName: {{eventName}}
    <br>
    <CreateEventFormDate></CreateEventFormDate>
    <br>
    <v-btn color="success" class="mr-4" v-on:click="submitCreateEvent">
        Let's go!
    </v-btn>
  </div>
</template>

<script>
import LandingScreen from '../components/LandingScreen.vue';
import Categories from '@/components/Categories.vue';
import SearchBar from '@/components/SearchBar.vue';
import CreateEventForm from '@/components/CreateEventForm.vue';
import CreateEventFormDate from '@/components/CreateEventFormDate.vue';


export default {
    name: "createEvent",
    components: { LandingScreen, Categories, SearchBar, CreateEventForm, CreateEventFormDate },
    mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    },
    data() {
      return {
        isLoading: true
      }
    },
    methods: {
      submitCreateEvent: function() {
        var self = this;
        var data = JSON.stringify({
          // "eventID": "Testis1",
          "eventName": eventName,
          "eventLocation": location,
          "eventDate": eventDate,
          "eventCategory": category,
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
