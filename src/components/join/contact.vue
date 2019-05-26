<template>
  <div class="contact">
    <img class="topimg" src="../../assets/imgs/mfjm.jpg" alt>
    <div class="homebox">
      <div class="contitle">
        <p>请您认真填写加盟申请表，可优先审核获取加盟资格，</p>
        <p>第一时间与财富顾问取得联系！</p>
      </div>
      <p class="setitle">
        <span></span>基本资料
      </p>
      <div class="form form1">
        <p>
          <span class="ftlss">姓名</span>
          <input type="text" name="name" value v-model="form1.name" placeholder="请输入您的姓名">
        </p>
        <p>
          <span class="ftlss">性别</span>
          <mt-radio title v-model="form1.sex" :options="sexarr" @change="checksex"></mt-radio>
        </p>
        <p>
          <span class="ftlss">出生年月</span>
          <input type="text" name="birthday" value v-model="form1.birthday" placeholder="请输入出生年月">
          <br>
          <span class="suill">*格式 例:2019.01.01</span>
        </p>
        <p>
          <span class="ftlss">文化学历</span>
          <input type="text" name="education" value v-model="form1.education" placeholder="请输入您的学历">
        </p>
        <p>
          <span class="ftlss">电话</span>
          <input type="number" name="phone" value v-model="form1.phone" placeholder="请输入电话">
          <br>
          <span class="suill">*格式 例:027-00000000</span>
        </p>
        <p>
          <span class="ftlss">手机号码</span>
          <input type="number" name="mobile" value v-model="form1.mobile" placeholder="请输入手机号码">
          <button>发送验证码</button>
        </p>
        <p>
          <span class="ftlss">验证码</span>
          <input type="text" name="vercode" value v-model="form1.vercode" placeholder="请输入验证码">
        </p>
        <p>
          <span class="ftlss">微信</span>
          <input type="text" name="wxnum" value v-model="form1.wxnum" placeholder="请输入微信">
        </p>
        <p>
          <span class="ftlss">QQ</span>
          <input type="number" name="qqnum" value v-model="form1.qqnum" placeholder="请输入QQ">
        </p>
        <p>
          <span class="ftlss">邮编</span>
          <input type="text" name="email" value v-model="form1.email" placeholder="请输入邮编">
        </p>
        <p>
          <span class="ftlss">邮件地址</span>
          <input type="text" name="address" value v-model="form1.address" placeholder="请输入邮件地址">
        </p>
        <p>
          <span class="ftlss">身份证</span>
          <span class="btn btn-success fileinput-button">
            <img :src="sfzimg.imgurl1" alt>
            <input type="file">
          </span>
          <span class="btn btn-success fileinput-button">
            <img :src="sfzimg.imgurl2" alt>
            <input type="file">
          </span>
        </p>
      </div>
      <p class="setitle">
        <span></span>申请区域
      </p>
      <div class="form form2">
        <p>
          <span class="ftlss">经营地址</span>
          <input type="text" name="address" value v-model="form2.address" placeholder="请输入街道地址和门牌号">
        </p>
        <p>
          <span class="ftlss">门店情况</span>
          <mt-radio title v-model="form2.situation" :options="situationarr" @change="checksit"></mt-radio>
        </p>
        <div>
          <p>
            <span class="ftlss">门店面积</span>
            <mt-radio title v-model="form2.area" :options="areaarr" @change="checkarea"></mt-radio>
          </p>
          <br>
        </div>
        <p>
          <span class="ftlss">门店租期</span>
          <input type="number" name="rent" value v-model="form2.rent" placeholder="请输入租金">元/年
        </p>
        <p>
          <span class="ftlss">区域人口</span>
          <input
            type="number"
            name="population"
            value
            v-model="form2.population"
            placeholder="请输入人口数量"
          >
        </p>
        <p>
          <span class="ftlss">周边环境</span>
          <input type="text" name="milieu" value v-mode2="form1.milieu" placeholder="请输入周边环境">
        </p>
        <p>
          <span class="ftlss">区域档次</span>
          <mt-radio title v-model="form2.grade" :options="gradearr"></mt-radio>
        </p>
        <div class="jibie">
          <p>
            <span class="ftlss">申请级别</span>
            <mt-radio title v-model="form2.level" :options="levelarr"></mt-radio>
          </p>
          <br>
        </div>
        <p>
          <span class="ftlss">资金来源</span>
          <mt-radio title v-model="form2.funds" :options="fundsarr"></mt-radio>
        </p>
      </div>

      <p class="setitle">
        <span></span>投资调查
      </p>
      <mt-checklist v-model="form3" :options="form3arr" @change="checkon"></mt-checklist>

      <p class="setitle">
        <span></span>您加盟的优势述说
      </p>
      <mt-field type="textarea" rows="4" v-modal="introduction"></mt-field>
      <p class="mtbutton">
        <mt-button type="default">提交</mt-button>
        <mt-button>重置</mt-button>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Checklist } from "mint-ui";
import { Radio } from "mint-ui";
import { Button } from "mint-ui";

