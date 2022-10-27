<template>
  <!-- html -->
  <v-container class="col-md-7 col-sm-5 my-4" flat v-click-outside="hide" @click="isAdvanced = true">
    <v-row class="flex-nowrap" onmouseover="isAdvanced = true">
      <v-text-field
        placeholder="Search for anything"
        outlined
        dense
        rounded
        hide-details
        class="search-box"
        v-model="searchText"
        @keyup.enter="search"
        
      ></v-text-field>
      <v-btn icon small color="greenDark" class="ml-1 my-auto" @click="search"
        ><v-icon>search</v-icon></v-btn
      >
    </v-row>
    <v-row v-if="isAdvanced" class="mr-5">
      <!-- Anytime -->
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
            class="mt-1 col-md"
            v-model="dateRangeText"
            rounded
            outlined
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
          @input="$refs.menu.save(dateSelected)"
        >
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(dateSelected)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

      <!-- Anywhere to change to LocationSearchBar -->
      <v-autocomplete
        v-model="locationSelected"
        :loading="loading"
        :items="locationItems"
        :search-input.sync="searchLocation"
        cache-items
        class="mt-1 col-md"
        flat
        hide-no-data
        hide-details
        outlined
        dense
        rounded
        placeholder="Anywhere"
      ></v-autocomplete>

      <!-- check capacity of event -->
      <v-select
        :items="maxGroupSize"
        :menu-props="{ bottom: true, offsetY: true }"
        v-model="groupSizeSelected"
        rounded
        hide-details
        dense
        placeholder="Any Group Size"
        outlined
        class="mt-1 col-md"
      ></v-select>
    </v-row>
  </v-container>
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
      today: new Date().toISOString().slice(0, 10),
      dateSelected: "",

      loading: false,
      locationSelected: "", // shown on the v-autocomplete
      locationItems: [], // array of locations shown on the dropdown menu
      searchLocation: "",

      groupSizeSelected: 2, // let's say 2 is the default
      maxGroupSize: ["1", "2 - 4", "5 - 10", "10+"],
    };
  },
  methods: {
    hide() {
      this.isAdvanced = false;
      console.log(this.isAdvanced);
    },
    search() {
      // call search page with the search parameters
      console.log("searching");
      let startdate =
        this.dateSelected[0] > this.dateSelected[1]
          ? this.dateSelected[1]
          : this.dateSelected[0];
      let enddate =
        this.dateSelected[1] > this.dateSelected[0]
          ? this.dateSelected[1]
          : this.dateSelected[0];
      this.$router.push(
        "/search?name=" +
          this.searchText +
          "&location=" +
          this.locationSelected +
          "&groupSize=" +
          this.groupSizeSelected +
          "&startdate=" +
          startdate +
          "&enddate=" +
          enddate
      );
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
      if (
        this.dateSelected.length == 1 ||
        this.dateSelected[0] == this.dateSelected[1]
      ) {
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
        if (this.dateSelected[0] == "") {
          return `${day2}/${month2}/${year2}`;
        }
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
  watch: {
    searchLocation(val) {
      console.log("searchLocation" + val);
      this.axios
        .get(
          `https://developers.onemap.sg/commonapi/search?searchVal=${val}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
        )
        .then((response) => {
          this.locationItems = [];
          response.data.results.forEach((result) => {
            this.locationItems.push(result.SEARCHVAL);
            // this.results.push(result);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
