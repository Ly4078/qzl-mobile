
<template>
  <div class="write01">
    <img class="topimg" src="../../assets/imgs/writeimg.jpg" alt>
    <div class="homebox wribox">
      <div v-for="item in list" :key="item.id">
        <div class="childtitle">
          <span>{{item.label}}</span>
          <div class="add">+</div>
        </div>
        <ul class="write">
          <li v-for="(index) in 5" :key="index" @click="handwerite">
            <img v-show="index%2==0" :src="writelist.imgurl1" alt>
            <img v-show="index%2!=0" :src="writelist.imgurl2" alt>
            <div class="lir">
              <p>{{writelist.title}}</p>
              <p>
                {{writelist.label}}
                <span>[查看更多]</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "write01",
  data() {
    return {
      list: [
        {
          id: 1,
          label: "小学作文范文"
        },
        {
          id: 2,
          label: "小考满分作文"
        },
        {
          id: 3,
          label: "中学作文典范"
        },
        {
          id: 4,
          label: "中考满分作文"
        }
      ],
      writelist: {
        id: 1,
        title: "溪口一日游初中生作文",
        label:
          "哗啦啦，呼啦啦……天上下起了小雨，而我们的心里却是一阵愁：今天是我们去春游的日子，会不会要因为下雨推...",
        imgurl1: require("../../assets/imgs/hzw1.jpg"),
        imgurl2: require("../../assets/imgs/hzw2.jpg")
      }
    };
  },
  methods: {
    handwerite() {
     this.$router.push("/writedetails");
    }
  }
};
</script>

<style lang="less">
.write01 {
    .wribox{
        padding-top: 50px;
    }
}
</style>
