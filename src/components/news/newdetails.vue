
<template>
  <div class="newdetails">
    <img class="topimg" src="../../assets/imgs/aboutusimg1.jpg" alt>
    <div class="homebox wribox">
      <p class="title">{{data.title}}</p>
      <p class="tenum">
        <span>发布时间：{{data.date}}</span>
        <span>浏览量:{{data.readnum}}</span>
      </p>
      <hr>
      <img class="bookimg" :src="data.imgurl1" alt="缩略图">
      <img class="bookimg" :src="data.imgurl2" alt="缩略图">
      <p class="zwen" v-for="(item,index) in data.txt" :key="index">{{item}}</p>
      <hr>
      <p class="onext" @click="handonext(1)">上一篇：{{data.on}}</p>
      <p class="onext next" @click="handonext(1)">上一篇：{{data.next}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "newdetails",
  data() {
    return {
      data: {
        title: "中芯国际主动申请在纽交所退市 但依然可在场外市场交易",
        date: "2019-02-24",
        readnum: "645",
        imgurl1: require("../../assets/imgs/bdeimg.jpg"),
        imgurl2: require("../../assets/imgs/bdeimg.jpg"),
        txt: [
            "中芯国际主动申请在纽交所退市，董事会已批准。",
            "中芯国际表示，已于2019年5月24日（美国东部时间）通知纽约证券交易所。",
            "关于退市原因，公告称，此次主动申请从纽约证券交易所退市有多种原因，其中包括：与全球交易量相比，中芯国际ADS交易量相对有限；以及维持ADS在纽约证券交易所上市将带来较重的行政负担和较高的成本等。",
            "公告称，在将其美国预托证券股份从纽约证券交易所退市后，中芯国际仍然致力于为其投资者服务，并有意将其美国预托收据计划维持为一级计划，这将使美国投资者和中芯 国际美国预托证券股份的现有持有人能够继续持有中芯国际美国预托证券股份，和在美国场外交易市场进行交易。",
            "消息公布后，美股盘前中芯国际股价跌超4%。"
          ],
        on: "昨日新闻",
        next: "明日新闻"
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
.newdetails {
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
      width: 49%;
      margin-bottom: 30px;
    }
    .bookimg:nth-child(1){
        margin-right: 2%;
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


    