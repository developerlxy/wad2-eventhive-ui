<template>
  <div v-if="xsBreakpoint">
    <v-row class="mx-5 align-center mt-1">
      <v-col class="pa-0 ma-0">
        <img src="../assets/images/graphics1.png" height="100px">
      </v-col>
      <v-col class="pa-0 ma-0">
        <h1 :id='headerID' class="font-weight-black peachMid--text text-start">BEE there or BEE <span style="background-color: peachpuff;">square!</span></h1>
      </v-col>
    </v-row>
  </div>
  <div v-else-if="smBreakpoint">
    <v-row class="">
      <v-col class="d-flex align-content-center flex-wrap justify-end justify-sm-center">
        <h1 :id="headerID" class="font-weight-black peachMid--text ml-14 text-start">BEE there or BEE <span style="background-color: peachpuff;">square!</span></h1>
      </v-col>
      <v-col class="d-flex align-content-center justify-start">
        <img src="../assets/images/graphics1.png" height="200">
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-row class="mx-6">
      <v-col class="d-flex align-content-center flex-wrap justify-end justify-sm-center mx-6">
        <h1 :id="headerID" class="font-weight-black peachMid--text ml-14 pl-14 text-start">BEE there or BEE <span style="background-color: peachpuff;">square!</span></h1>
      </v-col>
      <v-col class="d-flex align-content-center justify-start mt-1 pr-16 mr-16">
        <img src="../assets/images/graphics1.png" :height="mdBreakpoint ? 280: 350">
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
    },
    mdBreakpoint() {
      return this.$vuetify.breakpoint.name == 'md' 
    },
    smBreakpoint() {
      return this.$vuetify.breakpoint.name == 'sm' 
    },
    headerID() {
      switch(this.$vuetify.breakpoint.name) {
        case 'xs' : return 'header-xs'
        case 'md' : return 'header-md'
        case 'lg' : return 'header'
        case 'xl' : return 'header'
      }
    }
  },
}
</script>

<style>
#header{
  font-size: 4em
}

#header-md {
  font-size: 3em
}

#header-xs {
  font-size: 1.6em
}

</style>

