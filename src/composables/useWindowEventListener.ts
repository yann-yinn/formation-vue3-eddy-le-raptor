import { onMounted, onUnmounted } from "vue";

export default function useWindowEventListener(
  eventName: string,
  callback: any
) {
  onMounted(() => {
    window.addEventListener(eventName, callback);
  });
  onUnmounted(() => {
    window.removeEventListener(eventName, callback);
  });
}
