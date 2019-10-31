<template>
  <svg class="inline-icon">
    <use :xlink:href="iconPath"/>
  </svg>
</template>

<script>
export default {
  name: 'ui-icon',

  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    iconPath () {
      const spritePath = require(`@/assets/img/sprite.svg`)
      return `${spritePath}#${this.name}`
    }
  }
}
</script>

<style>
  .inline-icon {
    display: inline-block;
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    vertical-align: middle;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
</style>
