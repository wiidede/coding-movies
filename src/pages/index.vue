<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

const modules = import.meta.glob('./*.vue')
const pages = Object.entries(modules)
  .map(([path]) => (path.split('/').pop() || '').replace(/\.\w+$/, ''))
  .filter(page => page !== '[...all]')

const router = useRouter()
</script>

<template>
  <main>
    <h1>
      movies
    </h1>
    <div v-for="page in pages" :key="page" @click="router.push(`/${page}`)">
      {{ page }}
    </div>
  </main>
</template>
