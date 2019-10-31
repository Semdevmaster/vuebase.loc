<template>
  <div class="video-container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ui-video'
}
</script>

<style>
  .video-container {
    position: relative;
    overflow: hidden;
    height: 0;
    margin-bottom: 1em;
    padding-top: 30px;
    padding-bottom: 56.25%;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
