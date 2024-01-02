<script setup lang="ts">
const startTimeInput = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))
const startTime = computed(() => dayjs(startTimeInput.value || undefined))
const formatter = ref('HH:mm:ss')
const now = useNow()
const reverse = ref(false)
const offset = computed(() =>
  reverse.value
    ? 0 - dayjs().valueOf() - startTime.value.valueOf()
    : dayjs().valueOf() - startTime.value.valueOf())
const formattedTime = computed(() =>
  reverse.value
    ? dayjs(0 - now.value.valueOf()).subtract(offset.value, 'ms').format(formatter.value)
    : dayjs(now.value).subtract(offset.value, 'ms').format(formatter.value))
const style = ref('font-size: 60px; color: white; text-shadow: 0.1em 0.1em 0.5em black;')
</script>

<template>
  <div class="flex flex-wrap items-center gap-4 px4 py10">
    <WithLabel label="Start Time">
      <TheInput v-model="startTimeInput" placeholder="Start time" />
    </WithLabel>
    <WithLabel label="Formatter">
      <TheInput v-model="formatter" placeholder="Formatter" />
    </WithLabel>
    <TheCheckbox v-model="reverse">
      Reverse order
    </TheCheckbox>
    <WithLabel label="Style" class="w-full">
      <TheInput v-model="style" placeholder="Style" class="flex-auto" />
    </WithLabel>
  </div>
  <div :style="style" class="h-100vh w-100vw flex items-center justify-center bg-[#00ff00]">
    {{ formattedTime }}
  </div>
</template>
