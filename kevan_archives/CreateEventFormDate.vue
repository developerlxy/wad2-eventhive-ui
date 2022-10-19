<template>
  <!-- https://vuetifyjs.com/en/components/expansion-panels/#readonly -->
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4">
            Event date and time
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            <v-fade-transition leave-absolute>
              <span v-if="open">When is your event going to be held?</span>
              <v-row
                v-else
                no-gutters
                style="width: 100%"
              >
                <v-col cols="6">
                  Event date: {{ eventDate || 'Not set' }}
                </v-col>
                <v-col cols="6">
                  Event time: {{ eventTime || 'Not set' }}
                </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row
          justify="space-around"
          no-gutters
        >
          <v-col cols="3">
            <v-menu
              ref="dateMenu"
              :close-on-content-click="false"
              :return-value.sync="eventDate"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="eventDate"
                  label="Event date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dateMenu.isActive = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dateMenu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="3"> 
            <!-- https://vuetifyjs.com/en/components/time-pickers/#misc -->
            <v-dialog
              ref="dialog"
              v-model="modal2"
              :return-value.sync="eventTime"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="eventTime"
                  label="Event time"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="modal2"
                v-model="eventTime"
                full-width
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="modal2 = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(eventTime)"
                >
                  OK
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  export default {
    data: () => ({
      eventDate: null,
      eventTime: null,
      modal2: false,
    }),
  }
</script>