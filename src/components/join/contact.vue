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

      <p class="setitle">
        <span></span>申请区域
      </p>
      <div class="form form1">
        <p>
          <span class="ftlss">经营地址</span>
          <input type="text" name="name" value v-model="form1.address" placeholder="请输入街道地址和门牌号">
        </p>
        <p>
          <span class="ftlss">门店租期</span>
          <mt-radio title v-model="value" :options="['自有', '已租赁', '待租赁']"></mt-radio>
        </p>
        <div>
          <p>
            <span class="ftlss">门店面积</span>
            <mt-radio
              title
              v-model="value"
              :options="['三星级110—120m', '四星级130-140m', '五星级140-150m']"
            ></mt-radio>
          </p>
          <br>
        </div>
        <p>
          <span class="ftlss">门店租期</span>
          <input type="text" name="name" value v-model="form1.address" placeholder="请输入租金">元/年
        </p>
        <p>
          <span class="ftlss">区域人口</span>
          <input type="text" name="name" value v-model="form1.address" placeholder="请输入人口数量">
        </p>
        <p>
          <span class="ftlss">周边环境</span>
          <input type="text" name="name" value v-model="form1.address" placeholder="请输入周边环境">
        </p>
        <p>
          <span class="ftlss">区域档次</span>
          <mt-radio title v-model="value" :options="['高', '中', '低']"></mt-radio>
        </p>
        <div class="jibie">
          <p>
            <span class="ftlss">申请级别</span>
            <mt-radio
              title
              v-model="value"
              :options="['省会级代理', '地级市代理', '特许加盟店', '联营合作店', '形象样板店']"
            ></mt-radio>
          </p>
          <br>
        </div>
        <p>
          <span class="ftlss">资金来源</span>
          <mt-radio title v-model="value" :options="['自有资金', '借款资金', '银行贷款']"></mt-radio>
        </p>
      </div>

      <p class="setitle">
        <span></span>投资调查
      </p>
      <mt-checklist title v-model="value" :options="survey"></mt-checklist>

      <p class="setitle">
        <span></span>您加盟的优势述说
      </p>
      <mt-field label placeholder type="textarea" rows="4" v-modal="introduction"></mt-field>
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
      form1: {
        address: ""
      },
      value: [],
      introduction: "",
      survey: [
        {
          id: 1,
          label: "选项A",
          value: "A"
        },
        {
          id: 2,
          label: "选项B",
          value: "B"
        },
        {
          id: 3,
          label: "选项C",
          value: "C"
        },
        {
          id: 4,
          label: "选项D",
          value: "D"
        }
      ]
    };
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
        width: 67%;
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
    .mint-button:nth-child(1){
      background: #fc8709;
      color:#fff;
    }
  }

  .mint-field-core {
    border: 2px solid #ddd;
    border-radius: 3px;
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
