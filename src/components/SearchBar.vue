<template>
    <!-- html -->
    <div class="search">
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

    </div>

</template>

<script>
    // javascript
    export default {
        name: 'SearchBar',
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            search() {
                // TODO: implement search function onclick
                this.$emit('search', this.searchText)
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
            }
        }
    }
     
</script>

<style>
    /* css */

    .search-container {
        align-items:center;
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(119, 153, 119);
        border-radius: 50px;
        display: flex;
        padding: 5px;
        position: relative;
        width: fit-content;
    }
    ::placeholder {
        color: rgb(119, 153, 119);
        font-size: medium;
        text-align: left;
    }

    .search-input {
        font-size: medium;
        border: 0px none;
        background-color: rgb(255, 255, 255);
        padding: 0px 10px;
        width: 200px;
        transition: width 0.35s ease-in-out;
    }
    .search-input:focus {
        outline: none;
        width: 400px;
    }

    .search-btn {
        background-color: rgb(119, 153, 119);
        color: white;
        border: 0px none;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        display: inline-block;
    }
    .search-btn:hover {
        background-color: rgb(107, 135, 107);
    }


    #filters {
        visibility: hidden;
        display: none;
    }
    .filter-container {
        align-items: center;
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(119, 153, 119);
        border-radius: 50px;
        display: inline-block;
        padding: 5px;
        margin-top: 10px;
        margin-right: 10px;
        position: relative;
        width: fit-content;
    }
    .filter-container:hover {
        background-color: rgb(245, 245, 245);
    }
    .filter-button {
        color: rgb(119, 153, 119);
        border: 0px none;
    }
    .filter-button > * {
        padding: 0px 2px;
    }
</style>