<template>
    <v-container fluid class="peachLight">
    <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
      <v-col
        cols="2"
        class="flex-grow-0 flex-shrink-0"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-avatar size="150">
            <img :src="'/src/assets/images/test.png'">
        </v-avatar>
        <v-rating></v-rating>
        
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div style="background-color:lightgray;padding:10px;text-align:left;font-weight:bold;">
          Contact Info
        </div>
        <v-list-item class=""><br>
          Email: {{ form.contactEmail }} <br><br>
          Contact No.:
        </v-list-item>

      </v-list-item-content>

    </v-list-item>
  </v-card>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div style="background-color:lightgray;padding:10px;text-align:left;font-weight:bold;">
          About Me
        </div>
        <v-list-item class="">
          Occupation: Student
        </v-list-item>
        <v-list-item>My interests lie in board games. I'm a member of SMU Strategica.</v-list-item>
      </v-list-item-content>

    </v-list-item>
  </v-card>
        </v-card>
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
          <h1>Hey, I'm {{ form.firstName }}!</h1><br/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vel, minus sunt blanditiis enim, quaerat nemo et, ducimus similique error aut? Magni dolores ex impedit asperiores itaque natus sint quos?</p>

          <h2>Rating & Reviews</h2><br>
        <v-card>
            <div>
                <v-card-title>| Amazing Event</v-card-title>
                <v-card-subtitle><v-avatar><img :src="'/src/assets/images/test.png'"></v-avatar>  Sam Anderson</v-card-subtitle>
                <v-card-text>As you know, the world of work is evolving, which caught many leaders between stakeholders and employees. We know this isn’t happening in every case, but the majority. So, my team and I felt this conference prioritized sharing new best practices for leaders and providing some tools for them to move in a more contemporary direction. We wanted to host workshops that offered vital insights into leaders’ changes and ways to make that happen. One of our major takeaways was the receptive embrace of the DEI, you know, diversity, equity, and inclusion, strategies leaders can incorporate in their business. Wow, did we get a warm response to that!</v-card-text>
            </div>
        </v-card><br/>
        <v-card>
            <div>
                <v-card-title>| Loved the Vibes</v-card-title>
                <v-card-subtitle><v-avatar><img :src="'/src/assets/images/test.png'"></v-avatar>  Peter Parker</v-card-subtitle>
                <v-card-text>This was a fantastic event. I particularly enjoyed the breakout meetings. They were informative, and the speakers made it so exciting to participate. My key takeaway, I’d have to say, is the confidence it provided to take some bold steps in managing my business differently to plan for the future. I would want to look at my leadership skills and make changes that support my team. The second thing that was a key takeaway for me was the review of the different types of strategies to incorporate more diversity into my organization. And last, it’s entertaining. I’m having a blast meeting new people and seeing old friends. </v-card-text>
            </div>
        </v-card><br/>
        <v-card>
            <div>
                <v-card-title>| Will come back again!</v-card-title>
                <v-card-subtitle><v-avatar><img :src="'/src/assets/images/test.png'"></v-avatar>  Lyle Green</v-card-subtitle>
                <v-card-text>As you know, the world of work is evolving, which caught many leaders between stakeholders and employees. We know this isn’t happening in every case, but the majority. So, my team and I felt this conference prioritized sharing new best practices for leaders and providing some tools for them to move in a more contemporary direction. We wanted to host workshops that offered vital insights into leaders’ changes and ways to make that happen. One of our major takeaways was the receptive embrace of the DEI, you know, diversity, equity, and inclusion, strategies leaders can incorporate in their business. Wow, did we get a warm response to that!</v-card-text>
            </div>
        </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
        export default {
        name: 'HostDetails',
        props: ['eventHost'],
        data: () => ({
      benched: 0,
      form: {
                    firstName: 'Ding',
                    lastName: 'Doe',
                    contactEmail: 'gerald.ding.2021@scis.smu.edu.sg',
                    contactNumber: 5678910,
                }
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
