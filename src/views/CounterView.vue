<template>
  <p>count: {{ count }}</p>
  <p>doublecount: {{ doubleCount }}</p>
  <button @click="add">+++</button>
  <button @click="sub">--</button>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

/**
 * PROXYS:
 * - ref
 * - reactive
 * - computed
 * - cycle de vie (onMounted)
 * - watch
 */

export default defineComponent({
  setup() {
    const count = ref<number>(0);

    const message = "hello";

    const doubleCount = computed(() => {
      return 2 * count.value;
    });

    onMounted(() => {
      console.log("le composant est monté");
    });

    function add() {
      count.value += 1;
      return count.value;
    }
    function sub() {
      count.value -= 1;
      return count.value;
    }
    return { count, doubleCount, add, sub, message };
  },
});
</script>
