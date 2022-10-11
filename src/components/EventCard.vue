<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="eventDetails.eventPhotoURL"
      height="200px"
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

<style>
    .event-card {
        border-radius: 1%;
        box-shadow: 1px 1px 3px;
        width: 300px;
        margin: 10px;
    }

    .event-image {
        width: 100%;
        height: 200px;
        object-fit: cover;

    }
    .event-card:hover {
        cursor: pointer;
    }

    .event-details {
        text-align: left;
    }

    .event-name {
        font-size: 1.2rem;
        font-weight: bold;
    }

</style>