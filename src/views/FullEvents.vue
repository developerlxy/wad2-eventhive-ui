<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <div v-else>
    <v-container class="mb-4">
    <v-row justify-xs="center">
      <v-col
          v-for="event in events"
          :key="event.name"
          class="col-sm-6 col-md-4 col-lg-3"
        >
          <EventCard :eventDetails="event" onclick="goToEvent"></EventCard>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import LoadingScreen from '../components/LoadingScreen.vue';
import EventCard from '@/components/EventCard.vue';


export default {
    name: "Home",
    components: { LoadingScreen, EventCard },
    mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
    },
    data() {
      return {
        isLoading: true,
        events:[],
      }
    },
    methods: {
      eventViewWithFilter: function (categoryFilter){
        var self = this;
        var data = JSON.stringify({
          "categories": [
            categoryFilter
          ]
        });

        var config = {
          method: 'post',
          url: 'https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events/categories',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };

        this.axios(config)
        .then(function (response) {
          self.events = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      gotoEvent: function (id){
        this.$router.push({ path:`/event?id=${id}`})
      }
    },
    watch: {
    '$route.params': {
        handler() {
            let categoryFilter = this.$route.query.category
            this.eventViewWithFilter(categoryFilter)
        },
        immediate: true,
    }
}
};
</script>