Vue.component(Button.name, Button);
Vue.component(Radio.name, Radio);
Vue.component(Checklist.name, Checklist);
export default {
  name: "contact",
  data() {
    return {
      sfzimg: {
        imgurl1: require("../../assets/imgs/1558847560(1).jpg"),
        imgurl2: require("../../assets/imgs/1558847709(1).jpg")
      },
      form1: {
        name: "",
        sex: "",
        birthday: "",
        education: "",
        phone: "",
        mobile: "",
        wxnum: "",
        qqnum: "",
        vercode: "",
        address: ""
      },
      form2: {
        address: "",
        situation: "",
        area: "",
        rent: "",
        population: "",
        milieu: "",
        grade: "",
        level: "",
        funds: ""
      },
      form3: [],
      introduction: "",
      situationarr: [
        {
          value: 1,
          label: "自有"
        },
        {
          value: 2,
          label: "已租赁"
        },
        {
          value: 3,
          label: "待租赁"
        }
      ],
      sexarr: [
        {
          value: 1,
          label: "男"
        },
        {
          value: 2,
          label: "女"
        }
      ],
      areaarr: [
        {
          value: 1,
          label: "三星级110—120m"
        },
        {
          value: 2,
          label: "四星级130-140m"
        },
        {
          value: 3,
          label: "五星级140-150m"
        }
      ],
      gradearr: [
        {
          value: 1,
          label: "高"
        },
        {
          value: 2,
          label: "中"
        },
        {
          value: 3,
          label: "低"
        }
      ],
      levelarr: [
        {
          value: 1,
          label: "省会级代理"
        },
        {
          value: 2,
          label: "地级市代理"
        },
        {
          value: 3,
          label: "特许加盟店"
        },
        {
          value: 4,
          label: "联营合作店"
        },
        {
          value: 5,
          label: "形象样板店"
        }
      ],
      fundsarr: [
        {
          value: 1,
          label: "自有资金"
        },
        {
          value: 2,
          label: "借款资金"
        },
        {
          value: 3,
          label: "银行贷款"
        }
      ],
      form3arr: [
        {
           value: "1",
          label: "对儿童教育产品有信心、有爱心、有耐心高度认可启智灵品牌及动作模式;"
        },{
          value: 2,
          label: "遵守公司的合作政策和统一规范要求，遵守合约规定，接受品牌经营管理；"
        },{
          value: 3,
          label: "拥有足够的创业精神，具备一定的资金实力；"
        },{
          value: 4,
          label: "商铺位置、面积均符合公司文教产品定位标准；"
        },{
          value: 5,
          label: "按照启智灵标准形象统一装修，提高店铺人流量，提高品牌美誉度；"
        },{
          value: 6,
          label: "具备一定的沟通能力与语言交流，懂得基本的电脑操作知识；"
        },{
          value: 7,
          label: "有一定的学习能力，管理能力，能够很好的掌控一家店铺的动作；"
        },{
          value: 8,
          label: "愿意与公司一起成长，热爱教育产品，全心全意投入到事业中；"
        },
      ]
    };
  },
  methods: {
    //选择性别
    checksex() {
      console.log(this.value, this.form1.sex);
    },
    //选择门店情况
    checksit() {
      console.log(this.value, this.form1.situation);
    },
    //选择面积
    checkarea() {
      console.log(this.value, this.form2.area);
    },
    //多选 -- 投资调查
    checkon(){
      console.log(this.value,this.form3)
    }
  }
};
</script>
<style lang="less">
.contact {
  .homebox {
    padding: 0 30px;
  }
  .contitle {
    text-align: center;
    font-size: 23px;
    font-family: "MicrosoftYaHei";
    font-weight: 400;
    color: #fc8709;
    padding: 58px 0 0 0;
    p:nth-child(1) {
      margin-bottom: 10px;
    }
  }
  .setitle {
    color: #fc8709;
    text-align: left;
    padding: 34px 0 26px 0;
    span {
      display: block;
      width: 12px;
      height: 12px;
      background: #fc8709;
      float: left;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
  .form {
    color: #999;
    p {
      width: 100%;
      min-height: 40px;
      line-height: 40px;
      padding: 10px 0;
      display: block;
      .ftlss {
        display: block;
        float: left;
        width: 130px;
        text-align: center;
      }
      input[type="text"] {
        width: 50%;
      }

      .fileinput-button {
        position: relative;
        display: inline-block;
        overflow: hidden;
        width: 212px;
        height: 132px;
      }
      .fileinput-button img {
        width: 212px;
        height: 132px;
      }
      .fileinput-button input {
        position: absolute;
        right: 0px;
        top: 0px;
        opacity: 0;
        -ms-filter: "alpha(opacity=0)";
        font-size: 200px;
      }
      .suill {
        color: #fc8709;
      }
    }
  }
  .mtbutton {
    margin: 30px 0 50px 0;
    text-align: center;
    .mint-button {
      padding: 10px 45px;
      margin: 0 10px;
      height: 70px;
    }
    .mint-button:nth-child(1) {
      background: #fc8709;
      color: #fff;
    }
    .mint-button:nth-child(2) {
      background: #999;
      color: #000;
    }
  }

  .mint-field-core {
    border: 2px solid #ddd;
    border-radius: 3px;
    width: 100%;
  }
  .mint-radiolist {
    .mint-cell {
      min-height: 0px;
    }
    a {
      width: 25%;
      float: left;
    }
  }
  .jibie {
    a {
      width: 14%;
    }
  }
}
</style>
