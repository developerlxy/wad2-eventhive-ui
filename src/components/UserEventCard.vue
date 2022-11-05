<template>
    <v-card elevation="2" >
      <div v-if="xsBreakpoint" class="">
        <v-col class="pa-5">
          <v-img
          contain
          class="v-img my-auto mx-auto "
          :src="eventObj.eventPhotoURL"
          max-height="300"
          >
          </v-img>
        </v-col>
      <div class="my-auto px-3">
        <p class="ml-4 mb-0 font-weight-medium text-left">{{eventDateString}}</p>
        <v-card-title class="text-h5 text-left mb-3 font-weight-bold brownDark--text">{{eventObj.eventName}}</v-card-title>
        <v-card-subtitle class="text-left text-h6 font-weight-medium mb-1">{{eventObj.eventLocation}}</v-card-subtitle>
        <v-col
          v-if="this.eventType=='Registered Events'"
          class="text-left pt-0"
        >
          <v-btn 
          block
          class="text-none mb-2"
          color="greenDark"
          dark
          >
          View event details
          </v-btn>
        </v-col>
        <v-col class="text-left pt-0" v-else>
          <v-btn 
            block
            class="text-none align-left"
            color="greenDark"
            dark
          >
            Review event
          </v-btn>
        </v-col>
        
      </div>
    </div>
    
    <div v-else class="d-flex flex-no-wrap justify-start">
      <v-avatar
        tile
        size="250"
        class="ma-4"
       >
        <v-img
          contain
          class="v-img my-auto"
          :src="eventObj.eventPhotoURL"
          max-height="225"
          max-width="225"
          >
        </v-img>
      </v-avatar>
      <div class="my-auto">
        <p class="ml-4 mb-5 font-weight-medium text-left mt-3">{{eventDateString}}</p>
        <v-card-title class="text-h5 text-left mb-5 font-weight-bold brownDark--text">{{eventObj.eventName}}</v-card-title>
        <v-card-subtitle class="text-left text-h6 font-weight-medium mb-5">{{eventObj.eventLocation}}</v-card-subtitle>
        <v-col
          v-if="this.eventType=='Registered Events'"
          class="text-left pt-0"
        >
          <v-btn 
          
          class="text-none mb-2"
          color="greenDark"
          dark
          >
          View event details
          </v-btn>
        </v-col>
        <v-col class="text-left pt-0" v-else>
          <v-btn 
            class="text-none align-left"
            color="greenDark"
            dark
          >
            Review event
          </v-btn>
        </v-col>
        
      </div>
    </div>
      
    

    </v-card>        
</template>

<script>
    export default {
        name: "UserEventCard",
        props: {
          eventObj: {
            type: Object
          },
          eventType: {
            type: String
          }
        },
        methods: {
            getFormattedDate() {
              const eventDate = new Date(this.eventObj.eventDate).toString()
              const eventDateList = eventDate.split(" ")
              const day = eventDateList[0]
              var formattedDay = ""
              switch(day){
                case 'Mon':
                  formattedDay = 'Monday'
                case 'Tue':
                  formattedDay = 'Tuesday'
                case 'Wed':
                  formattedDay = 'Wednesday'
                case 'Thu':
                  formattedDay = 'Thursday'
                case 'Fri':
                  formattedDay = 'Friday'   
                case 'Sat':
                  formattedDay = 'Saturday'
                case 'Sun':
                  formattedDay = 'Sunday'
              }
              this.eventDateString = eventDateList[2] + " " + eventDateList[1] + " " + eventDateList[3] + ', ' + formattedDay 
            },
            redirectToEventPage() {
              if (this.eventType == 'Hosted Events' ) {
                this.$router.push() //host page url
              } else {
                // thad method
              }
            },
        },
        computed: {
          xsBreakpoint() {
            return this.$vuetify.breakpoint.name == 'xs' 
          }
        },
        data() {
          return {
            eventDateString: null
          }
        },
        mounted() {
          this.getFormattedDate()
          console.log(this.eventType)
        }
    }
</script>

<style>

    .event-card-date{
      font-weight: bold;
    }
    .event-card-img{
        justify-content: center;
        display: flex;
        padding: 20px;
    }

</style>
