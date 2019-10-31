<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>
<script>
  import MainLayout from '@/layouts/Main'

  export default {
    components: {
      MainLayout,
      EmptyLayout: () => import('@/layouts/Empty')
    },
    computed: {
      layout () {
        return `${(this.$route.meta.layout || 'main')}-layout`
      }
    }
  }
</script>
