<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      screenWidth: document.body.clientWidth
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth);
          console.log(window.location.host);
          if (that.screenWidth > 900) {
            // let newUrl = window.location.host + "/qizhiling/mobile/index.html";
            // window.location.replace(newUrl);
           
          }
          that.timer = false;
        }, 400);
      }
    }
  },
  methods: {
    getispc() {
      let ISPC = false,
        isAndroid = false,
        u = navigator.userAgent,
        isiOS = false;
      if (
        /Android|webOS|iPhone|iPod|iPod|iPad|Windows Phone|SymbianOS|BlackBerry/i.test(
          u
        )
      ) {
        isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
        isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        ISPC = false;
        localStorage.setItem("ISPC", ISPC);
        this.$store.commit("setISPC", ISPC);
        this.$store.commit("setAndroid", isAndroid);
        this.$store.commit("setiOS", isiOS);
      } else {
        ISPC = true;
        localStorage.setItem("ISPC", ISPC);
        this.$store.commit("setISPC", ISPC);
      }
    }
  },
  created() {
    //   alert(this.screenWidth)
    // this.getispc();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  font-size: 22px;
}

.lir p:nth-child(2) {
  display: -webkit-box;
  /*作为弹性伸缩盒子模型显示*/

  -webkit-line-clamp: 3;
  /*显示的行数；如果要设置2行加...则设置为2*/

  overflow: hidden;
  text-overflow: ellipsis;
  /* 溢出用省略号*/

  /*! autoprefixer: off */

  -webkit-box-orient: vertical;
  /*伸缩盒子的子元素排列：从上到下*/

  /* autoprefixer: on */
}
</style>
