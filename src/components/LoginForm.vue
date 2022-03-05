<template>
  <form @submit.prevent="handleSumbit">
    <input type="email" />
  </form>
</template>

<script setup lang="ts">
function handleSubmit() {
  axios.post("/login");
}
</script>
