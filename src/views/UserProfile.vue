<template>
    <LandingScreen v-if="isLoading"></LandingScreen>
    <div v-else>
        <NavBar></NavBar>
        <v-card>
            
        </v-card>
    </div>
</template>
<script>
import LandingScreen from "../components/LandingScreen.vue";

export default {
    name: "User Profile",
    components: { LandingScreen },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    },
}
</script>