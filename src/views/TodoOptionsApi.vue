<script lang="ts">
import { defineComponent } from "vue";
import type { Todo } from "@/types";

interface Data {
  todos: Todo[];
  isLoading: boolean;
  error: string;
}

export default defineComponent({
  data(): Data {
    return {
      todos: [],
      isLoading: true,
      error: "",
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const response = await fetch(import.meta.env.API_URL + "/todos");
      if (!response.ok) {
        const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
        this.error = errorMessage;
        this.isLoading = false;
        throw new Error(errorMessage);
      }
      const todos: Todo[] = await response.json();
      this.todos = todos;
      this.error = "";
      this.isLoading = false;
      return todos;
    },
  },
});
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
