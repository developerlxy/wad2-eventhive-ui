<template>
    <!-- html -->
    <div class="search-container">
        <div class="search-box">
            <input class="search-input" type="text" placeholder="Search for anything" v-model="searchText" @keyup.enter="search">
        </div>
        <button class="search-btn" type="submit"><font-awesome-icon icon="magnifying-glass" /></button>
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
                this.$emit('search', this.searchText)
            }
        }
    }
</script>

<style>
    /* css */
    .search-container {
        align-items:center;
        background-color: rgb(255, 255, 255);
        border: 2px solid;
        border-color: rgb(119, 153, 119);
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
        color: rgb(119, 153, 119);
        border: 0px none;
        background-color: rgb(255, 255, 255);
        padding: 0px 10px;
        width: 200px;
        transition: width 0.35s ease-in-out;
    }
    .search-input:focus {
        outline: none;
        width: 300px;
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


</style>