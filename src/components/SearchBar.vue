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
        @keyup.enter="search"
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
      console.log("searching")
      this.$emit("search", this.searchText);
    },
  },
};
</script>
