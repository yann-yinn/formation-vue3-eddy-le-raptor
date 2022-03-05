import { ref } from "vue";
import type { Todo } from "@/types";

export default function useApi<Type>(path) {
  const result = ref<Type | null>(null);
  const isLoading = ref<boolean>(false);
  const error = ref<string>("");

  async function fetchData() {
    isLoading.value = true;
    const response = await fetch(import.meta.env.VITE_API_URL + path);
    if (!response.ok) {
      const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
      error.value = errorMessage;
      isLoading.value = false;
      throw new Error(errorMessage);
    }
    const responseAsJson: Todo[] = await response.json();
    result.value = responseAsJson;
    error.value = "";
    isLoading.value = false;
    return responseAsJson;
  }

  return { fetchData, error, isLoading, result };
}
