
<template>
  <div class="writedetails">
    <img class="topimg" src="../../assets/imgs/writeimg.jpg" alt>
    <div class="homebox wribox">
      <p class="title">{{data.title}}</p>
      <p class="tenum">
        <span>发布时间：{{data.date}}</span>
        <span>浏览量:{{data.readnum}}</span>
      </p>
      <hr>
      <img class="bookimg" :src="data.imgurl" alt="缩略图">
      <p class="zwen" v-for="(item,index) in data.txt" :key="index">{{item}}</p>
      <hr>
      <p class="onext" @click="handonext(1)">上一篇：{{data.on}}</p>
      <p class="onext next" @click="handonext(1)">上一篇：{{data.next}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "writedetails",
  data() {
    return {
      data: {
        title: "作文名称《作好文章，阅读起点》",
        date: "2018-06-14",
        readnum: "1895",
        imgurl: require("../../assets/imgs/bdeimg.jpg"),
        txt: [
          "中新社北京3月7日电 (记者 李晓喻)根据政府工作报告，中国今年赤字率拟按2.8%安排，低于此前市场预期的3%。中国财政部部长刘昆7日在北京表示，这一安排是积极的、稳妥的。",
          "3月7日，十三届全国人大二次会议新闻中心举行记者会，邀请财政部部长刘昆，副部长程丽华、刘伟就“财税改革和财政工作”相关问题回答中外记者提问。图为刘昆回答记者提问。中新社记者 何蓬磊 摄",
          "十三届全国人大二次会议当天举行记者会。刘昆在记者会上称，适当提高财政赤字率，是党中央、国务院综合考虑经济社会发展需要和财政可持续发展因素作出的重大决策部署。一方面，强化逆周期调节，促进经济平稳较快发展；另一方面，也与更大规模减税降费、有效降低企业负担、激发市场主体活力相适应。",
          "至于今年中国拟安排赤字率为何只比去年高0.2个百分点，刘昆表示，除了适当提高赤字率，中央财政还增加了特定国有金融机构和央企上缴利润，地方财政也将多渠道盘活各类资金和资产。这部分筹措的资金“可以让我们不用过高地提高赤字率”。",
          "他指出，从赤字规模看，今年中国赤字规模比去年增加了3800亿元人民币，已经体现了积极财政政策“加力提效”的要求；从赤字率看，2016、2017年都是2.9%，2018年是2.6%，今年预计是2.8%，始终控制在国际通用的3%控制线以内，和世界主要经济体相比并不高。“这个安排综合考虑了财政收支、专项债券等因素，也为今后宏观调控留出了政策空间。”",
          "刘昆称，今后将继续平衡好稳增长和防风险的关系，在加大减税降费力度和着力保障重点支出的同时，保持财政的可持续发展。(完)"
        ],
        on: "小学生作文《第一篇》",
        next: "中学生作文《第二篇》"
      }
    };
  },
  methods: {
    handonext(val) {
      if (val == 1) {
        console.log("上一篇");
      } else if (val == 2) {
        console.log("下一篇");
      }
    }
  }
};
</script>

<style lang="less">
.writedetails {
  .wribox {
    padding-top: 50px;
    .title {
      text-align: center;
      font-size: 18px;
      font-family: "MicrosoftYaHei-Bold";
      font-weight: bold;
      color: #333;
      line-height: 35px;
    }
    .tenum {
      text-align: center;
      font-size: 16px;
      font-family: "MicrosoftYaHei-Bold";
      color: #333;
      line-height: 35px;
    }
    hr {
      margin: 30px 0;
    }
    .bookimg {
      width: 100%;
      margin-bottom: 30px;
    }
    .zwen {
      text-indent: 2em;
      line-height: 40px;
    }
    .onext {
      line-height: 40px;
    }
    .next {
      margin-bottom: 50px;
    }
  }
}
</style>

