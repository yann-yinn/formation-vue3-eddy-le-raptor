<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/todo">Todo</RouterLink> |
    <RouterLink to="/counter">Counter</RouterLink> |
    <RouterLink to="/users">User</RouterLink> |
    <RouterLink to="/use-mouse">Use Mouse</RouterLink>
  </nav>
  <RouterView />
</template>
