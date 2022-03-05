<script setup lang="ts">
import UserList from "@/components/UserList.vue";
import useApi from "@/composables/useApi";
import useMouse from "@/composables/useMouse";
import type { User } from "@/types";

// import { useCounterStore } from "@/stores/counter";
// const counterStore = useCounterStore();

import useCounterStore from "@/composables/useCounterStore";
const { count } = useCounterStore();

const { fetchData, error, isLoading, result } = useApi<User[]>("/users");
const { x, y } = useMouse();
fetchData();
</script>

<template>
  <main>
    {{ count }}
    <div v-if="error.length === 0">
      <p>{{ error }}</p>
    </div>
    <button @click="fetchData">Refresh data</button>
    <p>{{ x }} , {{ y }}</p>
    <div v-if="isLoading">Chargement...</div>
    <div v-if="result">
      <UserList :users="result" />
    </div>
    <p>{{ x }} , {{ y }}</p>
  </main>
</template>
