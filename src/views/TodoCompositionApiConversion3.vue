<script setup lang="ts">
import { ref } from "vue";
import type { Todo } from "@/types";

const todos = ref<Todo[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string>("");

async function fetchData() {
  isLoading.value = true;
  const response = await fetch(import.meta.env.VITE_API_URL + "/todos");
  if (!response.ok) {
    const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
    error.value = errorMessage;
    isLoading.value = false;
    throw new Error(errorMessage);
  }
  const result: Todo[] = await response.json();
  todos.value = result;
  error.value = "";
  isLoading.value = false;
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
