<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 22px;
}

.lir p:nth-child(2) {
  display: -webkit-box;
  /*作为弹性伸缩盒子模型显示*/

  -webkit-line-clamp: 3;
  /*显示的行数；如果要设置2行加...则设置为2*/

  overflow: hidden;
  text-overflow: ellipsis;
  /* 溢出用省略号*/

  /*! autoprefixer: off */

  -webkit-box-orient: vertical;
  /*伸缩盒子的子元素排列：从上到下*/

  /* autoprefixer: on */

}

</style>
