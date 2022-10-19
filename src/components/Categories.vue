<template>
  <v-container fluid>
      <v-row dense>
        <!-- onClick, redirect to Full Events page with Category filter placed on 
        
          potential: onHover, card increases in size
        -->
        <v-col
          v-for="category in categories"
          :key="category.title"

          @click="handleClick(category.filter)"
        >
        
        <v-hover
        v-slot="{ hover }">
        <v-card class="pa-md-4 mx-lg-auto" 
        elevation=0
        :color="hover ? 'brownLight' : 'white'"
        >

          <font-awesome-icon :icon="category.src" />
          <div v-text="category.title"></div>
          
        </v-card>
        </v-hover>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      categories: [
        { title: 'Sports', src: 'fa-solid fa-volleyball', filter: 'sports'},
        { title: 'Arts', src: 'fa-solid fa-palette', filter: 'arts'},
        { title: 'Music', src: 'fa-solid fa-music', filter: 'music'},
        { title: 'Food', src: 'fa-solid fa-utensils', filter: 'food'},
        { title: 'Pets', src: "fa-solid fa-dog", filter: 'pets'},
        { title: 'Games', src: "fa-solid fa-gamepad", filter: 'games'},
        { title: 'Others', src: "fa-solid fa-shuffle", filter: 'others'},
      ],
    }),
    methods:{
      handleClick: function (filter){
        this.$router.push({ path:`/events?category=${filter}`})
      }
    }
  }
</script>
