<template>
  <v-btn @click="toRandomEvent" elevation="4" class="greenLight ma-5 d-none d-sm-flex" icon height="100px" width="100px" absolute bottom right>
    <v-img transition="scale-transition" 
      src="../src/assets/images/beebutton.png"
      height="80px" contain></v-img>
  </v-btn>
</template>
<script>

export default {
  name: 'RandomEventPrompt',
  methods: {
    toRandomEvent() {
      this.$router.push("/event/random");
    }
  }
}
</script>

