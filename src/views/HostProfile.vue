<template>
  <div>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <div v-else>
      <v-container fluid class="peachLight">
    <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
      <v-col
        cols="2"
        class="flex-grow-0 flex-shrink-0"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-avatar size="150">
            <img :src="'/src/assets/images/test.png'">
        </v-avatar>
        <v-rating
  empty-icon="$mdiStarOutline"
  full-icon="$mdiStar"
  half-icon="$mdiStarHalfFull"
  length="5"
  readonly
  size="64"
  value="avgRating"
></v-rating>
        
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div style="background-color:lightgray;padding:10px;text-align:left;font-weight:bold;">
          Contact Info
        </div>
        <v-list-item style="text-align:left"><br>
          Email: {{ host["userEmail"] }} <br><br>
          Contact No.: {{ avgRating }}
        </v-list-item>

      </v-list-item-content>

    </v-list-item>
  </v-card>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >

  </v-card>
        </v-card>
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
          <h1>Hey, I'm {{ host["userName"] }}!</h1><br/>
          <p>Descripion here...</p>
          <h2>Rating & Reviews</h2><br>
          <div v-if="reviews.length==0">
          <p>No reviews yet...</p>
        </div>
          <div v-else>
          <HostEventReview  v-for="review of reviews" :eventReview="review"></HostEventReview>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
      
    </div>
  </div>
  </template>
  
  <script>
  import LoadingScreen from '../components/LoadingScreen.vue';
  import HostEventReview from '@/components/HostEventReview.vue';
  
  
  export default {
      name: "Home",
      components: { LoadingScreen, HostEventReview },
      mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      },
      data() {
        return {
          isLoading: true,
          eventID: "",
          eventDetails: {
                type: Object,
                required: true    
            }
        }
      },
      computed: {
        host() {
          for (let event of this.$store.state.events) {
            if (event["_id"]==this.eventID) {
              return event["eventHost"]
            }
          }
        },
        reviews() {
          let returnArray = []
          for (let event of this.$store.state.events) {
            if (event["eventHost"]!=null && event["eventHost"]["_id"]==this.host["_id"]) {
              returnArray=returnArray.concat(event["eventReviews"]) 
            }
        }
          return returnArray
      },
      avgRating() {
        let count = this.reviews.length
        let total = 0
        for (let review of this.reviews) {
          total += review["numStars"]      
        }
        return total/count
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
  }
  </script>
  