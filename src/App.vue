<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <v-btn> Test Button </v-btn>
    <h1>Welcome to Shop Website</h1>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/shop">Shop</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </header>
  <RouterView />
  <footer>
    <h3>This is the footer</h3>
  </footer>
</template>

<style scoped>
.header {
  border: 1px solid red;
}
</style>
