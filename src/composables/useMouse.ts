//import type { Position } from "@/types";
import { ref } from "vue";
import useWindowEventListener from "@/composables/useWindowEventListener";

export default function useMouse() {
  // ref<number|undefined>
  const x = ref<number | undefined>(undefined); //renvoie proxy
  const y = ref<number | undefined>(undefined);

  useWindowEventListener("mousemove", trackMouse);

  function trackMouse(event: MouseEvent) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  return {
    x,
    y,
  };
}
