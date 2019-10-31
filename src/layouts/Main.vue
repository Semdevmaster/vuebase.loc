<template>
  <div class="application">
    <header class="container full-width-outside bg-gray-300 py-4">

    </header>
    <div class="container">
      <router-view @loading-data="loading = true" @loaded-data="loading = false"/>
    </div>
    <footer class="container full-width-outside bg-gray-700 py-4"></footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  computed: {},
  components: {}
}
</script>
<style>
  .application{
    display: grid;
    align-content: space-between;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
  }
</style>
