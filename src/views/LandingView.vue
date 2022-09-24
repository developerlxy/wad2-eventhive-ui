<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main>
    <RouterLink to="/home">
      <img alt="EventHive logo" class="logo" src="@/assets/logo.png"/>
      Click to buzz in!
    </RouterLink>
  </main>
</template>
