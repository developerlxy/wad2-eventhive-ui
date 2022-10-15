<template>
    <v-card elevation="2">
        <v-row>
            <v-col
            cols="3"
            class="event-card-img pl-8 pr-2"
            >
            <v-img
              class="v-img"
              :src="eventObj.eventPhotoURL"
            >

            </v-img>
            </v-col>

            <v-col
            cols="9"
            class="event-card-text pl-0"
            >
                <div class="event-card-date">{{eventDateString}}</div>
                <v-card-title class="mb-6"><h3>{{eventObj.eventName}}</h3></v-card-title>
                <v-card-subtitle class="">{{eventObj.eventLocation}}</v-card-subtitle>
                <v-card-text>Sample text</v-card-text>
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
        }
    }
</script>

<style>
    .event-card-text{
        text-align: left;
    }
    .event-card-date{
        margin-left: 16px;
        padding:0;
        margin-top: 16px
    }
    .event-card-img{
        justify-content: center;
        display: flex;
        height: 250px;
        width: 250px;
        padding: 20px;
    }

</style>
