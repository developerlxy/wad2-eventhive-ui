<template>
    <img :src="imageURL" alt="Event Image" class="event-image">
</template>

<script>
    export default {
        name: 'EventImageCard',
        props: {
            imageURL: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>
    .event-image {
        width: 200px;
        height: 200px;
        object-fit: contain;
        border-radius: 1%;
        box-shadow: 1px 1px 3px;
    }
    .event-image:hover {
        width: 205px;
        height: 205px;
    }
</style>