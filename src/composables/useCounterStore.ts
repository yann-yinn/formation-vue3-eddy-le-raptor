import { ref, computed } from "vue";

const count = ref(0);

export default function useCounterStore() {
  function increment() {
    count.value++;
  }

  const doubleCount = computed(() => {
    return count.value * 2;
  });

  return { count, increment, doubleCount };
}
