<template>
  <v-app>
    <NavBar @drawerShown="showDrawer"></NavBar>
    <div v-if="!xsBreakpoint"><Categories></Categories></div>
    <v-main>
      <router-view />
    </v-main>
    <div v-if="xsBreakpoint">
      <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      
    >
      <v-list
        nav
        dense
      >
        <v-list-item class="d-flex justify-center my-5">
          <h1 class="brownDark--text">CATEGORIES</h1>
        </v-list-item>
        <v-list-item class="mb-5">
          <Categories></Categories>
        </v-list-item>
        <v-list-item class="d-flex justify-center my-5">
          <v-btn x-large class="d-flex brownDark font-weight-bold white--text" elevation="0" @click="createEvent()">Create Event</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
    <main-footer />
  </v-app>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import Navbar from '@/components/NavBar.vue'
import Categories from '@/components/Categories.vue'

export default {
  name: 'Base',
  components: {
    MainFooter, Navbar, Categories
  },
  data() {
      return {
        drawer: false,
      }
    },
    methods: {
      showDrawer(){
        this.drawer = true
      },
    },
    computed: {
      xsBreakpoint() {
        return this.$vuetify.breakpoint.width <= 700
      }
    }
};
</script>
