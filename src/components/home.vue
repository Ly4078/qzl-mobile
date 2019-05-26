<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in banners" :key="item.id">
        <img :src="item.imgurl" class="img">
      </mt-swipe-item>
    </mt-swipe>
    <div class="homebox">
      <div class="boxtitle">
        <div class="btsk"></div>
        <div class="title">阅读作文</div>
        <div class="more" @click="seemore(1)">查看更多+</div>
      </div>
      <div class="childtitle">
        <span>小考满分作文</span>
        <div class="add">+</div>
      </div>
      <ul class="write">
        <li v-for="(index) in 2" :key="index" @click="handwerite">
          <img v-show="index%2==0" :src="writelist.imgurl1" alt>
          <img v-show="index%2!=0" :src="writelist.imgurl2" alt>
          <div class="lir">
            <p>{{writelist.title}}</p>
            <p>
              {{writelist.label}}
              <span>[查看更多]</span>
            </p>
          </div>
        </li>
      </ul>
      <div class="childtitle">
        <span>中考满分作文</span>
        <div class="add">+</div>
      </div>
      <ul class="write">
        <li v-for="(index) in 2" :key="index" @click="handwerite(item)">
          <img v-show="index%2==0" :src="writelist2.imgurl1" alt>
          <img v-show="index%2!=0" :src="writelist2.imgurl2" alt>
          <div class="lir">
            <p>{{writelist.title}}</p>
            <p>
              {{writelist.label}}
              <span>[查看更多]</span>
            </p>
          </div>
        </li>
      </ul>

      <div class="boxtitle">
        <div class="btsk"></div>
        <div class="title">新闻中心</div>
        <div class="more" @click="seemore(2)">查看更多+</div>
      </div>
      <div class="mo-homebox">
        <ul>
          <li
            v-for="item in newslist"
            :key="item.id"
            @click="handlenew(item)"
            @mouseenter="enter(item,1)"
            @mouseleave="leave()"
            :class="actliobj.id==item.id?'actli':''"
          >
            <img :src="item.imgurl" alt>
            <p class="lip1">{{item.title}}</p>
            <p class="lip2">{{item.time}}</p>
            <p class="lip3">{{item.txt}}</p>
            <div class="hDetails">
              查看详情
              <i>></i>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="homebox mo-morepic">
      <div class="boxtitle">
        <div class="btsk"></div>
        <div class="title">儿童书吧</div>
        <div class="more">查看更多+</div>
      </div>
      <div class="pic">
        <div class="picbox">
          <div
            v-for="(item,index) in imgboxs"
            :key="index"
            :class="index%2==0?'picimg odd':'picimg even'"
          >
            <img :src="item" :key="index" alt>
          </div>
        </div>
        <div class="picbox">
          <div
            v-for="(item,index) in imgboxs2"
            :key="index"
            :class="index%2==0?'picimg even':'picimg odd'"
          >
            <img :src="item" :key="index" alt>
          </div>
        </div>
      </div>
    </div>

    <div class="homebox">
      <ul class="mo-home-box">
        <li
          v-for="item in box4list"
          :key="item.id"
          @click="enter(item,2)"
          @mouseenter="enter(item,2)"
          @mouseleave="leave()"
        >
          <div class="motai" v-show="actliobj2.id ==item.id">
            <img class="bimgi1" :src="item.img2url" alt>
          </div>
          <p class="title">{{item.title}}</p>
          <img class="b4bjimg" :src="item.imgbj" alt>
          <img class="bimgi1" :src="item.img1url" alt>
          <div class="b4txt">
            <p v-for="(items,index) in item.txt" :key="index">{{items}}</p>
          </div>
        </li>
      </ul>

      <ul class="mo-whys">
        <li v-for="(item,index) in whys" :key="index">
          <!-- <div v-if="index%2==1" class="whyli"> -->
          <div class="whyli">
            <img :src="item.imgurl" alt class="whyimg">
            <div class="ptxt">
              <p>{{item.label}}</p>
              <p v-for="(items,indexs) in item.lis" :key="indexs">{{items}}</p>
            </div>
          </div>
          <!-- <div v-if="index%2==0" class="whyli"></div> -->
        </li>
      </ul>
    </div>

    <div class="whyjoin">
      <div class="wsbox"></div>
      <p class="joinus">为什么要加盟我们？</p>
      <hr>
    </div>

    <div class="homebox">
      <ul class="mo-pinpai">
        <li
          v-for="item in box6list"
          :key="item.id"
          @click="enter(item,3)"
          @mouseenter="enter(item,3)"
          @mouseleave="leave()"
          class="pinpaili"
        >
          <div :class="actliobj3.id == item.id?'b6img actb6img':'b6img'">
            <img v-show="actliobj3.id != item.id" :src="item.img1" alt>
            <img v-show="actliobj3.id == item.id" :src="item.img2" alt>
          </div>
          <div class="b6txt">
            <p class="tit">{{item.t1}}</p>
            <p v-for="(items,index) in item.t2" :key="index">{{items}}</p>
          </div>
        </li>
      </ul>
      <div class="wxbox">
        <div class="wxitem" v-for="item in box6wxlist" :key="item.id">
          <img :src="item.imgurl" alt>
          <p class="wxtitle">{{item.title}}</p>
          <p v-for="(items,index) in item.txt" :key="index">{{items}}</p>
        </div>
      </div>
    </div>

    <div class="mo-liuyb">
      <span class="lyb">留言板</span>
      <br>
      <img src="../assets/imgs/douhao.png" alt class="lybimg1">
      <p>财富属于您有慧眼识金的能力，</p>
      <p>成功属于您的英明决策；</p>
      <p>立即留言，改变命运；</p>
      <p>填写个人资料索取精美画册和财富指南；</p>
      <img src="../assets/imgs/douhao.png" alt class="lybimg2">
    </div>

    <div class="mo-hform">
      <p>
        *您的姓名：
        <input type="text" name="name" value v-model="form.name">
      </p>
      <p class="phone">
        *手机号码：
        <input type="number" name="phone" value v-model="form.phone">
        <span @click="getvercode">获取验证码</span>
      </p>
      <p>
        *验证码：
        <input type="number" name="vercode" value v-model="form.vercode">
      </p>
      <p>
        *电子邮件：
        <input type="text" name="email" value v-model="form.email">
      </p>
      <p>
        *所在地区：
        <select name="province" v-model="form.province" @change="getCouponSelected">
          <option :value="coupon.id" v-for="coupon in couponList" :key="coupon.id">{{coupon.name}}</option>
        </select>省
        <select name="city" v-model="form.city" @change="getCouponSelected">
          <option :value="coupon.id" v-for="coupon in couponList" :key="coupon.id">{{coupon.name}}</option>
        </select>市
        <select name="county" v-model="form.county" @change="getCouponSelected">
          <option :value="coupon.id" v-for="coupon in couponList" :key="coupon.id">{{coupon.name}}</option>
        </select>县
      </p>
      <p>
        *联系地址：
        <input type="text" name="address" value v-model="form.address">
      </p>
      <p>
        *留言内容：
        <textarea rows="2" cols="23" v-model="form.remke"></textarea>
      </p>
      <button class="submit" @click="subForm">提交</button>
      <button class="reset" @click="reset">重置</button>
    </div>
    <img class="box7rimg" src="../assets/imgs/box7rimg.jpg" alt>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

