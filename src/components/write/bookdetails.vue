<template>
  <div class="bookdetails">
    <img class="topimg" src="../../assets/imgs/qudushuba.jpg" alt>
    <div class="homebox">
      <p>
        <span v-for="item in nave" :key="item.id" @click="handlenave(item)">{{item.label}}</span>
      </p>
      <div class="bookname">
        <img class="bokimg1" src="../../assets/imgs/bokimg1.jpg" alt>
        <div class="brsda">
          <p v-for="(item,index) in plist" :key="index">{{item}}</p>
          <p>
            <span>作 者</span>：陈素娟+李群峰+王涛
          </p>
          <p>
            <img src="../../assets/imgs/dmzhi.jpg" alt>
            订购指数：5986
          </p>
        </div>
      </div>
      <div class="btbox">
        <div class="txtbox">
          产品特色
          <span></span>
        </div>
      </div>
      <img class="bdimg" src="../../assets/imgs/bdimg.jpg" alt>
      <div class="btbox">
        <div class="txtbox">
          内容简介
          <span></span>
        </div>
      </div>
      <p class="txt">{{jianjie}}</p>
      <div class="btbox">
        <div class="txtbox">
          作者简介
          <span></span>
        </div>
      </div>
      <p class="txt">{{zzjianjie}}</p>
      <div class="btbox">
        <div class="txtbox">
          目 录
          <span></span>
        </div>
      </div>
      <p class="ptxt" v-for="(item,index) in txts" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookdetails",
  data() {
    return {
      nave: [
        {
          id: 1,
          label: "首页>",
          url: "/"
        },
        {
          id: 2,
          label: "去读书吧>",
          url: "/read"
        },
        {
          id: 3,
          label: "婴儿读物>",
          url: "/read"
        },
        {
          id: 4,
          label: "百年童话典藏版",
          url: ""
        }
      ],
      plist: [
        "魔鬼物理学1-3（套装3册）",
        "英国DK专为学龄前儿童设计的百科全书，那些孩子们应该知道的重要的事，都在这里！英国《少年杂志》设计奖ZUI佳童书类银奖！扫描封底二维码，免费音频同步听，解决科普难讲的大难题！"
      ],
      jianjie:
        "《DK幼儿百科全书——那些重要的事》是中国大百科全书出版社与英国DK公司共同策划的选题，是一本针对3-6岁学龄前儿童的综合百科。书的内容围绕儿童身边重要的事物叙述，一共分为六个章节，分别是：有关地球的重要知识，有关地理的重要知识，有关动物的重要知识，有关人类的重要知识，与我相关的重要知识，其他的重要知识。这本书的编辑思路旨在使孩子认识世界，了解身边事物的来龙去脉，培养健康的生活和学习习惯",
      zzjianjie:
        "英国DK公司建立于1974年。他们的愿景就是创作既有视觉冲击力又包含信息丰富的图书，使读者能够理解每一个主题。DK图书被认为是从出生到年老不断学习的生活指南。",
      txts: [
        "有关我们地球的重要知识",
        "10 我们在太空中的位置",
        "12 我们的地球",
        "14 太空在哪儿？",
        "16 夜幕下的天空",
        "18 海底世界",
        "20 山脉",
        "22 激烈的火山爆发",
        "24 地震",
        "26 干旱的沙漠",
        "28 雨林",
        "30 神奇的水资源",
        "32 它是怎么长大的？",
        "34 季节的变化 "
      ]
    };
  },
  methods: {
    handlenave(obj) {
      if (obj.url) {
        this.$router.push(obj.url);
      }
    }
  }
};
</script>
<style lang="less">
.bookdetails {
  .bdimg {
    width: 100%;
  }
  .bookname {
    height: 200px;
    .bokimg1 {
      width: 200px;
      float: left;
    }
    .brsda {
      float: right;
      width: 65%;
      p {
        font-size: 14px;
        span {
          font-weight: bold;
        }
        img {
          width: 15px;
        }
      }
      p:nth-child(1) {
        font-weight: bold;
        padding: 15px 0;
      }
      p:nth-child(3),
      p:nth-child(4) {
        margin-top: 15px;
      }
    }
  }
  .btbox {
    margin: 30px 0 21px 0;
    border-bottom: 2px solid #fc8709;
    position: relative;
    line-height: 22px;
    overflow: hidden;
    color: #fff;
    font-size: 20px;
    .txtbox {
      width: 158px;
      height: 22px;
      line-height: 28px;
      padding-left: 10px;
      background: #fc8709;
    }
    span {
      width: 0;
      height: 0;
      border-width: 22px 0 22px 22px;
      border-style: solid;
      border-color: transparent transparent transparent #fc8709; /*透明 透明 透明 灰*/
      margin: 22px auto;
      position: relative;
      right: -63px;
      top: 18px;
      transform: rotate(135deg);
    }
  }
  .ptxt:last-child{
    margin-bottom: 50px;
  }
}
</style>
