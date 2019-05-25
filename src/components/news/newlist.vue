<template>
  <div class="newlist">
    <img class="topimg" src="../../assets/imgs/aboutusimg1.jpg" alt>
    <div class="homebox">
      <ul class="write">
        <li v-for="(index) in 15" :key="index" @click="handnews(item)">
          <img v-show="index%2==0" :src="writelist.imgurl1" alt>
          <img v-show="index%2!=0" :src="writelist.imgurl2" alt>
          <div class="lir">
            <p class="lirtitle" style="color: #e67817;">{{writelist.title}}</p>
            <p>
              {{writelist.label}}
              <span>[查看更多]</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "newlist",
  data() {
    return {
      writelist: {
        id: 1,
        title: "新闻标题新闻标题新闻标题新闻标题",
        label:
          "新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介",
        imgurl1: require("../../assets/imgs/hzw1.jpg"),
        imgurl2: require("../../assets/imgs/hzw2.jpg")
      }
    };
  },
  methods: {
    handnews(obj) {
      this.$router.push("/newdetails");
    }
  }
};
</script>
<style lang="less" scoped>
.newlist {

}
</style>

    