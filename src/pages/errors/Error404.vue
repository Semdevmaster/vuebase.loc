<template>
  <div class="flex items-center justify-center h-screen w-full">
    <div class="text-center">
      <h1 class="error-number">404</h1>
      <div class="my-4 text-2xl">Простите, данная страница не найдена!</div>
      <ui-button class="bg-primary text-white shadow-primary" @click.native="goHome">Перейти на главную</ui-button>
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/ui/ui-button'

export default {
  components: { UiButton },
  props: ['error'],
  methods: {
    goHome () {
      this.$router.push({ path: '/' })
    }
  }
}
export const error404Router = [
  {
    path: '*',
    name: 'error404',
    component: () => import('@/pages/errors/Error404'),
    meta: { layout: 'empty' }
  }
]
</script>
<style>
  .error-number {
    font-size: 150px;
    line-height: 150px;
    font-weight: 700;
    color: #252932;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
  }
</style>
