<template>
  <div id="app">
    <!-- <testDemo></testDemo> -->
    <mi-card
      :width="180"
      :imgSrc="'https://staticsns.cdn.bcebos.com/amis/2024-7/1722435555889/aa.jpg'"
      :imgHeight="200"
    >
    玫瑰庄园的故事
    <template v-slot:footer>
      <div class="mi-card__footer">
        <div class="price">200多人正在观看</div>
        <div class="nums">好评度100分</div>
      </div>
    </template>
    </mi-card>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
