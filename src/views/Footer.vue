<template>
  <div>
    <footer class="footer">
      <div class="clearfix"></div>
      <div class="icon-row">
        <div class="footer-icon">
          <span class="footer-icon-text">全球精选，尽在团物</span>
        </div>
        <div class="footer-icon">
          <span class="footer-icon-text">产地直批，便宜到家</span>
        </div>
        <div class="footer-icon">
          <span class="footer-icon-text">品质保证，严格审核</span>
        </div>
        <div class="footer-icon">
          <span class="footer-icon-text">急速到货，贴心物流</span>
        </div>
      </div>
      <div class="service-intro">
        <div class="servece-type">
          <div
            class="servece-type-info"
            v-for="(guide, index) in guideArr"
            :key="index"
          >
            <ul>
              <li v-for="(item, index) in guide" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="friend-link">
          <div class="friend-link-item">
            <ul>
              <li v-for="(link, index) in moreLink" :key="index">
                <span
                  :class="[linkItemClass, { 'link-last-item': index === 9 }]"
                  >{{ link }}</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="COPYRIGHT">
          <p>COPYRIGHT © 2021-2022 by 广州团物贸易有限公司 出版所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      linkItemClass: "link-item",
      guideArr: [
        ["新手指南", "用户注册", "购物流程", "会员等级"],
        ["配送方式", "上门自提", "配送运费", "配送范围", "配送时间"],
        [
          "支付方式",
          "支付方式/发票说明",
          "充值说明/储值卡说明",
          "优惠代购/礼品卡说明",
        ],
        ["售后服务", "售后政策", "退款说明", "取消订单", "投诉与建议"],
      ],
      moreLink: ["加入团物", "联系我们", "关于团物", "帮助中心", "团物微信"],
    };
  },
};
</script>

<style scoped>
/*****************************底 部 开 始*****************************/
.footer {
  width: 100%;
  height: 320px;
  margin-top: 30px;
  background-color: #fff;
}
.icon-row {
  margin: 15px auto;
  padding-top: 8px;
  width: 1000px;
  height: 64px;
  background-color: #246c47;
}
.footer-icon {
  margin-left: 17px;
  margin-right: 17px;
  float: left;
}

.footer-icon-text {
  margin-left: 45px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 64px;
}
.service-intro {
  width: 100%;
}
.servece-type {
  margin: 15px auto;
  height: 130px;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.servece-type-info {
  color: #666666;
}
.servece-type-info ul {
  list-style: none;
}
.servece-type-info li {
  font-size: 14px;
  cursor: pointer;
  line-height: 26px;
}
.servece-type-info li:first-child {
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
}
.friend-link {
  display: flex;
  align-items: center;
  width: 908px;
  height: 30px;
  margin: 0px auto;
  color: #666;
  border-top: 1px solid #b2dfdb;
}
.friend-link-item {
  margin: 0px auto;
}
.friend-link-item ul {
  list-style: none;
}
.friend-link-item li {
  padding: 5px 0px;
  float: left;
}
.link-item {
  padding: 0px 8px;
  cursor: pointer;
  border-right: 1px solid #ccc;
}
.link-last-item {
  border: none;
}
.COPYRIGHT {
  width: 100%;
  color: #666;
  line-height: 30px;
  text-align: center;
}
.COPYRIGHT p {
  color: #666;
  font-size: 15px;
}
/*****************************底 部 结 束*****************************/
</style>
