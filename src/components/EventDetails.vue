<template>
    <div class="event-card">
        <v-container>
            <v-row>
                <v-col cols="8">
            <img :src='"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLpdgugvyUbhiRYtWXXtWqFa5iFaHWBIstQ&usqp=CAU"'
                aspect-ratio="16/9"
                width="75%"
>
                </v-col>
                <v-col cols="4" >
                    <v-container class="fill-height">
                    <v-row>
                    <h4 class="text-left">16 Sep</h4>
                    <h1 class="text-left">ADEX Ocean Vision 2022</h1>
                    <h4 class="text-left">by UW360</h4>
                    </v-row>
                    <v-row class=" align-end justify-center">
                        <v-btn 
                                color="success darken-3"
                                class="justify-start"
                                
                            >
                                Register your interest
                            </v-btn>
                            <v-btn 
                                color="greenDark"
                                class=" ml-5"
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
                    <p class="text-left">
                        ADEX Asia Dive Expo – The largest and longest-running dive consumer and trade show in Asia is back as ADEX Ocean Vision 2022 to reign once again as the must-attend event for anyone interested or involved in the world of diving!
<br><br>
Having celebrated its silver jubilee in 2019, ADEX Ocean Vision 2022 returns on Sep 16 – 18 at Sands Expo and Convention Centre, after the grand halt caused by the global pandemic, to bring together divers from all over the world to rediscover, renew and revive one's long-desired passion and dive deep into Asia's magnificent and spectacular blue biodiversity and to progress towards a blue recovery!
<br><br>
2022 Dedicates its Theme to the Blue Whale
<br><br>
Dedicating "Balaenoptera musculus", otherwise commonly known as the elusive "blue whales", will be the focal highlight at the ADEX Ocean Vision 2022!
<br><br>
Federally listed as "endangered" under the Endangered Species Act and it is protected under the Marine Mammal Protection Act, the blue whale population have tragically plummeted due to the technological advances in whaling technology which makes it easy for commercial whaling activities worldwide.

                    </p>
                </v-col>
                <v-col cols="4">
                    <div class="d-flex flex-column align-left ml-2">

                            <v-card class="mb-4 pa-4">
                                <v-container fill-height>
                                <v-row class="justify-start align-center mt-4">
                            <v-col>
                                <v-icon>mdi-calendar</v-icon>
                            </v-col>

                            <v-col cols="9">
                                <h3 class="text-left">Date and Time</h3>
                            </v-col>
 
                        </v-row>
                        <v-row align-center class="justify-start">
                            <p class="text-left ml-3">
                                Fri,16 Sep 2022, 10:00 AM - 5:00 PM
                                <br>
                                Singapore Standard Time
                            </p>
                        </v-row>
                        <v-row class="justify-center">
                            <v-btn
                                block
                                color="teal lighten-3"
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
                                1 Expo Drive, Singapore 486150
                                
                            </p>
                        </v-row>
                        <v-row class="justify-center">
                            <v-btn
                                block
                                color="teal lighten-3"
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
                        :bench="benched"
                        :items="items"
                        height="250"
                        item-height="125"
                        >
                        <template v-slot:default="{ item }">
                            <v-list-item :key="item">
                            <v-list-item-action>
                            <v-card-text>
                                <v-rating
                                :value="4.5"
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
                                <strong>ID {{ item }}</strong>
                                <br>
                                <p size="0.75rem">12 September 2020</p>
                                <!-- review.UserName -->
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea cum aliquid quidem sint dolor quae odit, neque consequatur qui voluptatibus culpa explicabo, omnis tempore voluptate ut? Quam, minima quaerat. </p>
                                <!-- review.reviewText -->
                                </v-list-item-title>
                            </v-list-item-content>
                
                            <v-list-item-action>
                                <v-icon big>
                                mdi-open-in-new
                                </v-icon>
                            </v-list-item-action>
                            </v-list-item>
                
                            <v-divider></v-divider>
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
        name: 'EventDetails',
        // props: {
        //     eventDetails: {
        //         type: Object,
        //         required: true
        //     }
        // },
        data: () => ({
      benched: 0,
      width: 300,
    }),
    computed: {
      items () {
        return Array.from({ length: this.length }, (k, v) => v + 1)
      },
      length () {
        return 20
      },
    },
    }
</script>
