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
      <!--  -->
      <!-- <v-text-field
        rounded
        hide-details
        outlined
        dense
        placeholder="Anytime"
        class="filter ma-1"
      >
    </v-text-field> -->
      <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
      class="mt-1"
        v-model="date"
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
      v-model="date"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(date)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>

      <!-- Anywhere to change to dropdown -->
      <v-select
        :items="items"
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
        :items="items"
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
      searchText: "",
      isAdvanced: false,
    };
  },
  methods: {
    search() {
      // TODO: implement search function onclick
      console.log("searching");
      this.$emit("search", this.searchText);
    },
  },
};
</script>
