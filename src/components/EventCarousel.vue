<template>
  <v-container fluid>
      <v-row dense>
        <!-- onClick, redirect to Full Events page with Category filter placed on 
        
          potential: onHover, card increases in size
        -->
        <v-col
          v-for="category in categories"
          :key="category.title"

        >
        <v-hover v-slot="{ hover }" open-delay="200" close-delay="0">
          <v-card class="d-flex flex-no-wrap flex-start">
            <!-- image -->
            <v-avatar
                class="ma-3"
                size="100"
                tile
              >
              <v-img :src="category.src" class="rounded md"></v-img>
            </v-avatar>

            <!-- title -->
            <v-card-title>
              <div v-text="category.title"></div>
              <!-- description on hover -->
              <v-fade-transition >

                <v-overlay
                  v-if="hover"
                  absolute
                  opacity=1 
                  color="peachDark"
                  class="rounded md"
                >         
                  <v-card-title
                    v-text="category.description">
                  </v-card-title>
                </v-overlay>

              </v-fade-transition>
            </v-card-title>
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
        { title: 'Sports', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', description:"Let's play some BUZZketball!"},
        { title: 'Arts', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', description:"BEEthoven, is that you?"},
        { title: 'Food', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', description:"Simply BEElicious"},
        { title: 'Pets', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', description:"Paw, Sit, Sting?"},
      ],
    }),
  }
</script>