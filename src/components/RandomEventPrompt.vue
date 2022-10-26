<template>
  <v-btn @click="toRandomEvent" elevation="4" class="greenLight ma-5 d-none d-sm-flex" icon height="120px" width="120px" absolute bottom right>
    <v-img transition="scale-transition" 
      src="../src/assets/images/beebutton.png"
      height="100px" contain></v-img>
  </v-btn>
</template>
<script>

export default {
  name: 'RandomEventPrompt',
  methods: {
    toRandomEvent() {
      this.$router.push("/events/random");
    }
  }
}
</script>

