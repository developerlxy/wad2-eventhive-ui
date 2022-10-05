<template>
    <div class="event-card">
        <img :src=eventDetails.imageURL alt="Event Image" class="event-image">
        <div class="event-details">
            <p class="event-name">{{eventDetails.name}}</p>
            <p class="event-datetime">{{eventDetails.date}}, {{eventDetails.time}}</p>
            <p class="event-location">{{eventDetails.location}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EventCard',
        props: {
            eventDetails: {
                type: Object,
                required: true
            }
        }
    }
    console.log(this)

</script>

<style>
    .event-card {
        border-radius: 1%;
        box-shadow: 1px 1px 3px;
        width: 300px;
        margin: 10px;
    }

    .event-image {
        width: 100%;
        height: 200px;
        object-fit: cover;

    }
    .event-card:hover {
        cursor: pointer;
    }

    .event-details {
        text-align: left;
    }

    .event-name {
        font-size: 1.2rem;
        font-weight: bold;
    }

</style>