<template>
  <div>
    <h1>This is an about page</h1>
    <router-link :to="{name:'home'}">Back to home page</router-link>
  </div>
</template>
<script>
/* Component */
export default {
  name: 'about',
  metaInfo: {
    title: 'About page'
  },
  data: () => ({})
}

/* Router */
export const aboutRouter = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About'),
    meta: {
      layout: 'main',
      title: 'О компании',
      icon: 'mdi-home',
      breadCrumbs: [
        { to: '/about', text: 'О нас', disabled: false }
      ]
    }
  }
]
</script>
