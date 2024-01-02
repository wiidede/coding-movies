<script setup lang="ts" generic="T extends 'text' | 'number'">
const props = defineProps<{
  type?: T
}>()

const model = defineModel<T extends 'text' ? string : number>()
</script>

<template>
  <input v-model="model" :type="props.type" class="form-input relative block border-0 rounded-md bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset disabled:cursor-not-allowed dark:bg-gray-900 dark:text-white disabled:opacity-75 focus:outline-none focus:ring-2 dark:ring-gray-700 focus:ring-primary-500 dark:focus:ring-primary-400 placeholder-gray-400 dark:placeholder-gray-500">
</template>
