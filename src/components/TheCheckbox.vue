<script setup lang="ts">
defineProps<{
  label?: string
}>()
const checked = defineModel<boolean>()
const { nextId } = useId()
const id = `the-${nextId()}`
</script>

<template>
  <div class="flex items-center">
    <input :id="id" v-model="checked" type="checkbox" class="form-checkbox h-4 w-4 border border-gray-300 rounded bg-white text-primary-500 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-900 dark:text-primary-400 disabled:opacity-50 focus-visible:ring-2 focus:ring-0 focus-visible:ring-offset-2 focus-visible:ring-primary-500 focus:ring-transparent focus-visible:ring-offset-white focus:ring-offset-transparent dark:checked:border-transparent dark:indeterminate:border-transparent dark:checked:bg-current dark:indeterminate:bg-current dark:focus-visible:ring-primary-400 dark:focus-visible:ring-offset-gray-900">
    <label :for="id" class="ms-2 text-sm text-gray-700 font-medium dark:text-gray-200">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<style scoped>
input[type='checkbox']:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0'/%3E%3C/svg%3E");
  background-color: currentColor;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-color: transparent;
}
</style>
