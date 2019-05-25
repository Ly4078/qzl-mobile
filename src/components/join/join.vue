
<template>
  <div class="join">
    <img class="topimg" src="../../assets/imgs/bannerjm.jpg" alt>
    <div class="homebox box1">
      <div class="mo-erjmu">
        <span class="span1">加盟优势</span>
        <span class="span2">JOIN ADVANTAGE</span>
      </div>
      <img class="lunlfd" src="../../assets/imgs/lunlfd.jpg" alt="">
      <ul class="jm-l">
        <li v-for="item in linav" :key="item.id" @click="handlenav(item)">
          <p class="spp" v-show="actobj.id ==item.id">{{item.label}}</p>
          <img :src="item.imgUrl" alt="">
          <p>{{item.text}}</p>
        </li>
      </ul>
      <div class="mo-erjmu">
        <span class="span1">财富前景</span>
        <span class="span2">WEALTH PROSPECTS</span>
      </div>
      <img class="sawe" src="../../assets/imgs/sawe.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "join",
  data() {
    return {
      actobj:{},
      linav: [
        {
          id: 1,
          imgUrl: require("../../assets/imgs/jm-l1.png"),
          label: "技术技能",
          text: "线上够线下体验，同时 享有儿童作文互动式教 学的服务！"
        },
        {
          id: 2,
          imgUrl: require("../../assets/imgs/jm-l2.png"),
          label: "有形资产",
          text: "现代感，时尚化，创新 型体验式的儿童共享阅 读吧。"
        },
        {
          id: 3,
          imgUrl: require("../../assets/imgs/jm-l3.png"),
          label: "无形资产",
          text: "优秀的品牌形象，良好 的商业信誉，积极进取 的企业文化。"
        },
        {
          id: 4,
          imgUrl: require("../../assets/imgs/jm-l4.png"),
          label: "人力资源",
          text: "关键领域拥有专长职员， 积极上进，组织能力具有 丰富的经验。"
        },
        {
          id: 5,
          imgUrl: require("../../assets/imgs/jm-l5.png"),
          label: "组织体系",
          text: "高质量的管控体系，完 善的组织机构，培养忠 实的合作伙伴团队。"
        }
      ]
    };
  },
  methods:{
    handlenav(obj){
      this.actobj=obj;
    }
  },
  created() {
    
  }
};
</script>
<style lang="less">
.join {
  .span2 {
    left: -30px;
  }
  .lunlfd, .sawe{
    width: 100%;
  }
  .jm-l{
    height: 380px;
    li{
      width: 19%;
      margin-right: 1%;
      float: left;
      font-size: 12px;
      position: relative;
      .spp{
        width:100%;
        position: absolute;
        top:70px;
        height: 30px;
        background: #E67817;
        text-align: center;
        color: #fff;
      }
      img{
        width: 100%;
        height: 100px;
      }
    }
    li:last-child{
      margin: none;
    }
  }
}
</style>

