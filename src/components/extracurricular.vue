
<template>
  <div class="extracurricular">
    <img class="topimg" src="../assets/imgs/yuedu.jpg" alt>
    <div class="homebox box1">
      <ul class="mo-books">
        <li v-for="(item,index) in 10" :key="index" @click="handlebook(item)">
          <img src="../assets/imgs/bokimg1.jpg" alt>
          <p class="title">书名书名书名书名书名书名书名书名</p>
          <p
            class="info"
          >书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介书本简介</p>
        </li>
      </ul>
      <ul class="pagination">
        <li @click="handlepage(0)" :class="0 ==actpage?'actpage':''">首页</li>
        <li @click="handlepage(-1)" :class="-1 ==actpage?'actpage':''">上一页</li>
        <li
          v-for="(item,index) in pages"
          :key="index"
          @click="handlepage(item)"
          :class="item ==actpage?'actpage':''"
        >{{item}}</li>
        <li @click="handlepage(-2)" :class="-2 ==actpage?'actpage':''">下一页</li>
        <li @click="handlepage(-3)" :class="-3 ==actpage?'actpage':''">尾页</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "extracurricular",
  data() {
    return {
      actpage: "",
      pages: ["1", "2", "3", "4", "5"]
    };
  },
  methods: {
    handlepage(obj) {
      console.log(obj);
      this.actpage = obj;
    },
    handlebook(obj) {
      console.log(obj);
    }
  }
};
</script>
<style lang="less">
.extracurricular {
  .info {
    display: -webkit-box; /*作为弹性伸缩盒子模型显示*/
    -webkit-line-clamp: 3; /*显示的行数；如果要设置2行加...则设置为2*/
    overflow: hidden;
    text-overflow: ellipsis; /* 溢出用省略号*/
    /*! autoprefixer: off */
    -webkit-box-orient: vertical; /*伸缩盒子的子元素排列：从上到下*/
    /* autoprefixer: on */
  }
}
</style>
