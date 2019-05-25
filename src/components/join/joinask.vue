<template>
  <div class="joinask">
    <img class="topimg" src="../../assets/imgs/mfjm.jpg" alt>
    <div class="homebox">
      <div class="mo-erjmu">
        <span class="span1">加盟问答</span>
        <span class="span2">JOIN QUESTION AND ANSWER</span>
      </div>
      <ul class="askul">
        <li v-for="(item,index) in askobj" :key="index">
          <p v-for="(value, key, indexs) in item" :key="indexs" :class="key=='Q'?'pleft':'pright'">
            <img v-show="key=='Q'" src="../../assets/imgs/Q-icon.png" alt="Q">
            <span>
              <i class="popup" v-show="key=='Q'">
                <em></em>
              </i>
              {{value}}
              <i class="popupr" v-show="key=='A'">
                <em></em>
              </i>
            </span>
            <img v-show="key=='A'" src="../../assets/imgs/A-icon.png" alt="A">
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "joinask",
  data() {
    return {
      askobj: [
        {
          Q: "启智灵中文与图形是否经国家商标总局注册正式商标？",
          A: "已经国家商标总局成功注册，启智灵注册号7176802，图形注册号8552852"
        },
        {
          Q: "启智灵品牌是否符合加盟连锁授权资格？",
          A:
            "完全符合，我们已经国家商务部商业特许连锁经营备案，特许备案号： 0420101301000023"
        },
        {
          Q: "启智灵品牌是什么时间成立的?",
          A:
            "启智灵成立2003年4月11日成立,历经16载,极具丰富的管理,运营,营销经验。"
        },
        {
          Q: "启智灵的事业性质为何？",
          A:
            "儿童教育，专门针对0-15岁儿童与家长贴心提供优质服务，在书吧内免费亲子共读： 少儿图书，低幼启蒙，绘本故事，国学启蒙"
        },
        {
          Q: "启智灵筛选城市合作伙伴的条件有何标准？",
          A:
            "高度认可启智灵品牌，认同公司成熟的经营理念和营运模式，按照公司统一的vi形象布置装修， 对儿童教育产品非常感兴趣。"
        },
        {
          Q: "投资启智灵读书吧须具备哪些条件？",
          A: "有信心，有耐心，有恒心，坚信启智灵品牌，相信自己是最棒的。"
        },
        {
          Q: "启智灵读书吧的营业面积及规格要求？",
          A: "三星店110--120平，四星店120--130平 ，五星店140—150平 ；"
        },
        {
          Q: "启智灵读书吧的筹备时间是多久？",
          A: "以加盟商确定场地的时间为准，大约为一个月左右。"
        },
        {
          Q: "启智灵对加盟商证件的办理有哪些指导和支持？",
          A: "有专业老师对加盟店经营所需证件的办理提供指导。"
        },
        {
          Q: "启智灵读书吧总投资需要多少？",
          A: "投资少，效益高，回本快，总额大约30万左右；"
        },
        {
          Q: "启智灵读书吧收取哪些费？",
          A: "零加盟费，零管理费，零保证金，仅收技术服务费。"
        },
        {
          Q: "启智灵读书吧的区域划分？",
          A: "按国家行政区域划分，每个市，区，县，仅开设2家启智灵读书吧。"
        },
        {
          Q: "启智灵读书吧将给予经营者哪些长期支持？",
          A: "启智灵知名商标，不断推出优质新品，服务管理，平台系统和营销方法。"
        },
        {
          Q: "开启智灵读书吧一定能赚的吗？",
          A:
            "没有卖不出去的产品，只有不会卖产品的人；任何项目的都能赚钱，只有半途而废的人才会失败。"
        },
        {
          Q: "加盟商营业员是否由公司培训吗，收费培训吗？",
          A: "是的，公司不收取任何培训费。"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.joinask {
  .mo-erjmu {
    .span2 {
      left: -30px;
    }
  }
  .askul {
    li {
      border-bottom: 1px dashed #ccc;
      padding: 45px 0;
      p {
        line-height: 50px;
        position: relative;
        span {
          position: relative;
          top: -40px;
          padding: 18px;
          line-height: 30px;
          display: inline-block;
          max-width: 350px;
          border-radius: 10px;
          .popup {
            position: absolute;
            top: 50%;
            left: -10px;
          }
          .popup em {
            display: block;
            width: 0;
            height: 0;
            border-width: 10px 10px 10px 0;
            border-style: solid;
            border-color: transparent #f1f1f1 transparent transparent; /*透明 黄 透明 透明 */
            position: absolute;
            top: -10px;
            left: 1px;
          }
          .popupr {
            position: absolute;
            top: 50%;
            right: -28px;
          }
          .popupr em {
            display: block;
            width: 0;
            height: 0;
            border-width: 10px 0 10px 10px;
            border-style: solid;
            border-color: transparent transparent transparent #fc8709; /*透明 透明 透明 黄*/
            position: absolute;
            top: -10px;
            left: -29px;
          }
        }
      }
      .pleft {
        text-align: left;
        margin-bottom: 20px;
        span {
          background: #f1f1f1;
          margin-left: 10px;
          color: #333;
        }
      }
      .pright {
        text-align: right;
        span {
          background: #fc8709;
          margin-right: 10px;
          color: #fff;
        }
      }
    }
  }
}
</style>
