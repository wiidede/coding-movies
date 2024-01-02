<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <label>{{ label }}</label>
    <slot />
  </div>
</template>
