<template>
  <!-- html -->
  <v-container class="ma-3">
    <v-row>
      <v-text-field
        placeholder="Search for anything"
        outlined
        dense
        rounded
        hide-details
        class="search-box "
        append-icon="search"
        @focus="isAdvanced = true"
      ></v-text-field>
    </v-row>
    <div v-if="isAdvanced" class="row">
      <v-text-field
        rounded
        hide-details
        outlined
        dense
        placeholder="Anytime"
        class="filter ma-1"
      ></v-text-field>
      <v-text-field
        rounded
        hide-details
        outlined
        dense
        placeholder="Anywhere"
        class="filter ma-1"
      ></v-text-field>
      <v-text-field
        rounded
        hide-details
        outlined
        dense
        placeholder="Any Group Size"
        class="filter ma-1"
        >Any Group Size</v-text-field
      >
    </div>
  </v-container>

  <!-- <div class="search">
    <div class="search-container">
        <div class="search-box">
            <input id="search-input" class="search-input" type="text" placeholder="Search for anything" v-model="searchText" @keyup.enter="search" @focus="showFilters()" @focusout="hideFilters()"/>
        </div>
        <button class="search-btn" type="submit">
            <font-awesome-icon icon="magnifying-glass"/>
        </button>
    </div>
        <div class="filters" id="filters">
        <div class="filter-container">
            <button class="filter-button">
                <font-awesome-icon icon="location-dot" />
                Anywhere</button>
        </div>
        <div class="filter-container">
            <button class="filter-button">
                <font-awesome-icon icon="calendar" />
                Anytime</button>
        </div>
        <div class="filter-container">
            <button class="filter-button">
                <font-awesome-icon icon="person" />
                Any group size</button>
        </div>
    </div>
    </div> -->
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
      this.$emit("search", this.searchText);
    },
    showFilters() {
      var filters = document.getElementById("filters");
      console.log(filters.style.visibility);
      filters.style.visibility = "visible";
      filters.style.display = "flex";
    },
    hideFilters() {
      var filters = document.getElementById("filters");
      console.log(filters.style.visibility);
      filters.style.visibility = "hidden";
      filters.style.display = "none";
    },
  },
};
</script>

<style>
/* css */
.v-text-field {

}
</style>
