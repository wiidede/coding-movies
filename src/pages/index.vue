<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const modules = import.meta.glob('./*.vue')
const pages = Object.entries(modules)
  .map(([path]) => (path.split('/').pop() || '').replace(/\.\w+$/, ''))
  .filter(page => ['[...all]', 'index'].includes(page) === false)

const router = useRouter()
</script>

<template>
  <div class="m-auto max-w-1024px px4 py10 text-center">
    <h1 class="text-3xl">
      movies
    </h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">
      <Button v-for="page in pages" :key="page" size="lg" @click="router.push(`/${page}`)">
        {{ page }}
      </Button>
    </div>
  </div>
</template>
