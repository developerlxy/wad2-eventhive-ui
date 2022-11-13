<template>
    <v-card
      @click="toEvent()"
    >
      <div class="justify-sm-center align-center d-block">
        <v-avatar
          class="ma-3"
          max-width="300"
          size="70%"
          tile>
          <v-img 
          :src="eventDetails.eventPhotoURL"></v-img>
        </v-avatar>

        <div>
          <h1 class="mt-3 ml-3 mr-2">
            <v-row class="py-2 mx-1 mt-1 mb-2 font-weight-bold text-left">
              <h3 class="font-weight-medium">{{eventDetails.eventName}}</h3>
            </v-row>
          </h1>

          <v-card-text class="d-block">
            <v-row class="py-2 mx-1 font-weight-medium d-flex flex-nowrap">
              <v-icon class="mx-1 d-inline" color="greenDark">place</v-icon>
              <div class="text-truncate">{{eventDetails.eventLocation.SEARCHVAL}}</div>
            </v-row>
            <v-row class="py-2 mx-1 font-weight-medium">
              <v-icon class="mx-1" color="greenDark">event</v-icon>
              {{ getFormattedDate }}
            </v-row>
            <v-row class="pt-2 pb-3 mx-1 font-weight-medium">
              <v-icon class="mx-1" color="greenDark">schedule</v-icon>
              {{ eventDetails.eventTime ? getFormattedTime : "TBD" }}
            </v-row>
          </v-card-text>
        </div>
      </div>
      <div class="mt-2">
        <v-card-subtitle v-html="eventDetails.eventDesc">
        </v-card-subtitle>
      </div>
    </v-card>
</template>

<script>
    export default {
        name: 'SecondaryEventCard',
        props: {
            eventDetails: {
                type: Object,
                required: true
            }
        },
        methods: {
            toEvent() {
              this.$router.push("/event/?id=" + this.eventDetails["_id"]);
            }
        },
        computed: {
          getAvgRating() {
            let sum = 0;
                if (this.eventDetails.eventReviews.length == 0) {
                  return "-";
                }
                for (let i = 0; i < this.eventDetails.eventReviews.length; i++) {
                    sum += this.eventDetails.eventReviews[i].numStars;
                }
                 
                return (sum / this.eventDetails.eventReviews.length).toPrecision();
          },
          getFormattedDate() {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = new Date(this.eventDetails.eventDate);
            return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
          },
          getFormattedTime() {
            const unformattedTime = this.eventDetails.eventTime
            const unformattedTimeList = unformattedTime.split(":")
            const hours = (unformattedTimeList[0] % 12) || 12
            const suffix = unformattedTimeList[0] >= 12 ? 'PM' : 'AM'
            return hours + '.' + unformattedTimeList[1] + " " + suffix
          },
          mdBreakpoint() {
            return this.$vuetify.breakpoint.mdAndDown
          }
        },
    }

</script>
