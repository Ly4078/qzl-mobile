
<template>
  <div class="join">
    <img class="topimg" src="../../assets/imgs/bannerjm.jpg" alt>
    <div class="homebox box1">
      <div class="mo-erjmu">
        <span class="span1">加盟优势</span>
        <span class="span2">JOIN ADVANTAGE</span>
      </div>
      <img class="lunlfd" src="../../assets/imgs/lunlfd.jpg" alt>
      <ul class="jm-l">
        <li v-for="item in linav" :key="item.id" @click="handlenav(item)">
          <p class="spp" v-show="actobj.id ==item.id">{{item.label}}</p>
          <img :src="item.imgUrl" alt>
          <p>{{item.text}}</p>
        </li>
      </ul>
      <div class="mo-erjmu">
        <span class="span1">财富前景</span>
        <span class="span2">WEALTH PROSPECTS</span>
      </div>
      <div class="caifu">
        <img class="sawe" src="../../assets/imgs/cf1.png" alt>
        <p class="cfp1" v-for="(item,index) in plist" :key="index">{{item}}</p>
        <img class="sawe2" src="../../assets/imgs/cf2.png" alt>
        <p>中国是世界上最大的母婴市场，目前的市场规模已经超过20000亿，儿童教育市场不低于1320亿，其中儿童书籍市场达到300亿以上的规模。</p>
      </div>
      <div class="mo-erjmu hezuo">
        <span class="span1">合作条件</span>
        <span class="span2">COOPERATION CONDITIONS</span>
      </div>
      <div class="hezuoli">
        <p v-for="(item,index) in smarr" :key="index">
          <i>0{{index+1}}</i>
          <img src="../../assets/imgs/cmdian.png" alt>
          <span>{{item}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "join",
  data() {
    return {
      actobj: {},
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
      ],
      plist: [
        "中央动真格！从小学到高中即将面临8大变革！中考、高考强势变革引导学生从幼升小开始广泛阅读、见多识广，增加考试的范围、广度而不是难度。没有阅读能力和理解能力的孩子，连卷子都会做不完，考试将吃大亏！",
        "国家全面开放二孩政策正在经历婴儿潮，互联网引领人类社会发展新变革，创造了人类生活新空间，启智灵读书吧即将引爆新一轮“淘金潮”，商机无限，财富无限。",
        "我国儿童教育产业的整体规模已达1320亿元，据统计儿童支出占家庭总支出的30%-50%，44%的家庭每月用于养育子女方面的费用在500元至1000元之间，教育支出已成为仅次于食物的第二大日常开支。",
        "我国儿童教育兴旺发达，它面对的是我国2.4亿1-15岁的少年儿童， 还有每年近2000万的新生儿。这是一个庞大的市场，它需要一个庞大的产业。预计儿童教育市场规模年均复合增长率将超过15%。"
      ],
      smarr: [
        "对儿童教育产品有信心、爱心，耐心高度认可启智灵的运作模式；",
        "遵守公司的合作政策和统一规范要求，遵守合约规定，服从管理；",
        "拥有足够的创业精神和持之以恒的毅力，具备一定的资金实力；",
        "书吧地理位置、面积的大小均符合启智灵读书吧的定位标准；",
        "按照启智灵标准形象装修，提高店铺人流量，提高品牌美誉度；",
        "具备一定的语言沟通能力与技巧语，懂得基本的电脑操作知识；",
        "有一定的学习能力，管理能力，能够很好的掌控一家书吧的运作；",
        "愿意与公司共同成长，干一行爱一行，全心全意投入到事业中；"
      ]
    };
  },
  methods: {
    handlenav(obj) {
      this.actobj = obj;
    }
  },
  created() {}
};
</script>
<style lang="less">
.join {
  .span2 {
    left: -30px;
  }
  .lunlfd,
  .sawe {
    width: 100%;
  }
  .jm-l {
    height: 220px;
    li {
      width: 19%;
      margin-right: 1%;
      float: left;
      font-size: 14px;
      position: relative;
      .spp {
        width: 100%;
        position: absolute;
        top: 70px;
        height: 30px;
        background: #e67817;
        text-align: center;
        color: #fff;
      }
      img {
        width: 100%;
        height: 100px;
      }
    }
    li:last-child {
      margin: none;
    }
  }
  .caifu {
    .sawe {
      width: 150px;
      height: 150px;
      margin-right: 15px;
      float: left;
    }
    .sawe2 {
      width: 150px;
      height: 150px;
      margin-left: 15px;
      float: right;
    }
    p {
      width: auto;
      text-indent: 2em;
    }
  }
  .hezuo {
    margin-top: 50px;
  }
  .hezuoli {
    p {
      text-align: left;
      margin: 15px 0;
      line-height: 30px;
      font-size: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      position: relative;
      i {
        font-size: 50px;
        font-family: "BlendaScript";
        font-weight: 400;
        color: rgba(230, 120, 23, 1);
        line-height: 24px;
        text-shadow: 5px 2px 6px #f7d6b9;
      }
      img {
        position: relative;
        top: -13px;
        width: 15%;
        margin: 0 13px;
      }
      span {
        position: relative;
        top: -13px;
      }
    }
  }
}
</style>

