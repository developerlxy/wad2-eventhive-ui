<template>
  <v-form class="">
    <v-btn class="greenDark white--text reviewBtn ma-2" @focus="inputReview = true">
      Review Event
    </v-btn>
    <v-container v-if="inputReview" class="greenLight">
      <v-textarea
        outlined
        hide-details
        placeholder="Enter your review here"
        background-color="white"
      >
      </v-textarea>
      <v-btn class="ma-2"> Cancel </v-btn>
      <v-btn class="ma-2"> Submit </v-btn>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "Review",
  data() {
    return {
      inputReview: true,
    };
  },
};
</script>
