
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
          @click="handlelist(item,1)"
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
          @click="handlelist(item,2)"
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
      <div class="rongyu">
        <img class="abx" src="../../assets/imgs/33310.jpg" alt>
        <p class="ryp" v-for="(item,index) in abstxt" :key="index">{{item}}</p>
        <img class="abxs" src="../../assets/imgs/QQ图片20190307133254.png" alt>
        <p class="ryp" v-for="(item,index) in abstxt2" :key="index">{{item}}</p>
      </div>
      <div class="guiesa">
        <ul>
          <li v-for="item in box32list" :key="item.id">
            <img :src="item.imgurl" alt>
            <p class="zsp1">{{item.t1}}</p>
            <p class="zsp2">{{item.t2}}</p>
            <p class="zsp3">{{item.t3}}</p>
            <p class="zsp4">{{item.t4}}</p>
          </li>
        </ul>
      </div>
      <div class="zshfd">
        <img class="zsss" src="../../assets/imgs/258.jpg" alt="">
        <p>启智灵商标注册证</p>
        <img class="logo" src="../../assets/imgs/logo.png" alt="">
      </div>
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
      ],
      abstxt: [
        "2012年8月1日上午，武汉市工商行政管理局武昌分局积玉桥工商所所长亲临武汉启智灵教育科技有限公司，颁发2011年度武汉市“守合同重信用企业”荣誉证书和牌匾。",
        "“守重企业”认定活动是由武汉市工商局、武汉市合同信用促进会和武汉企业信用建设促进会联合开展的，并经过武汉市基层工商部门初审推荐、第三方测评征信、市工商局审查和媒体公示等多重程序，最终确定“守重企业”名单。自2009年起，启智灵已连续三年获得武汉市“守重企业”荣誉称号。",
        "我国《合同法》将诚实守信作为合同订立和履行的基本原则。武汉启智灵自成立以来，一直认真贯彻并执行《合同法》和其它相关法律、法规及条例，守合同，重信用。",
        "启智灵一直认真配合合同管理机关及相关部门，做好合同管理工作，主动接受工商行政管理机关、业务主管等部门的指导和监督。结合企业实际情况，公司还建立了合适的经济合同管理制度，进行合同规范化管理，并配备具有一定合同认识、责任心强的工作人员负责合同的订立、履行和管理工作。公司还注意培养所有员工的法制观念，树立员工的重信守约意识，把重信守约贯穿于合作、服务的整个环节。"
      ],
      abstxt2: [
        "启智灵将再接再厉，不断完善合同管理制度，继续坚持诚实守信的原则，做“守重”企业，塑“守重”品牌！"
      ],
      box32list: [
        {
          id: 1,
          imgurl: require("../../assets/imgs/guowei2.jpg"),
          t1: "武汉启智灵教育科技有限公司",
          t2: "工商局注册号：9142010674831988XU",
          t3: "武汉市工商行政管理局备案企业信息",
          t4:
            "武汉启智灵教育科技有限公司，成立于中国武汉教育之都。2003在武汉市工商行政管理局武昌分局成功注册启智灵读书馆品牌。"
        },
        {
          id: 1,
          imgurl: require("../../assets/imgs/guowei.jpg"),
          t1: "武汉启智灵教育科技有限公司",
          t2: "特许备案号： 0420101301000023",
          t3: "中国商务部特许经营备案企业",
          t4:
            "武汉启智灵教育科技有限公司，首批经中华人民共和国商务部商业特许连锁经营备案的企业。"
        },
        {
          id: 1,
          imgurl: require("../../assets/imgs/guowei3.jpg"),
          t1: ".",
          t2: ".",
          t3: "中央电视台尊贵客户",
          t4:
            "2011启智灵品牌以良好的品牌形象，良好的商业信用，良好的服务口碑，被授予中央电视台尊贵客户荣誉称号。"
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
    handlelist(obj, val) {
      if (val == 1) {
        this.actobj1 = obj;
        this.actobj2 = {};
      } else if (val == 2) {
        this.actobj2 = obj;
        this.actobj1 = {};
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
  .span2 {
    left: -50px;
  }
  .mo-ablist1 {
    padding: 40px 0;
    font-size: 12px;
    height: 600px;
    li {
      padding: 2.5%;
      width: 45%;
      float: left;
      .b2motai {
        position: absolute;
        width: 38%;
        height: 180px;
        background: #000;
        opacity: 0.6;
        z-index: 10;
        .bmtbox {
          width: 90%;
          height: 150px;
          border: 2px solid#fff;
          margin-top: 5%;
          margin-left: 4%;
          overflow: hidden;
          img {
            opacity: 0.6;
            width: 100%;
            height: 160px;
          }
          p {
            text-align: center;
            color: #fff;
            position: relative;
            top: -150px;
            text-align: center;
            text-indent: 0;
            &:nth-child(1) {
              font-size: 30px;
              line-height: 40px;
            }
            &:nth-child(2) {
              font-size: 18px;
              line-height: 26px;
            }
          }
          hr {
            width: 60%;
            color: red;
            position: relative;
            top: -120px;
          }
        }
      }
      .dimg {
        width: 100%;
        height: 180px;
      }
    }
  }
  .mo-ablist2 {
    padding: 50px 0 40px 0;
    height: 210px;

    li {
      width: 49%;
      float: left;
      height: 100px;
      margin-bottom: 14px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .bimg {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        line-height: 100px;
        text-align: center;
        background: #e67817;
        float: left;
        color: #fff;
        font-size: 20px;
      }
      .bd3iv {
        width: 60%;
        float: right;
        p {
          &:nth-child(1) {
            font-weight: bold;
            line-height: 30px;
            color: #000;
          }
        }
        p:nth-child(2) {
          font-size: 14px;
        }
      }
      &:nth-child(2n-1) {
        margin-right: 1%;
      }
    }
  }
  .attxt {
    width: 64%;
    font-size: 20px;
    p {
      text-indent: 2em;
    }
  }
  .nuigm {
    width: 220px;
    float: right;
  }
  .rongyu {
    .abx {
      width: 150px;
      float: left;
      margin-right: 20px;
      margin-bottom: 20px;
    }
    .abxs {
      width: 300px;
      float: right;
    }
    .ryp {
      text-indent: 2em;
      width: auto;
    }
  }
  .guiesa {
    width: 100%;
    overflow: hidden;
    padding: 50px 0;
    ul {
      width: 100%;
      li {
        width: 32%;
        float: left;
        margin-right: 1%;
        text-align: left;
        img{
          width: 100%;
          margin-right: 1%;
        }
        p {
          position: relative;
          top: -40px;
          font-size: 12px;
          text-align: center;
        }
        .zsp1,
        .zsp2 {
          color: #fff;
        }
        .zsp3 {
          font-size: 16px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: #333;
          padding: 21px 0 17px 0;
          text-align: center;
        }
        .zsp4 {
          text-indent: 2em;
          font-size: 14px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: #999;
          line-height: 24px;
        }
      }
      li:last-child {
        margin-right: none;
      }
    }
  }
  .zshfd{
    width: 100%;
    padding-bottom: 50px;
    position: relative;
    .zsss{
      width: 100%;
    }
    p{
      position: absolute;
      text-align: center;
      top: 260px;
      font-size: 14px;
      width: 100%;
    }
    .logo{
      position: absolute;
      width: 160px;
      top:180px;
      left: 240px;
    }
  }
}
</style>
