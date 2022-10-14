<template>
  <v-form class="review d-inline-flex flex-column">
    <v-row>
      <v-btn
        class="greenDark white--text reviewBtn ma-2"
        @focus="inputReview = !inputReview"
      >
        Review Event
      </v-btn>
    </v-row>

    <v-row>
      <v-container v-if="inputReview" class="greenLight">
        <v-rating
          empty-icon="far fa-star"
          full-icon="fas fa-star"
          hover
          length="5"
          size="20"
          color="greenDark"
          background-color="grey"
          value="5"
          v-model="ratingValue"
          @click="test()"
        ></v-rating>
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
    </v-row>
  </v-form>
</template>
<script>
export default {
  name: "Review",
  data() {
    return {
      inputReview: false,
      ratingValue: 5,

    };
  },
  methods: {
    test() {
      console.log(this.ratingValue)
    },
  },
};
</script>

<style></style>
