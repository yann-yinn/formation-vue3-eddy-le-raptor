<script setup lang="ts">
import type { User } from "@/types";

interface Props {
  users: User[];
}

defineProps<Props>();
</script>

<template>
  <div v-for="(user, i) in users" :key="i">
    <p>{{ user }}</p>
  </div>
</template>
