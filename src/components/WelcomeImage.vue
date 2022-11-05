<template>
  <div v-if="xsBreakpoint">
    <v-row class="mx-6">
      <v-col class="d-flex align-content-center flex-wrap justify-end mx-6">
        <h1 id='header-xs' class="font-weight-black peachMid--text text-start">BEE there or BEE <span style="background-color: peachpuff;">square!</span></h1>
      </v-col>
      <v-col class="d-flex align-content-center justify-start pr-16 mr-16">
        <img src="../assets/images/graphics1.png" height="230px">
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-row class="mx-6">
      <v-col class="d-flex align-content-center flex-wrap justify-end mx-6">
        <h1 id="header" class="font-weight-black peachMid--text ml-14 pl-14 text-start">BEE there or BEE <span style="background-color: peachpuff;">square!</span></h1>
      </v-col>
      <v-col class="d-flex align-content-center justify-start mt-1 pr-16 mr-16">
        <img src="../assets/images/graphics1.png" height="400px">
      </v-col>
    </v-row>
  </div>
    
</template>

<script>
export default {
  name: "WelcomeImage",
  computed: {
    xsBreakpoint() {
      return this.$vuetify.breakpoint.name == 'xs' 
    }
  },
}
</script>

<style>
#header{
  font-size: 4em
}

#header-xs {
  font-size: 2.5em
}

</style>

