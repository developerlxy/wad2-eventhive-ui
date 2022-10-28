<template>
    <v-card
    @click="toEvent()"
  >
    <v-img
      :src="eventDetails.eventPhotoURL"
      lazy-src="../src/assets/images/no-image-placeholder.jpg"
      height="200px"
    ></v-img>

    <v-card-title class="d-block">
      <v-row class="pa-2 d-flex flex-nowrap">
        <div class="text-truncate">
          {{eventDetails.eventName}}
        </div>
        <v-spacer></v-spacer>
        <v-icon class="mx-1">star</v-icon>
        <div class="">
          {{ getAvgRating }}
        </div>
      </v-row>
    </v-card-title>

    <v-card-text class="d-block">
      <v-row class="pa-2">
      </v-row>
      <v-row class="pa-2 d-flex flex-nowrap">
        <v-icon class="mx-1">place</v-icon>
        <div class="text-truncate">
          {{eventDetails.eventLocation}}
        </div>
      </v-row>
      <v-row class="pa-2 d-flex flex-nowrap">
        <v-icon class="mx-1">event</v-icon>
        <div class="text-truncate">
        {{ getFormattedDate }}
        </div>
      </v-row>
      <v-row class="pa-2">
        <v-icon class="mx-1">schedule</v-icon>
        <!-- TODO: add time in the db -->
        <!-- {{ getFormattedTime }} -->
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
        name: 'EventCard',
        props: {
            eventDetails: {
                type: Object,
                required: true
            }
        },
        methods: {
            toEvent() {
                this.$router.push("/events/" + this.eventDetails["_id"]);
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
            // TODO: add time in the db
            // let date = new Date(this.eventDetails.eventDate);
            // return date.getHours() + ":" + date.getMinutes();
          }
        },
    }

</script>