import { Field } from "mint-ui";

Vue.component(Field.name, Field);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: "home",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        address: "",
        province: "",
        vercode: "",
        city: "",
        county: "",
        remke: ""
      },
      couponList: [
        {
          id: 1,
          name: "北京"
        },
        {
          id: 2,
          name: "上海"
        }
      ],
      actliobj: {},
      actliobj2: {},
      actliobj3: {},
      banners: [
        {
          id: 1,
          imgurl: require("../assets/imgs/banner.jpg")
        },
        {
          id: 2,
          imgurl: require("../assets/imgs/banner.jpg")
        },
        {
          id: 3,
          imgurl: require("../assets/imgs/banner.jpg")
        },
        {
          id: 4,
          imgurl: require("../assets/imgs/banner.jpg")
        }
      ],
      writelist: {
        id: 1,
        title: "溪口一日游初中生作文",
        label:
          "哗啦啦，呼啦啦……天上下起了小雨，而我们的心里却是一阵愁：今天是我们去春游的日子，会不会要因为下雨推...",
        imgurl1: require("../assets/imgs/hzw1.jpg"),
        imgurl2: require("../assets/imgs/hzw2.jpg")
      },
      writelist2: {
        id: 1,
        title: "溪口一日游初中生作文",
        label:
          "哗啦啦，呼啦啦……天上下起了小雨，而我们的心里却是一阵愁：今天是我们去春游的日子，会不会要因为下雨推...",
        imgurl1: require("../assets/imgs/hzw3.jpg"),
        imgurl2: require("../assets/imgs/hzw4.jpg")
      },
      newslist: [
        {
          id: 1,
          title: "创立十年致力于儿童艺术创新教育",
          time: "2019.10.10",
          imgurl: require("../assets/imgs/hzw5.jpg"),
          txt:
            "启智灵，打造互联网+儿童作文辅导互动式教学平台！ 让学生家长借助平台互动学习"
        },
        {
          id: 2,
          title: "创立十年致力于儿童艺术创新教育",
          time: "2019.10.10",
          imgurl: require("../assets/imgs/hzw6.jpg"),
          txt:
            "启智灵，打造互联网+儿童作文辅导互动式教学平台！ 让学生家长借助平台互动学习"
        },
        {
          id: 3,
          title: "创立十年致力于儿童艺术创新教育",
          time: "2019.10.10",
          imgurl: require("../assets/imgs/hzw7.jpg"),
          txt:
            "启智灵，打造互联网+儿童作文辅导互动式教学平台！ 让学生家长借助平台互动学习"
        }
      ],
      imgboxs: [
        require("../assets/imgs/hzw8.jpg"),
        require("../assets/imgs/hzw9.jpg"),
        require("../assets/imgs/hzw10.jpg"),
        require("../assets/imgs/hzw11.jpg")
      ],
      imgboxs2: [
        require("../assets/imgs/hzw12.jpg"),
        require("../assets/imgs/hzw13.jpg"),
        require("../assets/imgs/hzw14.jpg"),
        require("../assets/imgs/hzw15.jpg")
      ],
      box4list: [
        {
          id: 1,
          title: "八大优势",
          txt: ["0加盟费", " 0保证金,0管理费 ", "投资万，做百万生意"],
          imgbj: require("../assets/imgs//sy-iconbj1.jpg"),
          img1url: require("../assets/imgs//sy-icon1.png"),
          img2url: require("../assets/imgs//sy-icon12.jpg")
        },
        {
          id: 2,
          title: "知名品牌",
          txt: ["16年成熟经营模式", "造就百名成功店长", "有数千万孩子受益"],
          imgbj: require("../assets/imgs//sy-iconbj41.jpg"),
          img2url: require("../assets/imgs//sy-icon2.png"),
          img1url: require("../assets/imgs//sy-icon21.png")
        },
        {
          id: 3,
          title: "加盟扶持",
          txt: ["您仅需门店", "傻瓜式复制经营", "贴心保姆式全程服务"],
          imgbj: require("../assets/imgs//sy-iconbj1.jpg"),
          img1url: require("../assets/imgs//sy-icon31.png"),
          img2url: require("../assets/imgs//sy-icon32.jpg")
        },
        {
          id: 4,
          title: "钱途无量",
          txt: ["2胎生育政策", "1.5亿儿童市场", "每年递增2000万婴儿"],
          imgbj: require("../assets/imgs//sy-iconbj41.jpg"),
          img1url: require("../assets/imgs//sy-icon41.png"),
          img2url: require("../assets/imgs//sy-icon42.jpg")
        }
      ],
      whys: [
        {
          id: 1,
          label: "孩子为什么要阅读？",
          imgurl: require("../assets/imgs/b51.jpg"),
          lis: [
            "培养阅读能力，培养阅读兴趣",
            "不断提高孩子对题目的理解能力和分析能力",
            "不断提高孩子的演讲口才和语言表达能力",
            "不断让孩子积累成语和词汇,并提高作文写作水平"
          ]
        },
        {
          id: 2,
          label: "孩子为什么作文差？",
          imgurl: require("../assets/imgs/b52.jpg"),
          lis: [
            "孩子阅读经典名著古诗词背诵太少，名言名句积累太少",
            "孩子组词造句和成语词汇积累太少，语言词汇积累太少",
            "苏东坡说：厚积而薄发，博观而约取，只有积累的多，才能在写文章时涌现出好多可用的材料"
          ]
        },
        {
          id: 3,
          label: "孩子为什么成绩差？",
          imgurl: require("../assets/imgs/b53.jpg"),
          lis: [
            "孩子不爱阅读，没有阅读习惯，对阅读没有兴趣；",
            "没有不爱阅读的孩子 只有不培养孩子阅读习惯的父母；",
            "没有天生成绩差的孩子，只有不懂得教育的父母；",
            "没有阅读能力和理解能力的孩子，根本不理解题目的意思无从下笔，考试必吃大亏"
          ]
        }
      ],
      box6list: [
        {
          id: 1,
          t1: "品牌支持",
          t2: ["优秀的品牌形象，", "良好的商业信誉， ", "积极进取的企业文化。"],
          img1: require("../assets/imgs/wimg1.jpg"),
          img2: require("../assets/imgs/wimg12.png")
        },
        {
          id: 2,
          t1: "选址支持",
          t2: ["上门选址，店面、", "货柜设计，提供3D", "效果图和平面施工图。"],
          img1: require("../assets/imgs/wimg2.jpg"),
          img2: require("../assets/imgs/wimg22.png")
        },
        {
          id: 3,
          t1: "产品支持",
          t2: ["不断推出优质新品， ", "万本书籍一站式供货", " 满足客户需求。"],
          img1: require("../assets/imgs/wimg33.jpg"),
          img2: require("../assets/imgs/wimg3.png")
        },
        {
          id: 4,
          t1: "品牌支持",
          t2: [
            " 完善的营销管理平台，",
            "6年成熟经营管理模式",
            "助合作伙伴轻松开店；"
          ],
          img1: require("../assets/imgs/wimg4.jpg"),
          img2: require("../assets/imgs/wimg44.png")
        },
        {
          id: 5,
          t1: "设备系统",
          t2: ["完善的收银系统和", " 经营设备，订货系统,", "为客户省心省时。"],
          img1: require("../assets/imgs/wimg5.jpg"),
          img2: require("../assets/imgs/wimg55.png")
        },
        {
          id: 6,
          t1: "管理支持",
          t2: [
            "16年成功运营经验，",
            "造就数百名成功店长， ",
            "成功的开业指导方案；"
          ],
          img1: require("../assets/imgs/wimg7.jpg"),
          img2: require("../assets/imgs/wimg77.png")
        },
        {
          id: 7,
          t1: "培训支持",
          t2: [
            "免费店长培训、新员工",
            "培训、管理运营、所有 ",
            "系统操作等全面培训。"
          ],
          img1: require("../assets/imgs/wimg6.jpg"),
          img2: require("../assets/imgs/wimg66.png")
        },
        {
          id: 8,
          t1: "平台支持",
          t2: [
            "让客户实现线上线下",
            "结合的o2o模式经营。 ",
            "开一家店等于N家店面。"
          ],
          img1: require("../assets/imgs/wimg8.png"),
          img2: require("../assets/imgs/wimg88.png")
        }
      ],
      box6wxlist: [
        {
          id: 1,
          title: "我们的核心竞争力？",
          txt: [
            "启智灵，打造互联网+儿童作文辅导互动式教学平台！让学生家长借助平台互动学习，",
            " 并可线上购，线下取；为合作伙伴着想降低了投资成本，开一家书吧等于N家店面，",
            "又实现收入培增，让客户觉得物超所值；让学生家长享受线下免费阅读，",
            "同时享有作文教学指导，为家长学生省时省心，提高服务质量，",
            "提升家长的满意度，让家长付一分钱获得二分货。"
          ],
          imgurl: require("../assets/imgs/wximg1.jpg")
        },
        {
          id: 2,
          title: "我们为什么要加盟？",
          txt: [
            " 将好的教育理念，好的教育模式传承千秋万代，将好品牌，好项目，好商机，",
            "用来辅助更多的市民发家致富，从中分得一杯羹。",
            " 企业做大做强靠的是团队合作的力量，打造凝聚力的团队是成功的关键，",
            "从而快速抢占市场份额。提高品牌知名度，树立品牌形象和美誉度；",
            "为实现“中国梦”添砖加瓦，为国家培育更优秀的人才，奉献自己的微薄力量。"
          ],
          imgurl: require("../assets/imgs/wximg2.jpg")
        }
      ]
    };
  },
  methods: {
    seemore(val) {
      console.log("val:", val);
      if (val == 1) {
        this.$router.push("/write01");
      } else if (val == 2) {
        this.$router.push("/Newlist");
      }
    },
    //获取验证码
    getvercode() {
      console.log("getvercode");
    },
    //提交表单
    subForm() {
      console.log(this.form);
    },
    //重置表单
    reset() {
      for (let key in this.form) {
        this.form[key] = "";
      }
      console.log(this.form);
    },
    getCouponSelected() {
      //获取选中的优惠券
      console.log(this.couponSelected);
    },
    handwerite(obj) {
      console.log(obj);
      this.$router.push("/writedetails");
    },
    handlenew(obj) {
      console.log(obj);
      this.actliobj = obj;
      this.$router.push("/newdetails");
    },
    enter(obj, val) {
      if (val == 1) {
        this.actliobj = obj;
        this.actliobjs = {};
        this.actliobj3 = {};
      } else if (val == 2) {
        this.actliobj2 = obj;
        this.actliobj = {};
        this.actliobj3 = {};
      } else if (val == 3) {
        this.actliobj3 = obj;
        this.actliobj = {};
        this.actliobjs = {};
      }
    },
    leave() {
      this.actliobj = {};
      this.actliobjs = {};
      this.actliobj3 = {};
    }
  },
  computed: {}
};
</script>
<style lang="less">
.home {
  .mint-swipe {
    width: 100%;
    height: 495px;
    overflow: hidden !important;
    position: relative;
    top: -30px;
    .mint-swipe-item img {
      height: 495px;
      overflow: hidden !important;
    }
  }
  .box7rimg {
    width: 683px;
    height: 529px;
    float: right;
    position: relative;
    margin-top: -550px;
    z-index: 3;
    margin-bottom: 50px;
  }
  .mo-hform {
    width: 555px;
    height: 540px;
    position: relative;
    left: 21px;
    top: -10px;
    border: 3px solid #e67817;
    z-index: 5;
    padding-left: 30px;
    p {
      padding: 10px 0;
      select {
        width: 70px;
        max-width: 70px;
      }
    }
    .phone {
      span {
        color: red;
      }
      input {
        width: 30%;
      }
    }
    .reset,
    .submit {
      padding: 5px 30px;
      color: #333;
      margin-bottom: 20px;
    }
    .submit {
      background: #e67817;
      color: #fff;
      border: 1px solid #e67817;
    }
    .reset{
      background: #999;
      color: #000;
    }
  }
  .mo-whys {
    width: 100%;
    height: 570px;
    li {
      height: 200px;
      .whyli {
        .whyimg {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }
        .ptxt {
          float: right;
          width: 420px;
          font-size: 14px;
          padding-top: 10px;

          p {
            &:nth-child(1) {
              font-size: 22px;
              color: #e67817;
              margin-bottom: 10px;
            }
          }
        }
      }
      &:nth-child(2n) {
        .ptxt {
          float: left;
          text-align: right;
          margin-right: 20px;
        }
      }
    }
  }
  .mo-pinpai {
    width: 80%;
    height: 750px;
    float: left;
    .pinpaili {
      width: 49%;
      height: 200px;
      float: left;
      .b6img {
        float: left;
        width:80px;
        height:80px;
        margin-top: 20px;
        border-radius: 50%;
        border: 1px solid #e67817;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .actb6img {
        background: #e67817;
      }
      .b6txt {
        margin-left: 100px;
        text-align: left;
        p {
          font-size: 12px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: #999;
          line-height: 26px;
          &:nth-child(1) {
            color: #e67817;
            font-size: 18px;
            font-size: 50%;
            font-family: "MicrosoftYaHei";
            font-weight: 400;
            line-height: 40px;
          }
        }
      }
      &:nth-child(2n-1) {
        margin-right: 1%;
      }
    }
  }

  .lir {
    p:nth-child(2) {
      display: -webkit-box; /*作为弹性伸缩盒子模型显示*/
      -webkit-line-clamp: 3; /*显示的行数；如果要设置2行加...则设置为2*/
      overflow: hidden;
      text-overflow: ellipsis; /* 溢出用省略号*/
      /*! autoprefixer: off */
      -webkit-box-orient: vertical; /*伸缩盒子的子元素排列：从上到下*/
      /* autoprefixer: on */
    }
  }
}
</style>
