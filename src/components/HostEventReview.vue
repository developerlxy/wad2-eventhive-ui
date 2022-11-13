<template>
  <div>
    <v-card>
            <div>
                <v-card-subtitle>
                  <v-rating
                  :value="eventReview.numStars"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                  >
                  </v-rating>
                  <v-avatar class="mt-2">
                    <img :src="'/src/assets/images/test.jpg'">
                  </v-avatar>  
                  <p class="font-weight-medium">{{ eventReview["userName"] }}  </p>

                </v-card-subtitle>
                <v-card-text>  {{ eventReview["reviewText"] }}</v-card-text>
                
            </div>
        </v-card><br/>
  </div>
</template>

<script>
        export default {
        name: 'HostEventReview',
        props: {
          eventReview: {
            type: Object,
            required: true
            
          }
        },
        data: () => ({
        
    }),
    computed: {
      
    },
    }
</script>