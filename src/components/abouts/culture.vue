<template>
  <div class="culture">
    <img class="topimg" src="../../assets/imgs/aboutusimg1.jpg" alt>
    <div class="homebox">
      <div class="mo-erjmu">
        <span class="span1">启智灵文化</span>
        <span class="span2">QIZHILING CULTURE</span>
      </div>
      <ul class="mo-culture">
        <li v-for="item in act3li" :key="item.id">
          <img :src="item.imgurl" alt>
          <div class="curi">
            <p class="title">{{item.title}}</p>
            <p class="txt" v-for="(items,index) in item.arr" :key="index">{{items}}</p>
          </div>
        </li>
      </ul>
      <div class="mo-erjmu">
        <span class="span1">启智灵品牌</span>
        <span class="span2">QIZHILING BRAND</span>
      </div>
      <ul class="pingpaibox">
        <img class="logo1img" src="../../assets/imgs/logo1.jpg" alt>
        <li v-for="item in pingpailist" :key="item.id">
          <p>{{item.title}}</p>
          <p v-for="(items,index) in item.label" :key="index">{{items}}</p>
        </li>
      </ul>
      <div class="mo-erjmu">
        <span class="span1">启智灵故事</span>
        <span class="span2">QI ZHILING STORY</span>
      </div>
      <div class="gushi">
          <img src="../../assets/imgs/xiezi.jpg" alt="">
            <p v-for="(item,index) in gushilist" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "culture",
  data() {
    return {
      act3li: [
        {
          id: 1,
          title: "企业愿景",
          arr: ["启智灵，打造中国儿童", "读书吧第一品牌 ;"],
          imgurl: require("../../assets/imgs/wehua1.jpg")
        },
        {
          id: 2,
          title: "核心价值观 拷贝",
          arr: ["专注教育，传播知识", "践行公益，科学育儿"],
          imgurl: require("../../assets/imgs/wehua2.jpg")
        },
        {
          id: 3,
          title: "企业精神",
          arr: ["技术赢得客户", "诚信创造价值"],
          imgurl: require("../../assets/imgs/wehua3.jpg")
        },
        {
          id: 4,
          title: "服务理念",
          arr: ["追求客户满意一百", "是我们应尽的责任"],
          imgurl: require("../../assets/imgs/wehua4.jpg")
        },
        {
          id: 5,
          title: "企业口号",
          arr: ["家有小神童", "全靠启智灵"],
          imgurl: require("../../assets/imgs/wehua5.jpg")
        },
        {
          id: 6,
          title: "营销理念",
          arr: ["不断推出优质新品，", "满足学子需求，是我们永恒的目标"],
          imgurl: require("../../assets/imgs/wehua6.jpg")
        },
        {
          id: 7,
          title: "企业使命",
          arr: [
            "为向华夏子孙传授早教育儿知识而努力拼搏；",
            "力使华人后代在知识领域成为世界的领航人； ;"
          ],
          imgurl: require("../../assets/imgs/wehua7.jpg")
        },
        {
          id: 8,
          title: "经营理念",
          arr: ["传播教育知识，满足读者", "欲望，承担社会责任 ;"],
          imgurl: require("../../assets/imgs/wehua8.jpg")
        },
        {
          id: 9,
          title: "工作理念",
          arr: ["为客户创造价值，为员工实现", "梦想，带领大家共同致富！ ;"],
          imgurl: require("../../assets/imgs/wehua9.jpg")
        },
        {
          id: 10,
          title: "",
          arr: [],
          imgurl: ""
        }
      ],
      pingpailist: [
        {
          id: 1,
          title: "启，开也。",
          label: [
            "启蒙，是生命的开始，是人生最关键的一步，在一个人什么都不懂的时候，他的生命就是一张白纸，启蒙就是这张纸上的内容，画成什么就是什么，再也无法抹去。启蒙对于一个人的成长至关重要，良好的开端等于成功的一半"
          ]
        },
        {
          id: 2,
          title: "智，智力、智慧、智商",
          label: [
            "在儒家的道德规范体系中，‘智’是最基本、最重要的目的之一，也是儒家理想人格的重要品质之一。孔子也把‘智’与‘仁’、‘勇’两个道德规范并举，定位为君子之道，即所谓‘知（智）者不惑，仁者不忧，勇者不惧’",
            "在儒家思想史上，孟子第一次以“仁义礼智”四德并提。他从行为的节制和形式的修饰、道德的认知和意志的保障等意义上确立了礼与智在道德体系中的不可或缺的位置"
          ]
        },
        {
          id: 3,
          title: "灵，有“有效用”",
          label: [
            "“聪明”等意思，而在这里，我们想要表达的是“有效用”,即很灵验的意思",
            "启智灵，顾名思义，就是“启迪智慧，我很行！”"
          ]
        },
        {
          id: 4,
          title: "LOGO含义",
          label: [
            "启智灵logo由卡通形象和“启智灵”三个字组成，宝宝拇指上翘的动作表达着“我很棒”的意思，也预示着启智灵教具可以让孩子在玩的过程中启迪智慧、启迪人生",
            "“启迪智慧，我很行！”就是启智灵logo所象征的意义"
          ]
        }
      ],
      gushilist: [
        "民国时期，一位视读书如生命的学者，终日潜心研究“国学”，有时吃饭也不出门，准备馒头和辣椒、酱油等佐料，摆在书桌上，饿了便啃馒头，边吃边看书，有一次，看书入迷，竟把馒头伸进了砚台、朱砂盒，啃了多时，涂成花脸，一位朋友来访，捧腹大笑，他还不知道他笑什么？就是黄侃（湖北蕲春人）国学大师，中国著名语言文字浓",
        "陆宗达（北京师范大学教授）拜黄侃为师。见过先生，黄侃一字未讲，只给他一本没有标点的《说文解字》，说：“点上标点，点完见我”。陆宗达依教而行。",
        "再见老师时，黄侃翻了翻那卷了边的书，说：“再买一本，重新点上”。",
        "第三次见老师时陆宗达送上点点画画的《说文解字》。黄侃点点头，说：“再去买一本点上”。",
        "事后，陆宗达又将一本翻得很破旧的《说文解字》拿来，说：“老师，是不是还要再读点一本？我已经准备好了。”",
        "黄侃说：标点三次，《说文解字》你熟读于心，文字之学，已得大半，不用再点。你在阅读中积累了丰富的词汇，以后做学问再也不用翻书了。黄侃将书放在桌上，这才对陆宗达计了一句：“读书可得金矿山，读书可得启智灵”。因此，启智灵应运而生。"
      ],
    };
  }
};
</script>

<style lang="less">
.culture {
  .mo-culture {
    height: 1000px;
    li {
      width: 49%;
      float: left;
      margin-bottom: 20px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .curi {
        width: 60%;
        float: right;
      }
      .title {
        font-size: 14px;
        color: #e67817;
      }
      .txt {
        color: #999;
        font-size: 12px;
      }
    }
    li:nth-child(2n-1) {
      margin-right: 2%;
    }
  }
  .pingpaibox {
    .logo1img {
      width: 150px;
      height: 150px;
      float: right;
      padding-left: 10px;
    }
    li {
        margin-bottom: 20px;
      p {
        width: auto;
        text-indent: 2em;
        color: #999;
      }
      p:nth-child(1) {
        font-weight: bold;
        color: #000;
      }
    }
  }
  .gushi{
      img{
          width: 150px;
          height: 150px;
          padding-right: 10px;
          float: left;
      }
      p{
          width: auto;
          color: #999;
          text-indent: 2em;
      }
      p:last-child{
          margin-bottom: 50px;
      }
  }
}
</style>
