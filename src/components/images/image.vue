<template>
  <picture>
    <source srcset="imgPath" type="image/webp">
    <img src="imgPath" alt="altText">
  </picture>
</template>

<script>
  export default {
    name: 'image',
    props: {
      imgPath: String,
      altText: String
    }
  }
</script>

<style scoped>

</style>
