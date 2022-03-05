<script setup lang="ts">
import type { Todo } from "@/types";

interface Props {
  todos: Todo[];
}

defineProps<Props>();
</script>

<template>
  <div v-for="(todo, i) in todos" :key="i">
    <p>{{ todo }}</p>
  </div>
</template>
