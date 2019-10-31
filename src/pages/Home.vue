<template>
  <div class="p-4">
    <h1>Hello world</h1>
    <ui-button class="bg-success shadow hover:shadow-success mr-3 text-white rounded ripple">Button
    </ui-button>
    <ui-button class="rounded bg-secondary shadow hover:shadow-primary text-white hover:shadow-lg ripple">
      Button
    </ui-button>
    <img src="@/assets/img/banners/calibri.png" alt="">
    <div class="bg-gray-100 mt-10 p-4 relative">
      <div class="p-2 shadow-warning bg-warning inline-block absolute -top-3">
        <ui-icon name="question" class="text-white text-xl"></ui-icon>
      </div>
      <div class="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        blanditiis id
        incidunt modi omnis? Cupiditate deserunt dolore doloribus error est, et laborum neque optio
        repudiandae tempora
        tempore vero voluptas voluptatem?
      </div>
    </div>
    <div class="bg-gray-100 mt-10 p-4 relative">
      <div class="p-2 shadow-info bg-info inline-block absolute -top-3">
        <ui-icon name="cog" class="text-white text-xl"></ui-icon>
      </div>
      <div class="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        blanditiis id
        incidunt modi omnis? Cupiditate deserunt dolore doloribus error est, et laborum neque optio
        repudiandae tempora
        tempore vero voluptas voluptatem?
      </div>
    </div>
    <div class="flex mb-4">
      <div class="bg-success bg-gradient shadow-success rounded-lg" style="height: 250px;width: 250px;"></div>
      <div class="bg-info bg-gradient shadow-info rounded-lg" style="height: 250px;width: 250px;"></div>
      <div class="bg-warning bg-gradient shadow-warning rounded-lg" style="height: 250px;width: 250px;"></div>
      <div class="bg-error bg-gradient shadow-error rounded-lg" style="height: 250px;width: 250px;"></div>
    </div>
    <div class="bg-error shadow-error bg-gradient rounded" style="width: 800px; height: 100px;">
    </div>
    <div class="grid-container">
      <div class="p-4 bg-accent"></div>
      <div class="p-4 bg-accent"></div>
      <div class="p-4 bg-accent"></div>
      <div class="p-4 bg-accent"></div>
    </div>
  </div>
</template>

<script>
/* Imports */
import requireAuth from '@/helpers/requireAuth'
import UiButton from '@/components/ui/ui-button'
import UiIcon from '@/components/ui/ui-icon'
import Image from '@/components/images/image'

/* Component */
export default {
  name: 'home',
  components: {
    Image,
    UiIcon,
    UiButton
  },
  metaInfo: {
    title: 'Hello page'
  },
  data: () => ({
    loading: true
  }),
  computed: {},
  methods: {}
}

/* Router */
export const homeRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home'),
    meta: {
      layout: 'main',
      title: 'Главная',
      icon: 'mdi-home',
      breadCrumbs: [
        { to: '/', text: 'Главная', disabled: false }
      ]
    },
    beforeEnter: requireAuth
  }
]
</script>
