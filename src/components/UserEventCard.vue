<template>
    <v-card elevation="2" >
        <v-row>
            <v-col
            class="event-card-img pl-8 pr-8 col-sm-6 col-md-3"
            
            >
            <v-img
              contain
              class="v-img"
              :src="eventObj.eventPhotoURL"
              
            >
            </v-img>
            </v-col>

            <v-col
            class="event-card-text col-sm-6 col-md-9 pl-6 pl-sm-0 text-left justify-center my-md-4 my-lg-12"
            >
                <div class="event-card-date body-1">{{eventDateString}}</div>
                <v-card-title class="mb-4 text-h5">{{eventObj.eventName}}</v-card-title>
                <v-card-subtitle class="text-subtitle-1">{{eventObj.eventLocation}}</v-card-subtitle>
                <v-btn 
                  v-if="this.eventType=='Registered Events'"
                  class="text-none ml-4 mb-5"
                  color="greenDark"
                  dark
                >
                  View event details
                </v-btn>
                <v-btn 
                  v-else
                  class="text-none ml-4 mb-4"
                  color="greenDark"
                  dark
                >
                  Review event
                </v-btn>
            </v-col>
        </v-row>
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
        margin-left: 16px;
        padding:0;
        margin-top: 16px
    }
    .event-card-img{
        justify-content: center;
        display: flex;
        padding: 20px;
    }

</style>
