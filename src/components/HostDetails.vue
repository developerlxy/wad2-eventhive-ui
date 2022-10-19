<template>
    
</template>

<script>
        export default {
        name: 'HostDetails',
        props: {
            eventDetails: {
                type: Object,
                required: true
            }
        },
        data: () => ({
      benched: 0,
    }),
    computed: {
      items () {
        return Array.from({ length: this.length }, (k, v) => v + 1)
      },
      length () {
        return 20
      },
    },
    }
</script>
