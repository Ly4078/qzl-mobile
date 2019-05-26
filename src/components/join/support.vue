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
      <img class="fcimg4" src="../../assets/imgs/fcimg4.png" alt>
      <div class="mo-erjmu">
        <span class="span1">合作流程</span>
        <span class="span2">COOPERATION PROCESS</span>
      </div>
      <div class="liucada">
        <img class="fcimg5" src="../../assets/imgs/fcimg5.png" alt>
        <ul>
          <li v-for="item in lclist" :key="item.id">
            <p class="p1">{{item.label}}</p>
            <p class="p2">{{item.txt}}</p>
          </li>
        </ul>
      </div>
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
          label: "三零、本配、本服务",
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
      ],
      lclist: [
        {
          id: 1,
          label: "加盟申请",
          txt: "在线填写个人真实的基本信息 以便快速通过审核"
        },
        {
          id:2,
          label: "总部审核",
          txt: "个人真实信息，身份证，店铺实景照片及地理位置"
        },
        {
          id: 3,
          label: "正式签约",
          txt: "双方沟通达成一致，签定合作协议， 交纳诚意定金"
        },
        { id: 4, label: "", txt: "" },
        {
          id: 5,
          label: "首次进货",
          txt: "在订货系统自主选产品，也可请 公司经理协助配货"
        },
        {
          id: 6,
          label: "书吧装修",
          txt: "提供统一的书吧装修效果图，统一配置 书柜及设备"
        },
        { id: 7, label: "", txt: "" },
        {
          id: 8,
          label: "开业指导",
          txt: "书吧布局，业前营销，开业活动 方案的指导工作"
        },

        {
          id: 9,
          label: "正式营业",
          txt: "儿童教育产品上架，将书吧实景照片 发至总部"
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
    li:nth-child(2n) {
      img {
        float: right;
        margin-top: 100px;
      }
      .fcrig {
        margin: 20px 0;
        float: right;
        text-align: right;
      }
    }
    li:nth-child(3) {
      img {
        margin-top: 120px;
      }
    }
  }
  .fcimg4 {
    width: 100%;
    margin: 30px 0;
  }
  .liucada {
    width: 100%;
    height: 380px;
    position: relative;
    .fcimg5 {
      width: 100%;
    }
    ul{
      position: absolute;
      top: 0px;
      li{
        width: 24%;
        float: left;
        padding-top:50px;
        padding-left: 50px;
        font-size: 18px;
        .p1{
          font-weight: bold;
        }
        .p2{
          font-size: 14px;
        }
      }
      li:nth-child(4), li:nth-child(5), li:nth-child(6){
        padding-top: 20px;
      }
    }
  }
}
</style>
