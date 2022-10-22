<template>
    <v-card
    class="mx-auto"
    max-width="250px"
    height="300px"
  >
    <v-img
      :src="eventDetails.eventPhotoURL"
      height="150px"
    ></v-img>

    <v-card-title>
        {{eventDetails.eventName}}
    </v-card-title>

    <v-card-subtitle>
        {{eventDetails.eventDate}}
        {{eventDetails.eventLocation}}
    </v-card-subtitle>
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
        }
    }

</script>


</style>