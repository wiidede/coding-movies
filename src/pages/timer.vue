<script setup lang="ts">
const formSchema = toTypedSchema(z.object({
  startTimeInput: z.custom<string>(val => typeof val === 'string' && dayjs(val).isValid()),
  formatter: z.string(),
  reverse: z.boolean(),
  style: z.string(),
}))

const { values: form } = useForm({
  initialValues: {
    startTimeInput: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    formatter: 'HH:mm:ss',
    reverse: false,
    style: 'font-size: 60px; color: white; text-shadow: 0.1em 0.1em 0.5em black;',
  },
  validationSchema: formSchema,
})

const startTime = computed(() => dayjs(form.startTimeInput || undefined))
const now = useNow()
const offset = computed(() =>
  form.reverse
    ? 0 - dayjs().valueOf() - startTime.value.valueOf()
    : dayjs().valueOf() - startTime.value.valueOf())
const formattedTime = computed(() =>
  form.reverse
    ? dayjs(0 - now.value.valueOf()).subtract(offset.value, 'ms').format(form.formatter)
    : dayjs(now.value).subtract(offset.value, 'ms').format(form.formatter))
</script>

<template>
  <form class="flex flex-col gap-4 p4">
    <FormField v-slot="{ componentField }" name="startTimeInput">
      <FormItem>
        <FormLabel>Start Time</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="formatter">
      <FormItem>
        <FormLabel>Formatter</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>
    <FormField v-slot="{ value, handleChange }" name="reverse">
      <FormItem>
        <FormLabel>Reverse order</FormLabel>
        <FormControl>
          <Checkbox :checked="value" @update:checked="handleChange" />
        </FormControl>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="style">
      <FormItem>
        <FormLabel>Style</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>
  </form>
  <div :style="form.style" class="h-100vh w-100vw flex items-center justify-center bg-[#00ff00]">
    {{ formattedTime }}
  </div>
</template>
