<template>
  <div>
  <v-sheet
    class="mx-auto"
    width="90%"
    height="30%"
  >
    <v-slide-group
      class="p-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="event in this.$store.state.events"
        :key="event.name"
        
      >
        <div class="mx-3 my-2">
          <EventCard :eventDetails="event" ></EventCard>
        </div>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

  export default {
    data: () => ({

    }),
  }
</script>