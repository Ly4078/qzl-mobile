<template>
  <div class="hello">
    <header>
      <img src="../assets/imgs/logo.png" alt>
      <ul class="headerul" @click="handtul">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <transition
        enter-active-class="animated bounceIn"
        leave-active-class="animated bounceOutRight"
      >
        <ul class="headnav" v-if="isnav">
          <li v-for="item in navlist" :key="item.id" @click="handnav(item)">{{item.label}}</li>
        </ul>
      </transition>
      <transition
        enter-active-class="animated bounceIn"
        leave-active-class="animated bounceOutRight"
      >
        <ul class="ischildnav" v-if="ischildnav">
          <li v-for="item in actchildren" :key="item.id" @click="handchild(item)">{{item.label}}</li>
        </ul>
      </transition>
    </header>
    <div>
      <router-view></router-view>
      <div class="totop" v-if="istotop">
        <img
          v-for="item in totopimgs"
          :key="item.id"
          :src="item.imgurl"
          alt
          @click="handletopimg(item)"
        >
      </div>
    </div>
    <footer>
      <img src="../assets/imgs/1558630159(1).jpg" alt>
    </footer>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      istotop: false,
      isnav: false,
      ischildnav: false,
      actchildren: [],
      navlist: [
        {
          id: 1,
          label: "首页",
          url: "/home"
        },
        {
          id: 2,
          label: "关于我们",
          url: "/aboutus",
          children: [
            {
              id: 21,
              label: "启智灵简介",
              url: "/aboutus"
            },
            {
              id: 22,
              label: "启智灵文化",
              url: "/culture"
            },
            {
              id: 23,
              label: "启智灵新闻",
              url: "/Newlist"
            }
          ]
        },
        {
          id: 3,
          label: "去读书吧",
          url: "/read",
          children: [
            {
              id: 31,
              label: "婴儿读物",
              url: "/read"
            },
            {
              id: 32,
              label: "早教读物",
              url: "/read"
            },
            {
              id: 33,
              label: "经典读物",
              url: "/read"
            },
            {
              id: 34,
              label: "少儿读物",
              url: "/read"
            }
          ]
        },
        {
          id: 4,
          label: "儿童书吧",
          url: "/childBook",
          children: [
            {
              id: 41,
              label: "幼儿启蒙",
              url: "/childBook"
            },
            {
              id: 42,
              label: "儿童绘本",
              url: "/childBook"
            },
            {
              id: 43,
              label: "中小学阅读",
              url: "/childBook"
            },
            {
              id: 44,
              label: "智力开发",
              url: "/childBook"
            },
            {
              id: 45,
              label: "励志成长",
              url: "/childBook"
            }
          ]
        },
        {
          id: 5,
          label: "课外阅读",
          url: "/extracurricular",
          children: [
            {
              id: 51,
              label: "儿童文字",
              url: "/extracurricular"
            },
            {
              id: 52,
              label: "教辅教材",
              url: "/extracurricular"
            },
            {
              id: 53,
              label: "科谱百科",
              url: "/extracurricular"
            },
            {
              id: 54,
              label: "家庭教育",
              url: "/extracurricular"
            }
          ]
        },
        {
          id: 6,
          label: "加盟指南",
          url: "/join",
          children: [
            {
              id: 61,
              label: "加盟优势",
              url: "/join"
            },
            {
              id: 62,
              label: "加盟问答",
              url: "/joinask"
            },
            {
              id: 63,
              label: "加盟扶持",
              url: "/support"
            }
          ]
        },
        {
          id: 7,
          label: "免费加盟",
          url: "/free",
          children: [
            {
              id: 71,
              label: "加盟申请",
              url: "/free"
            },
            {
              id: 72,
              label: "联系我们",
              url: "/contact"
            }
          ]
        }
      ],
      totopimgs: [
        {
          id: 1,
          imgurl: require("../assets/imgs/qrcode.jpg")
        },
        {
          id: 2,
          imgurl: require("../assets/imgs/qq-icon.jpg")
        },
        {
          id: 3,
          imgurl: require("../assets/imgs/1558767893(1).jpg")
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    //实时获取滑动高度
    handleScroll() {
      const _this = this;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 1000) {
        this.istotop = true;
      } else {
        this.istotop = false;
      }
    },
    // 浮动菜单
    handletopimg(obj) {
      if (obj.id == 1) {
      } else if (obj.id == 2) {
        //唤起QQ聊天
        const u = navigator.userAgent;
        const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isiOS) {
          if (u.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
            window.open(
              "http://wpa.qq.com/msgrd?v=3&uin=5238082986&site=qq&menu=yes"
            );
          } else {
            window.open(
              "mqqwpa://im/chat?chat_type=wpa&uin=5238082986&version=1&src_type=web&web_src=oicqzone.com"
            );
          }
        } else {
          if (u.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
            window.open(
              "http://wpa.qq.com/msgrd?v=3&uin=5238082986&site=qq&menu=yes"
            );
          } else {
            window.open(
              "mqqwpa://im/chat?chat_type=wpa&uin=5238082986&version=1&src_type=web&web_src=oicqzone.com"
            );
          }
        }
      } else if (obj.id == 3) {
        //动画回到顶部
        let scrollToTop = window.setInterval(function() {
          const pos = window.pageYOffset;
          if (pos > 0) {
            window.scrollTo(0, pos - 20);
          } else {
            window.clearInterval(scrollToTop);
          }
        }, 5);

        //回到顶部，无动画
        // window.scrollTo(0,0);
      }
    },
    // 显示一级菜单
    handtul() {
      this.isnav = !this.isnav;
       this.ischildnav =false;
    },
    //一级菜单选择
    handnav(obj) {
      if (obj.children && obj.children.length > 0) {
        this.ischildnav =true;
        this.actchildren = obj.children;
      } else {
        this.isnav = !this.isnav;
        this.$router.push(obj.url);
      }
    },
    // 二级菜单选择
    handchild(obj) {
      this.$router.push(obj.url);
      this.isnav = !this.isnav;
      this.ischildnav = !this.ischildnav;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
header {
  height: 120px;
  padding: 12px 39px 12px 80px;
  text-align: left;
  box-shadow: 0px 0px 16px 0px rgba(230, 120, 23, 0.69);
  position: relative;
  z-index: 5;
  img {
    width: 195px;
    height: 95px;
  }
  .headerul {
    float: right;
    height: 100%;
    width: 60px;
    li {
      width: 100%;
      height: 10px;
      background: #e67817;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  .headnav {
    position: absolute;
    width: 150px;
    right: 0;
    z-index: 10;
    background: rgba(146, 140, 135, 0.9);
    li {
      font-size: 20px;
      width: 100%;
      text-align: center;
      color: #e67817;
      margin: 10px 0;
      padding: 10px 0;
      cursor: pointer;
    }
  }
  .ischildnav {
    position: absolute;
    width: 150px;
    right: 150px;
    top: 115px;
    z-index: 10;
    background: rgba(230, 208, 88, 0.9);
    li {
      font-size: 20px;
      width: 100%;
      text-align: center;
      color: #fff;
      margin: 10px 0;
      padding: 10px 0;
      cursor: pointer;
    }
  }
}
footer {
  img {
    width: 100%;
  }
}
</style>
