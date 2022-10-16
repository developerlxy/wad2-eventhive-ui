<template>
  <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="eventName" :counter="50" :rules="nameRules" label="Event Name" required></v-text-field>

      <v-text-field v-model="category" :rules="categoryRules" label="Category" required></v-text-field>

      <v-text-field v-model="location" :rules="locationRules" label="Location" required></v-text-field>

      <!-- <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required>
      </v-select> -->
      <!-- commented this for if wan convert categories to dropdown list in the future -->


      <!-- <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
        required></v-checkbox> -->

      <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn> -->
    </v-form>
</template>

<script>
export default {
  data: () => ({
    // props: ['eventName', 'category', 'location'],
    valid: true,
    eventName: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],
    category: '',
    categoryRules: [
      v => !!v || 'Please indicate what category your event BEE-longs to',
    ],
    location: '',
    locationRules: [
      v => !!v || 'Please tell us where is your event located at',
    ],
    // select: null,
    // items: [
    //   'Item 1',
    //   'Item 2',
    //   'Item 3',
    //   'Item 4',
    // ],
    // checkbox: false,
    // <!-- commented this for if wan convert categories to dropdown list in the future -->
    
  }),

  // methods: {
  //   validate() {
  //     this.$refs.form.validate()
  //   },
  // },
}
</script>