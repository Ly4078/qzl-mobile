<template>
  <div class="support">
    <img class="topimg" src="../../assets/imgs/mfjm.jpg" alt>
    <div class="homebox">
      <div class="mo-erjmu">
        <span class="span1">加盟扶持</span>
        <span class="span2">JOINING SUPPORT</span>
      </div>
      <ul class="fcimg">
        <li v-for="item in support" :key="item.id">
          <img :src="item.imgurl" alt>
          <div class="fcrig">
            <p class="title">{{item.label}}</p>
            <p class="txts" v-for="(items,index) in item.txts" :key="index">{{items}}</p>
          </div>
        </li>
      </ul>
      <img class="fcimg4" src="../../assets/imgs/fcimg4.png" alt="">
      <div class="mo-erjmu">
        <span class="span1">合作流程</span>
        <span class="span2">COOPERATION PROCESS</span>
      </div>
      <img class="fcimg4" src="../../assets/imgs/dsaon.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "support",
  data() {
    return {
      support: [
        {
          id: 1,
          label: "用心扶持合作伙伴",
          imgurl: require("../../assets/imgs/fcimg1.png"),
          txts: [
            "● 三零：零加盟费、零保证金、零管理费；",
            "● 三配：订货系统、收银系统、o2o平台；",
            "● 让客户一分钱一分货，减轻加盟商投资成本增",
            "● 加盈利渠道，借助公司团队的技术力量和强大的售后服务体系开展经营。"
          ]
        },
        {
          id: 2,
          label: "用心扶持合作伙伴",
          imgurl: require("../../assets/imgs/fcimg2.png"),
          txts: [
            "● 选址，协助选择性价比最高的书吧；",
            "● 设计平面图、3D图，店招、收银台、形象墙、吊顶、座椅、货柜；",
            "● 指导智能管理软件系统的安装和操作；",
            "● 传授读书吧高人气，高销量，爆销的营销秘诀；",
            "● 提供营销平台，让客户实现线上线下结合的o2o经营模式；"
          ]
        },
        {
          id: 3,
          label: "保姆式全程跟踪服务",
          imgurl: require("../../assets/imgs/fcimg3.png"),
          txts: [
            "● 理论技术培训，营运管理培训，服务礼仪培训；",
            "● 提供开业活动与节假日营销策划方案，高级督导辅助加盟商开业；",
            "● 对客户的进货订单进行处理，及时联系物流发货；",
            "● 对客户不定期的跟踪回访，了解盟商存在的问题提出解决方案；",
            "● 不断推出优质新品，万件产品一站式供货满足客户需求；"
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less">
.support {
  .mo-erjmu {
    .span2 {
      left: -30px;
    }
  }
  .fcimg {
    li {
      img {
        width: 150px;
        height: 140px;
        float: left;
        margin-top: 50px;
      }
      .fcrig {
        width: 76%;
        float: left;
        .title {
          line-height: 40px;
          font-weight: bold;
          color: #000;
        }
        .txts {
          color: #999;
        }
      }
    }
    li:nth-child(2n){
      img{
        float: right;
        margin-top: 100px;
      }
      .fcrig{
         margin: 20px 0;
        float: right;
        text-align: right;
      }
    }
    li:nth-child(3){
      img{
        margin-top: 120px;
      }
    }
  }
  .fcimg4{
    width: 100%;
    margin: 30px 0;
  }
}
</style>
