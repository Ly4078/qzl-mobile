
<template>
  <div class="aboutus">
    <img class="topimg" src="../../assets/imgs/aboutusimg1.jpg" alt>
    <div class="homebox">
      <div class="mo-erjmu">
        <span class="span1">启智灵简介</span>
        <span class="span2">INTRODUCTION TO QI ZHILING</span>
      </div>
      <img class="nuigm" src="../../assets/imgs/93b97.png" alt>
      <div class="attxt">
        <p>启智灵读书吧，二十一世纪的朝阳产业。它是一种无价的产业，其无朝代、无国界、无种族区别、无地域性、季节性、性别性、无高潮期也无衰退期的特点使得教育产品蕴含了巨大的商机，这是无法用价钱来衡量的。儿童教育已被提高到国家战略发展的高度，启智灵因此而诞生。</p>
      </div>
      <p>武汉启智灵教育科技有限公司，于2003年成立中国武汉教育之都，主要从事儿童文化产品的研究机构，教育机构，传播机构，专门面向0-15岁少年儿童与家长提供优质的服务。让小朋友们在父母的陪伴下免费阅读各类书籍：少儿图书，低幼启蒙，绘本故事，社会百科，国学启蒙，作文教辅，成人读物，百科全书等书籍，并同时享有作文辅导互动式教学指导。</p>
    </div>
    <div class="homebox">
      <ul class="mo-ablist1">
        <li
          v-for="item in box2list"
          :key="item.id"
          @mouseenter="enter(item,1)"
          @mouseleave="leave()"
        >
          <div class="b2motai" v-show="item.id == actobj1.id">
            <div class="bmtbox">
              <img :src="item.imgurl" alt>
              <p>{{item.title}}</p>
              <hr noshade="noshade">
              <p class="pttsaf">{{item.label}}</p>
            </div>
          </div>
          <img class="dimg" :src="item.imgurl" alt>
          <p>{{item.txt}}</p>
        </li>
      </ul>
      <ul class="mo-ablist2">
        <li
          v-for="item in box3list"
          :key="item.id"
          @mouseenter="enter(item,2)"
          @mouseleave="leave()"
        >
          <img v-show="actobj2.id !=item.id" :src="item.imgurl" alt>
          <div v-show="actobj2.id ==item.id" class="bimg">{{item.ti}}</div>
          <div class="bd3iv">
            <p>{{item.title}}</p>
            <p>{{item.label}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="homebox">
      <div class="mo-erjmu">
        <span class="span1">启智灵荣誉</span>
        <span class="span2">Qi Zhiling Honor</span>
      </div>
      <img class="abx" src="../../assets/imgs/abx.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutus",
  data() {
    return {
      actobj1: {},
      actobj2: {},
      box2list: [
        {
          id: 1,
          title: "阅读",
          label: "为孩子营造一种浓浓的阅读氛围",
          txt:
            "启智灵,为孩子营造一种浓浓的阅读氛围，为孩子提供分享阅读心情的空间，让孩子们把书籍当成好朋友，让孩子们成长在因阅读而快乐，因阅读而精彩，因阅读而美好，让每一个家庭的生活因阅读而幸福！",
          imgurl: require("../../assets/imgs/box2i1.jpg")
        },
        {
          id: 2,
          title: "阅读",
          label: "为孩子营造一种浓浓的阅读氛围",
          txt:
            "启智灵，经过16年成功经营不断创新、不断超越自己，努力保持企业稳定协调发展的局面，制定了企业长期发展的市场策略。拥有一个合情，合理，合法的价格体系。以获取微薄利润为目标，稳中求胜持续发展儿童文化产业，与客户共创双赢。",
          imgurl: require("../../assets/imgs/box2i2.jpg")
        },
        {
          id: 3,
          title: "阅读",
          label: "为孩子营造一种浓浓的阅读氛围",
          txt:
            "启启智灵，独特的优势在于其高价值品牌效应结合低成本投入，让客户一分钱二分货，最大化降低客户投资成本，使客户利益最大化。我们更看重与加盟商在未来发展中共同成长，共同实现梦想，低投入不代表低价值，恰恰相反，低投入是为了未来的高价值奠定坚实的基础。",
          imgurl: require("../../assets/imgs/box2i3.jpg")
        },
        {
          id: 4,
          title: "阅读",
          label: "为孩子营造一种浓浓的阅读氛围",
          txt:
            "启智灵，客户见证确实物超所值，一个高价值的产业并未获得高额的利润，仅取平民价钱，用微量利益赢得更多客户的青睐，抢占了更大的市场，这是我们的发展战略，也是为国家文化事业的繁荣，为国民文化素质提高做出更大贡献！",
          imgurl: require("../../assets/imgs/box2i4.jpg")
        }
      ],
      box3list: [
        {
          id: 1,
          imgurl: require("../../assets/imgs/usb1.jpg"),
          title: "我们的目标",
          ti: "目标",
          label:
            "努力打造专业的文化产品精品，做最优秀的自己，树立做强做大的企业精髓。"
        },
        {
          id: 2,
          imgurl: require("../../assets/imgs/usb4.jpg"),
          title: "我们的责任",
          ti: "责任",
          label:
            "客户卖不出去是我们的责任;客户不赚钱是我们的责任;客户不满意是我们的责任。"
        },
        {
          id: 3,
          imgurl: require("../../assets/imgs/usb3.jpg"),
          title: "我们的任务",
          ti: "任务",
          label: "不仅仅是自己成功上市，而是造就合作伙伴成为百万、千万富翁。"
        },
        {
          id: 4,
          imgurl: require("../../assets/imgs/usb4.jpg"),
          title: "我们的产品",
          ti: "产品",
          label:
            "旨在帮助更多的合作伙伴高效快速走向致富道路；让少年儿童与家长在启智灵免费阅读，并同时享有线上购书线下取货和作文辅导教学的服务。 "
        }
      ]
    };
  },
  methods: {
    enter(obj, val) {
      if (val == 1) {
        this.actobj1 = obj;
      } else if (val == 2) {
        this.actobj2 = obj;
      }
    },
    leave() {
      this.actobj1 = {};
      this.actobj2 = {};
    }
  }
};
</script>

<style lang="less">
.aboutus {
 

  .attxt {
    width: 64%;
    font-size: 6px;
    font-size: 62.5%;
    p {
      text-indent: 2em;
    }
  }
  .nuigm {
    width: 220px;
    float: right;
  }
  .abx{
    width: 100%;
  }
  
}
</style>
