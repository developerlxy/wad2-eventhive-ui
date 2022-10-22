<template>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="dropdownItems"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search for location here"
      solo-inverted
    ></v-autocomplete>
</template>

<script>

  export default {
    data () {
      return {
        loading: false,
        search: null,
        select: null,
        results: [],
        dropdownItems: [],
        selectedLocation: null
      }
    },
    watch: {
      search (val) {
        this.axios.get(`https://developers.onemap.sg/commonapi/search?searchVal=${val}&returnGeom=Y&getAddrDetails=Y&pageNum=1`)
        .then(response => {
          this.dropdownItems = []
          response.data.results.forEach(result => {
            this.dropdownItems.push(result.SEARCHVAL)
            this.results.push(result)
          }
          )
        })
      },
      select(newLocation, oldLocation) {
        this.selectedLocation = this.getLocationObject();
        this.onLocationSelect();
      }
    },
    methods: {
      getLocationObject() {
        return this.results.find((result) => result.SEARCHVAL == this.select)
      },
      onLocationSelect (event) {
        this.$emit('locationSelected', this.selectedLocation)
      }
      
    },

  }
</script>