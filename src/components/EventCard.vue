<template>
    <v-card
    width="300px"
    @click="toEvent()"
  >
    <v-img
      :src="eventDetails.eventPhotoURL"
      height="200px"
    ></v-img>

    <v-card-title>
      <v-row class="py-2 mx-1">
        {{eventDetails.eventName}}
        <v-spacer></v-spacer>
        <v-icon class="mx-1">star</v-icon>
        {{ getAvgRating }}
      </v-row>
    </v-card-title>

    <v-card-text>
      <v-row class="py-2 mx-1">
        <v-icon class="mx-1">place</v-icon>
        {{eventDetails.eventLocation}}
      </v-row>
      <v-row class="py-2 mx-1">
        <v-icon class="mx-1">event</v-icon>
        {{ getFormattedDate }}
      </v-row>
      <v-row class="pt-2 pb-3 mx-1">
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
