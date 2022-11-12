<template>
    <LoadingScreen v-if="isLoading"></LoadingScreen>
  
    <div v-else>
        <NavBar></NavBar>
        <v-container fluid>
    <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
      <v-col
        cols="7"
        class="text-left flex-grow-0 flex-shrink-0">
        <h1>Event: Board Games Night</h1>
            <img :src="'/src/assets/images/boardgame.jpg'">
            <div>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-checkbox v-model="landscape" hide-details></v-checkbox>
      </v-flex>
      <v-flex xs12 sm3>
        <v-checkbox v-model="reactive" hide-details></v-checkbox>
      </v-flex>
    </v-layout>

    <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="error"
      @click="loader = 'loading'"
    >
      cancel event
    </v-btn>
    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      increase pax
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn color="primary">
      change event date
    </v-btn>
  </div>


      </v-col>

      <v-col
        cols="1"
        style="min-width: 100px; max-width: 100%;"
        class="flex-grow-1 flex-shrink-0"
      >
        <v-card
          class="pa-2 text-left"
          outlined
          tile
        >

          <h1>Attendees (5)</h1>
          <v-card
    class="pa-4"
    flat
    height="100px"
  >
    <v-toolbar
      dense
      floating
    >
    <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        label="Search for person"
      ></v-text-field>


      <v-btn icon>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  <v-divider></v-divider>
        <v-card>
            <div>
                <v-card-title><v-avatar><img :src="'/src/assets/images/test.jpg'"></v-avatar>&nbsp;  Sam Anderson</v-card-title>
                <v-card-subtitle></v-card-subtitle>
                <v-card-actions>
                    <div class="text-center">
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      Accept RSVP
    </v-btn>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Evict
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      View info
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    
  </div>
                </v-card-actions>
            </div>
        </v-card><br/>
        <v-card>
            <div>
                <v-card-title><v-avatar><img :src="'/src/assets/images/test.jpg'"></v-avatar>&nbsp;  Lyle Green</v-card-title>
                <v-card-subtitle></v-card-subtitle>
                <v-card-actions>
                    <div class="text-center">
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      Accept RSVP
    </v-btn>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Evict
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      View info
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    
  </div>
                </v-card-actions>
            </div>
        </v-card><br/>
        <v-card>
            <div>
                <v-card-title><v-avatar><img :src="'/src/assets/images/test.jpg'"></v-avatar>&nbsp;  Peter Parker</v-card-title>
                <v-card-subtitle></v-card-subtitle>
                <v-card-actions>
                    <div class="text-center">
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      Accept RSVP
    </v-btn>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Evict
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      View info
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    
  </div>
                </v-card-actions>
            </div>
        </v-card><br/>
        <v-card>
            <div>
                <v-card-title><v-avatar><img :src="'/src/assets/images/test.jpg'"></v-avatar>&nbsp;  Ah Beng</v-card-title>
                <v-card-subtitle></v-card-subtitle>
                <v-card-actions>
                    <div class="text-center">
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      Accept RSVP
    </v-btn>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Evict
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      View info
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    
  </div>
                </v-card-actions>
            </div>
        </v-card><br/>
        <v-card>
            <div>
                <v-card-title><v-avatar><img :src="'/src/assets/images/test.jpg'"></v-avatar>&nbsp;  Jesus</v-card-title>
                <v-card-subtitle></v-card-subtitle>
                <v-card-actions>
                    <div class="text-center">
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      Accept RSVP
    </v-btn>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Evict
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      View info
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    
  </div>
                </v-card-actions>
            </div>
        </v-card><br/>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
    </div>

</template>

<script>
  import LoadingScreen from '../components/LoadingScreen.vue';
  import NavBar from '@/components/NavBar.vue';
  
  
  
  export default {
      name: "Home",
      components: { LoadingScreen, NavBar },
      mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      },
      data() {
        return {
            picker: new Date().toISOString().substr(0, 10),
        landscape: true,
        reactive: true,
          isLoading: true,
          form: {
                    firstName: 'John',
                    lastName: 'Doe',
                    contactEmail: 'john@doe.com',
                    contactNumber: 5678910,
                }
        }
      },
  };
  </script>