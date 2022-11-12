<template>
  <div v-if="xsBreakpoint">
    <v-row class="mx-5 align-center mt-1">
      <v-col class="pa-0 ma-0">
        <img src="../assets/images/welcome-text.png" width="300" data-aos="fade-right">
      </v-col>
      <v-col class="pa-0 ma-0 pl-4 justify-start">
        <img  src="../assets/images/graphics1.png" width="140" data-aos="fade-left">
      </v-col>
    </v-row>
  </div>
  <div v-else-if="smBreakpoint">
    <v-row class="">
      <v-col class="d-flex align-content-center flex-wrap justify-end justify-sm-center">
        <img class="ml-14 pl-14 " src="../assets/images/welcome-text.png" width="350" data-aos="fade-right">
      </v-col>
      <v-col class="d-flex align-content-center justify-start">
        <img class="ml-8" src="../assets/images/graphics1.png" width="280" data-aos="fade-left">
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-row class="mx-6 my-0 py-0">
      <v-col class="d-flex align-content-center flex-wrap justify-center ml-2 my-0 py-0">
        <!-- <h1 :id="headerID" class="font-weight-black peachMid--text ml-14 pl-14 text-start">BEE there or BEE <span style="background-color: peachpuff;">square!</span></h1> -->
        <img class="ml-14 pl-14" src="../assets/images/welcome-text.png" width="460" data-aos="fade-right">
      </v-col>
      <v-col class="d-flex align-content-center justify-center pr-16 mr-16">
        <img src="../assets/images/graphics1.png" width="380" data-aos="fade-left">
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
  mounted() {
    AOS.init(
      {
      duration: 800
    }
    )
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

