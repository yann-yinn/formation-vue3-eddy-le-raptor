<script setup lang="ts">
// import { useCounterStore } from "@/stores/counter";
// const counterStore = useCounterStore();
import useCounterStore from "@/composables/useCounterStore";
const { count, increment } = useCounterStore();
</script>

<template>
  <main>
    {{ count }}
    <button @click="increment">++</button>
  </main>
</template>
