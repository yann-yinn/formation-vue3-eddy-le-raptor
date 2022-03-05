import { ref } from "vue";
import type { User } from "@/types";

const user = ref<User | undefined>(undefined);

export default function useAuth() {
  async function login() {
    const response = await fetch("/api/login");
    const loggedUser = await response.json();
    user.value = loggedUser;
  }

  return { user, login };
}
