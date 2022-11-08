<template>
    <div class="event-card greenMid py-8 px-16"
    >
        <v-card
        class="mx-auto mt-2 pt-4"
        :width="cardWidth"
        >
        <v-container>
            <v-row>
                <v-card
                class="mx-auto mt-5"
                :width="width"
                outlined
                color="transparent"
                >
                  <img v-bind:src="this.specificEvent.eventPhotoURL"
                      aspect-ratio="16/9"
                      width="100%"
                  >
                </v-card>
                <v-card
                class="mx-auto"
                :width="width"
                outlined
                color="transparent"
                >
                    <v-container class="fill-height">
                    <v-row class="d-flex flex-column">
                        <v-col>
                            <h3 class="text-left">{{this.newDate(this.specificEvent.eventDate)}}</h3>
                        </v-col>
                        <v-col>
                            <h1 class="text-left"> {{this.specificEvent.eventName}} </h1>
                        </v-col>
                        <v-col class="justify-start">
                            <span>
                            <h3 class="text-left">by
                            <v-btn
                            v-if="this.host"
                            @click="hostProfile()"
                            text
                            tile
                            color=""
                            class="pd"
                            > {{this.host.userName}}</v-btn></h3> 

                        </span>
                        </v-col>
                    </v-row>
                    <v-row class=" align-end justify-center">
                        <template v-if="this.registered">
                            
                            <v-btn
                                brick
                                disabled
                                color="warning"
                                class="justify-start white--text"
                            >
                                Registered
                            </v-btn>
                        </template>
                        <template v-else-if="this.specificEvent.attendees.length >= this.specificEvent.maxCapacity">
                            <v-btn
                            brick
                                disabled
                                color="warning"
                                class="justify-start white--text"
                            >
                                Event full
                            </v-btn>
                        </template>
                        <template v-else>
                            <div>
                            <v-dialog
                            v-model="dialog"
                            width="500"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    brick
                                    color="greenDark"
                                    class="justify-start white--text"
                                    v-bind="attrs"
                                    v-on="on"
                                    
                                >
                                    Register your interest
                                </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="text-h5 grey lighten-2">
                                Confirmation
                            </v-card-title>

                            <v-card-text>
                                You are signing up for the event: {{this.specificEvent.eventName}}.
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                color="primary"
                                text
                                @click="intermediate"
                                >
                                I accept
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                        </div>
                        </template>
                    </v-row>
                </v-container>
                </v-card>
            </v-row>
            <v-row>
                <v-card
                class="mx-auto px-4 px-2 pt-8"
                :width="width"
                outlined
                color="transparent"
                >
                    <h3 class="text-left">Description</h3>
                    <br>
                    <p v-html="desc" class="text-left">
                    </p>
                </v-card>
                <v-card
                class="mx-auto px-4 pt-8 pb-9"
                :width="width"
                outlined
                color="transparent"
                >
                    <div class="d-flex flex-column">

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
                                {{reviewDate(this.specificEvent.eventDate)}}
                            </p>
                        </v-row>
                        <!-- <v-row class="justify-center">
                            <v-btn
                                block
                                color="greenDark"
                                class="white--text"
                            >
                                Add to My Calendar
                            </v-btn>
                        </v-row> -->
                        
                                </v-container>
                    </v-card>
                    <v-card class="pa-4 mt-4" :width="width">
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
                                {{this.specificEvent.eventLocation.ADDRESS}}
                                
                            </p>
                        </v-row>
                        <v-row class="justify-center">
                            <v-btn
                                block
                                color="greenDark"
                                class="white--text"
                                @click="redirect"
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
                            </v-card>
                        </v-row>
                    </v-container>
                    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
                </v-card>
                </div>
    
</template>

<script>
    export default {
        name: 'EventDetails',

        data() { return {
            isLoading: true,
            benched: 10,
            events: [this.$store.state.events],
            eventID: null,
            specificEvent: null,
            date: null,
            reviews: null,
            desc: "",
            userlist: [],
            host: null,
            acctUser: null,
            registered: false,
            dialog: false
            
        }
    },
    methods: {
        redirect() {
            window.location.href = 'https://www.google.com/maps/search/' + this.specificEvent.eventLocation.SEARCHVAL
        },
        pullHost() {
            this.axios.get("https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users")
            .then(response => {
          this.userlist = response.data;
        //   console.log(this.userlist);
          this.host = this.userlist.find(user => user._id == this.specificEvent.eventHost._id);
        //   console.log(this.host);
        })
        .catch(function (error) {
          console.log(error);
        });

        },

        findCorrectEvent() {
            this.specificEvent = this.events[0].find(event => event._id === this.eventID)
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
        hostProfile () {
            this.$router.push("/hostview/?id=" + this.eventID)
        },
        isBuzzing () {
            if (this.specificEvent.attendees.length > this.specificEvent.maxCapacity) {
                this.specificEvent.isBuzzing = true
            }
        },
        intermediate () {
            this.dialog = false
            this.noUser()
            this.eventPatch()
            this.userPatch()
            this.isRegistered()
            this.setup()
        },
        isRegistered() {
            // console.log(this.host)
            if(this.acctUser.registeredEvents.includes(this.eventID)) {
                this.registered = true
            }else if (this.specificEvent.attendees.includes(this.acctUser._id)){
                this.registered = true
            }else if (this.host._id == this.acctUser._id){
                this.registered = true
            }
            else {
                this.registered = false
            }
        },
        // isLoggedIn() {
        //     if (this.$store.state.user == null) {
        //         this.acctUser = this.$store.state.user
        //     }
        // },
        noUser() {
            if(this.$store.state.user == null){
            this.$router.push("/login")
        }
        else{
            this.acctUser = this.$store.state.user
        }
    },
        eventPatch () {
            if(this.$store.state.user == null){
                this.$router.push("/login")
            }
            else{
            let eventList = this.specificEvent.attendees
            // console.log(eventList)
            eventList.push(this.$store.state.user._id)
            var data = JSON.stringify({
                "_id": this.eventID,
                "attendees": [eventList]
                });

            var config = {
            method: 'patch',
            url: 'https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events/attendees',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            this.axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        }},
        userPatch () {
            let regList = this.acctUser.registeredEvents
            regList.push(this.eventID)
            var data = JSON.stringify({
                "_id": this.acctUser._id,
                "registeredEvents": [regList]
                });

            var config = {
            method: 'patch',
            url: 'https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events/attendees',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            this.axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        },
        async setup() {
            await this.findCorrectEvent(),
            await this.pullHost()
            this.acctUser = this.$store.state.user,
            this.reviewDate(),
            this.isBuzzing()

    }
 },
created() {
    this.$store.dispatch('getEvents')
},
    mounted() {
        this.setup()
        console.log(this.host)
        this.isRegistered()
        setTimeout(() => {
      this.isLoading = false;
    },2000);
    },
    watch: {
    '$route.params': {
        handler() {
            this.eventID = this.$route.query.id
        },
        immediate: true,
    }
},
computed: {
      width () {
        switch(this.$vuetify.breakpoint.name) {
          case 'xs': return 360
          case 'sm': return 450
          case 'md': return 450
          case 'lg': return 500
          case 'xl': return 500
        }
      },
      cardWidth() {
        switch(this.$vuetify.breakpoint.name) {
          case 'xs': return 500
          case 'sm': return 760
          case 'md': return 1000
          case 'lg': return 1300
          case 'xl': return 1500
        }
      }
    }
}
    
</script>
