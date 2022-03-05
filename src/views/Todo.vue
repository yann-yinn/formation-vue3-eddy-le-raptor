<script setup lang="ts">
import TodoList from "@/components/MyComponent.vue";
import useApi from "@/composables/useApi";
import type { Todo } from "@/types";

const { fetchData, error, isLoading, result } = useApi<Todo[]>("/todos");

fetchData();
</script>

<template>
  <main>
    <div v-if="error.length === 0">
      <p>{{ error }}</p>
    </div>
    <button @click="fetchData">Refresh data</button>

    <div v-if="isLoading">Chargement...</div>
    <div v-if="result">
      <TodoList :todos="result" />
    </div>
  </main>
</template>
