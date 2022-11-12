<template>
  <div>
    <v-card>
            <div>
                <v-card-subtitle><v-avatar><img :src="'/src/assets/images/test.png'"></v-avatar>  {{ eventReview["userFullName"] }}  <v-rating
                                value="eventReview['numStars']"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating></v-card-subtitle>
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