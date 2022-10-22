<template>
    <div class="event-card">
        <v-container>
            <v-row>
                <v-col cols="8">
                <img v-bind:src="specificEvent.eventPhotoURL"
                aspect-ratio="16/9"
                width="75%"
>
                </v-col>
                <v-col cols="4" >
                    <v-container class="fill-height">
                    <v-row class="d-flex flex-column">
                        <v-col>
                            <h3 class="text-left">{{this.newDate(this.specificEvent.eventDate)}}</h3>
                        </v-col>
                        <v-col>
                            <h1 class="text-left"> {{specificEvent.eventName}} </h1>
                        </v-col>
                        <v-col>
                            <h3 class="text-left">by {{host.userName}}</h3>
                        </v-col>
                    </v-row>
                    <v-row class=" align-end justify-center">
                        <v-btn 
                                color="greenDark"
                                class="justify-start white--text"
                                @click="register"
                            >
                                Register your interest
                            </v-btn>
                            <v-btn 
                                color="greenDark"
                                class=" ml-5 white--text"
                                @click="wishlist"
                            >
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                    </v-row>
                </v-container>

                    <!--  -->
                    
                    
                    
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="8">
                    <h3 class="text-left">Description</h3>
                    <br>
                    <p v-html="desc" class="text-left">
                    </p>
                </v-col>
                <v-col cols="4">
                    <div class="d-flex flex-column align-left ml-2">

                            <v-card class="mb-4 pa-4">
                                <v-container fill-height>
                                <v-row class="justify-start align-center">
                            <v-col>
                                <v-icon>mdi-calendar</v-icon>
                            </v-col>

                            <v-col cols="9">
                                <h3 class="text-left">Date and Time</h3>
                            </v-col>
 
                        </v-row>
                        <v-row align-center class="justify-start">
                            <p class="text-left ml-3 overflow-auto">
                                {{reviewDate(specificEvent.eventDate)}}
                            </p>
                        </v-row>
                        <v-row class="justify-center">
                            <v-btn
                                block
                                color="greenDark"
                                class="white--text"
                            >
                                Add to My Calendar
                            </v-btn>
                        </v-row>
                        
                                </v-container>
                    </v-card>
                    <v-card class="pa-4 mt-4">
                        <v-container fill-height>
                        <v-row class="justify-start">
                            <v-col>
                                <v-icon>mdi-map-marker</v-icon>
                            </v-col>
                            <v-col cols="9">
                                <h3 class="text-left align-center">Location</h3>
                            </v-col>

                        </v-row >
                        <v-row class="justify-start my-4">
                            <p class="text-left ml-3">
                                {{specificEvent.eventLocation}}
                                
                            </p>
                        </v-row>
                        <v-row class="justify-center">
                            <v-btn
                                block
                                color="greenDark"
                                class="white--text"
                            >
                                View Map
                            </v-btn>
                        </v-row>
                    </v-container>
                            </v-card>

                    <br>


                    <br>




                    </div>
                    

                    <v-card
                        elevation="0"
                        max-width="400"
                        class="mx-auto"
                        border="1px solid"
                    >
                        <h2 class="my-4">Reviews</h2>
                        <v-virtual-scroll
                        :items="this.reviews"

                        height="250"
                        item-height="125"
                        >
                        <template v-slot:default="{ item }">
                            <v-list-item :key="item">
                            <v-list-item-action >
                            <v-card-text>
                                <v-rating
                                :value="item.numStars"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>
                                <!-- review.numStars -->
                            </v-card-text>
                            </v-list-item-action>
                
                            <v-list-item-content>
                                <v-list-item-title class="d-flex flex-wrap flex-grow-1">
                                <strong class="mb-2">{{item.userName}}</strong>
                                <br>
                                <p size="0.75rem" class="overflow-visible">{{reviewDate(item.dateReviewed)}}</p>
                                <!-- review.UserName -->
                                <p>{{item.reviewText}}  </p>
                                <!-- review.reviewText -->
                                </v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                

                        </template>
                        </v-virtual-scroll>
                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    </div>
    
</template>

<script>
    export default {
        name: 'RandomEvent',

        data() { return {
            isLoading: true,
            benched: 10,
            events: [this.$store.state.events],
            // eventID: '6350f232ca88afcea5e30456', THIS IS FROM DING'S ORIGINAL INDIV EVENT CODE
            specificEvent: null,
            date: null,
            reviews: null,
            desc: "",
            userlist: [],
            host: null,
        }
    },
    methods: {
        pullHost() {
            this.axios.get("https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users")
            .then(response => {
            this.userlist = response.data;
            this.host = this.userlist.find(user => user._id === this.specificEvent.eventHost);
            console.log('====================== GETTING HOST ======================')
            console.log(this.host)
        })
        .catch(function (error) {
          console.log(error);
        });

        },

        findCorrectEvent() {
            console.log('================= GETTING RANDOM EVENT ===============')
            // console.log(this.events[0])
            var all_events = this.events[0]
            var keys = Object.keys(all_events)
            // console.log(keys)
            var random_key = keys[Math.floor(Math.random() * keys.length)]
            console.log('specificEvent got:', random_key, all_events[random_key])
            this.specificEvent = all_events[random_key]
            // this.specificEvent = this.events[0].find(event => event._id === this.eventID) THIS IS FROM DING'S ORIGINAL INDIV EVENT CODE
            // console.log(this.specificEvent)
            this.reviews = this.specificEvent.eventReviews
            this.desc = this.specificEvent.eventDesc
        },
        reviewDate(ISODate) {
            var test = new Date(ISODate)
            return(test)
        },

        newDate(inputDate) {
            var test = new Date(inputDate)
            return(test.toDateString())
        },
        register () {
            this.$router.push("/register")
        },
        wishlist() {
      this.$router.push("/wishlist");
    },
    },
    mounted() {
        this.findCorrectEvent(),
        this.reviewDate(),
        this.pullHost(),
        setTimeout(() => {
      this.isLoading = false;
    },2000);
    },
    }
</script>
