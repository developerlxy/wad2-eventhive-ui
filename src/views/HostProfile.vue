<template>
  <div>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <div v-else>

    <div v-if="xsBreakpoint">
      <v-container fluid class="peachLight">
        <v-row
          no-gutters
          style="flex-wrap: nowrap;"
          class="mx-4"
        >
          <v-col
            cols="12"
            class="flex-grow-0 flex-shrink-0"
          >
            <v-card
              class="pt-4"
              outlined
              tile
              data-aos="flip-up"
            >
            <v-avatar size="150" class="mt-2">
                <img :src="'/src/assets/images/test.png'">
            </v-avatar>
            <v-rating
              :value="avgRating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
              ></v-rating>
            
            <v-card
              class="mx-auto py-4"
              outlined
            >
        <v-list-item three-line >
          <v-list-item-content>
            <div style="background-color:lightgray;padding:10px;text-align:left;font-weight:bold;">
              Contact Info
            </div>
            <v-list-item style="text-align:left" class=""><br>
              Email: {{ host["userEmail"] }} <br><br>
              Contact No.: {{ host['userPhone'] }}
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
        </v-row>
          <v-col
            cols="2"
            style="min-width: 100px; max-width: 100%;"
            class="flex-grow-1 flex-shrink-0"
          >
            <v-card
              class="pa-2 text-left px-8 pt-4"
              outlined
              tile
              data-aos="flip-up"
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
      </v-container>
    </div>
    <div v-else>
      <v-container fluid class="peachLight pb-16 pt-8">
    <v-row
      no-gutters
      style="flex-wrap: nowrap;"
      class="mx-4 mb-16"
    >
      <v-col
        cols="3"
        class="flex-grow-0 flex-shrink-0"
      >
        <v-card
          class="pt-2 mr-4"
          outlined
          tile
          data-aos="flip-up"
          data-aos-duration="1000"
        >
        <v-avatar size="150" class="mt-2">
            <img :src="'/src/assets/images/test.png'">
        </v-avatar>
        <v-rating
          :value="avgRating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
          ></v-rating>
        
        <v-card
          class="mx-auto pb-4"
          outlined
        >

    <v-list-item three-line>
      <v-list-item-content>
        <div style="background-color:lightgray;padding:10px;text-align:left;font-weight:bold;">
          Contact Info
        </div>
         <v-list-item style="text-align:left;word-wrap: break-word;" class="px-2"><br>
          Email: {{ host["userEmail"] }} 
          <br><br>
          Contact No.: {{ host['userPhone'] }}
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
          class="pa-2 text-left px-8 pt-4"
          outlined
          tile
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <h1>Hey, I'm {{ host["userName"] }}!</h1><br/>
          <p v-html="host['userDesc']"></p>
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
  </div>
  </template>
  
  <script>
  import LoadingScreen from '../components/LoadingScreen.vue';
  import HostEventReview from '@/components/HostEventReview.vue';
  import AOS from 'aos'
  
  
  export default {
      name: "Home",
      components: { LoadingScreen, HostEventReview },
      mounted() {
      this.axios.get('https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users').
      then(result=>{
        this.allUsers = result.data
      })
      AOS.init()
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
            },
          allUsers: null
        }
      },
      computed: {
        host() {
          var eventHost
          for (let event of this.$store.state.events) {
            if (event["_id"]==this.eventID) {
              eventHost = event["eventHost"]
            }
          }
          for (let user of this.allUsers) {
            if (user['_id'] == eventHost['_id']) {
              return user
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
        xsBreakpoint() {
          return this.$vuetify.breakpoint.name == 'xs' 
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
  