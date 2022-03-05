<template>
  <main>
    <div v-if="data.error.length === 0">
      <p>{{ data.error }}</p>
    </div>

    <button @click="fetchData">Refresh data</button>

    <div v-if="data.isLoading">Chargement...</div>
    <div v-else>
      <div v-for="(todo, i) in data.todos" :key="i">
        <p>{{ todo }}</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import type { Todo } from "@/types";

interface Data {
  todos: Todo[];
  isLoading: boolean;
  error: string;
}

export default defineComponent({
  setup() {
    const data = reactive<Data>({
      todos: [],
      isLoading: true,
      error: "",
    });

    async function fetchData() {
      data.isLoading = true;
      const response = await fetch(import.meta.env.VITE_API_URL + "/todos");
      if (!response.ok) {
        const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
        data.error = errorMessage;
        data.isLoading = false;
        throw new Error(errorMessage);
      }
      const todos: Todo[] = await response.json();
      data.todos = todos;
      data.error = "";
      data.isLoading = false;
      return todos;
    }

    fetchData();

    return { data, fetchData };
  },
});
</script>
