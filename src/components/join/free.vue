
<template>
  <div class="free">
    <img class="topimg" src="../../assets/imgs/mfjm.jpg" alt>
    <div class="homebox">
      <p class="flyb">留言板</p>
      <div class="tlyan">
        <img class="timg1" src="../../assets/imgs/douhao2.jpg" alt>
        <p>您，创造财富人生从这里开始！——启智灵 免费加盟，免费培训，免管理费；您还等什么？会赚钱，不如会省钱；赚钱是毛利，省钱是净利；加盟，成本的节约等于空前赚取第一笔财您一次性投资终身受益，加盟即获价值万元的增值服务助您轻松创业，马到成功。财富属于您有慧眼识金的能力，成功属于您的英明决策；立即留言，改变命运；填写个人资料索取精美画册和财富指南；</p>
        <img class="timg2" src="../../assets/imgs/douhao2.jpg" alt>
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
    </div>
    <img class="xiezi2" src="../../assets/imgs/xiezi2.jpg" alt>
    <div class="homebox">
      <img class="fdsawewq" src="../../assets/imgs/fdsawewq.jpg" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "free",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        vercode:"",
        address: "",
        province: "",
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
      ]
    };
  },
  methods: {
    getvercode(){
      console.log("getvercode")
    },
    subForm() {
      console.log(this.form);
    },
    reset() {
      for (let key in this.form) {
        this.form[key] = "";
      }
      console.log(this.form);
    },
    getCouponSelected() {
      //获取选中的优惠券
      console.log(this.couponSelected);
    }
  }
};
</script>

<style lang="less">
.free {
  .flyb {
    text-align: center;
    font-size: 53px;
    font-family: "MicrosoftYaHeiLight";
    font-weight: 400;
    color: #fc8709;
    padding: 21px 0;
  }
  .tlyan {
    position: relative;
    img {
      width: 32px;
      height: 26px;
    }
    .timg2 {
      float: right;
      transform: rotate(180deg);
    }
    p {
      font-size: 12px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: #fc8709;
      text-indent: 2em;
    }
  }
  .xiezi2 {
    width: 100%;
    height: 265px;
  }
  .fdsawewq {
    width: 100%;
  }
  .mo-hform {
    border: none;
    padding: 65px 0;
    select {
      width: 100px;
    }
    .phone{
      input{
         width:280px
      }
    }
    input, textarea{
      width: 400px;
    }
  }
}
</style>

