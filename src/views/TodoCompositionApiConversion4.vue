<script setup lang="ts">
import type { Todo } from "@/types";

let todos = $ref<Todo[]>([]);
let isLoading = $ref<boolean>(false);
let error = $ref<string>("");

fetchData();

async function fetchData() {
  isLoading = true;
  const response = await fetch(import.meta.env.VITE_API_URL + "/todos");
  if (!response.ok) {
    const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
    error = errorMessage;
    isLoading = false;
    throw new Error(errorMessage);
  }
  const result: Todo[] = await response.json();
  todos = result;
  error = "";
  isLoading = false;
  return todos;
}
</script>

<template>
  <main>
    <div v-if="error.length === 0">
      <p>{{ error }}</p>
    </div>

    <button @click="fetchData">Refresh data</button>

    <div v-if="isLoading">Chargement...</div>
    <div v-else>
      <div v-for="(todo, i) in todos" :key="i">
        <p>{{ todo }}</p>
      </div>
    </div>
  </main>
</template>
