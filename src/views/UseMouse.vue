<script setup lang="ts">
import useMouse from "@/composables/useMouse";

const { x, y } = useMouse();
</script>

<template>position: {{ x }} , {{ y }}</template>
