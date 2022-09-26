<template>
  <v-container fluid>
      <v-row dense>
        <v-col
          v-for="category in categories"
          :key="category.title"

        >
          <v-card class="d-flex flex-no-wrap flex-start">
            <v-avatar
                class="ma-3"
                size="100"
                tile
              >
              <v-img :src="category.src" class="rounded md"></v-img>
            </v-avatar>
            
            <v-card-title v-text="category.title"></v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      categories: [
        { title: 'Sports', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
        { title: 'Arts', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
        { title: 'Food', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Pets', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      ],
    }),
  }
</script>