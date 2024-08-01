<template>
  <div class="mi-card" :style="width ? {
    width: width + 'px',
  } : {}">
    <div class="mi-card__img" :style="imgHeight ? {
      height: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="" class="mi-card__img">
    </div>
    <div v-if="sumary" class="mi-card__sumary">
      {{sumary}}
    </div>
    <div v-else class="mi-card__sumary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'mi-card',
  props: {
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imgHeight: {
      type: Number,
      default: 100
    },
    sumary: {
      type: String,
      default: ''
    }
  }
}
</script>
