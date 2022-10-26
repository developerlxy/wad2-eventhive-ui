<template>
    <div class="event-card">
        <v-container>
            <v-row>
                <v-col cols="8">
            <img v-bind:src="this.specificEvent.eventPhotoURL"
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
                            <h1 class="text-left"> {{this.specificEvent.eventName}} </h1>
                        </v-col>
                        <v-col class="justify-start">
                            <span>
                            <h3 class="text-left">by
                            <v-btn
                            v-if="this.host"
                            @click="hostProfile(this.specificEvent.eventHost)"
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
                                {{this.acctUser.registeredEvents}}
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
                                {{reviewDate(this.specificEvent.eventDate)}}
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
                                {{this.specificEvent.eventLocation}}
                                
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
        name: 'EventDetails',

        data() { return {
            isLoading: true,
            benched: 10,
            events: [this.$store.state.events],
            eventID: '6349a29b7a272e522ceb4e95',
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
        pullHost() {
            this.axios.get("https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users")
            .then(response => {
          this.userlist = response.data;
          this.host = this.userlist.find(user => user._id == this.specificEvent.eventHost);
        })
        .catch(function (error) {
          console.log(error);
        });

        },

        findCorrectEvent() {
            console.log(this.events)
            this.specificEvent = this.events[0].find(event => event._id === this.eventID)
            console.log(this.specificEvent)
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
        hostProfile (HostID) {
            this.$router.push("/host/" + HostID)
        },
        isBuzzing () {
            if (this.specificEvent.eventAttendees.length > this.specificEvent.maxCapacity) {
                this.specificEvent.isBuzzing = true
            }
        },
        intermediate () {
            this.dialog = false
            this.eventPatch()
            this.userPatch()
            this.$store.dispatch('getEvents')
            console.log(this.acctUser.registeredEvents)
        },
        isRegistered() {
            if (this.specificEvent.attendees.includes(this.acctUser._id)) {
                this.registered = true
            }
            else {
                this.registered = false
            }
        },
        eventPatch () {
            if(this.$store.state.user == null){
                this.$router.push("/login")
            }
            else{
            this.specificEvent.attendees.push(this.$store.state.user._id)
            var data = JSON.stringify({
                "_id": this.eventID,
                "attendees": [this.specificEvent.attendees]
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
            this.registered = true
        }},
        userPatch () {
            let regList = this.acctUser.registeredEvents
            console.log(regList)
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
            this.reviewDate(),
            this.pullHost()
            this.isRegistered()
            this.isBuzzing()
            if(this.acctUser.registeredEvents.includes(this.eventID)) {
                this.registered = true
            }else if (this.specificEvent.attendees.includes(this.acctUser._id)){
                this.registered = true
        }
    }
 },
    mounted() {
        this.setup()
        if(this.$store.state.user == null){
            this.$router.push("/login")
        }
        else{
            this.acctUser = this.$store.state.user
            console.log(this.acctUser.registeredEvents)
        }
        setTimeout(() => {
      this.isLoading = false;
    },2000);
    }
}
    
</script>
