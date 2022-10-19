<template>
  <!-- html -->
  <v-col class="col-6 ma-3" width="100px">
    <v-row>
      <v-text-field
        placeholder="Search for anything"
        outlined
        dense
        rounded
        hide-details
        class="search-box"
        append-icon="search"
        @focus="isAdvanced = !isAdvanced"
        @keyup.enter="search"
      ></v-text-field>
    </v-row>
    <v-row v-if="isAdvanced" class="">
      <!-- AnyWhere -->
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="dateSelected"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            class="mt-1"
            v-model="dateRangeText"
            outlined
            rounded
            dense
            hide-details
            placeholder="Anytime"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dateSelected"
          no-title
          range
          scrollable
          :min="today"
          @click="$refs.menu.save(dateSelected)"
        >
          <v-spacer></v-spacer>
        </v-date-picker>
      </v-menu>

      <!-- Anywhere to change to dropdown -->
      <v-select
        :items="availableLocations"
        :menu-props="{ bottom: true, offsetY: true }"
        rounded
        hide-details
        dense
        placeholder="Anywhere"
        outlined
        class="mt-1"
      ></v-select>

      <!-- check capacity of event -->
      <v-select
        :items="maxGroupSize"
        :menu-props="{ bottom: true, offsetY: true }"
        rounded
        hide-details
        dense
        placeholder="Any Group Size"
        outlined
        class="mt-1"
      ></v-select>
    </v-row>
  </v-col>
</template>

<script>
// javascript
export default {
  name: "SearchBar",
  data() {
    return {
      menu: false,
      searchText: "",
      isAdvanced: false,
      dateSelected: "",
      locationSelected: "",
      groupSizeSelected: 2, // let's say 2 is the default
      
      today: new Date().toISOString().slice(0, 10), 

      availableLocations: this.availableLocations(),
      maxGroupSize: ["1", "2 - 4", "5 - 10", "10+"],
    };
  },
  methods: {
    availableLocations() {
      let locationsInDB = [];

      var config = {
        method: "get",
        url: "https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events",
        headers: {
          "Content-Type": "application/json",
        },
      };
      this.axios(config).then(function (response) {
        for (let event of response.data) {
          let eventDate = event["eventLocation"];
          if (!locationsInDB.includes(eventDate)) {
            locationsInDB.push(eventDate);
          }
        }
      });
      return locationsInDB;
    },
    search() {
      // TODO: implement search function onclick
      console.log("searching");
      var config = {
        method: "get",
        url: "https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/events",
        headers: {
          "Content-Type": "application/json",
        },
      };
    },
  },
  computed: {
    dateRangeText() {
      console.log(this.dateSelected);

      // if no date selected, leave empty
      if (this.dateSelected.length == 0) {
        return "";
      }

      var today = new Date();

      let [year1, month1, day1] = [
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
      ];

      // if there is only one date selected, return that one date
      if(this.dateSelected.length == 1){
        [year1, month1, day1] = this.dateSelected[0].split("-");
        return `${day1}/${month1}/${year1}`;
      }

      // range of dates (2 dates selected)

      // if there is a start date, get start date
      if (this.dateSelected[0] != "") {
        [year1, month1, day1] = this.dateSelected[0].split("-");
      }

      let [year2, month2, day2] = ["", "", ""];

      // if there is an end date, get end date
      if (this.dateSelected[1] != "") {
        [year2, month2, day2] = this.dateSelected[1].split("-");
      } 

      // return dates in ascending order
      if (this.dateSelected[0] > this.dateSelected[1]) {
        return (
          `${day2}/${month2}/${year2}` + " - " + `${day1}/${month1}/${year1}`
        );
      } else {
        return (
          `${day1}/${month1}/${year1}` + " - " + `${day2}/${month2}/${year2}`
        );
      }
    },
  },
};
</script>
