<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <!-- <div>
        <v-btn text :to="{ name: 'Landing' }" exact>Landing</v-btn>
        <v-btn text :to="{ name: 'Home' }" exact>Home</v-btn>
      </div> -->
      <router-view />
    </v-main>
    <main-footer />
  </v-app>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Base',
  components: {
    MainFooter,
    NavBar
},
};
</script>
