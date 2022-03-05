<template>
  <form @submit.prevent="handleSumbit">
    <input type="email" />
  </form>
</template>

<script setup lang="ts">
import useAuth from "@/composables/useAuth";
const { login } = useAuth();
function handleSumbit() {
  login();
}
</script>
