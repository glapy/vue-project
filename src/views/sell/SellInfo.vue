<template>
  <div class="sellInfo">
    <div class="wallet">
      <i class="el-icon-s-finance"></i>
      <h3>我的钱包</h3>
      <div class="money">
        <h4>余额：</h4>
        <span>{{ wallet }}</span>
      </div>
    </div>
    <div class="integral">
      <i class="el-icon-star-on"></i>
      <h3>我的等级</h3>
      <div class="grade">
        <h4>等级：</h4>
        <span>{{ level }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "sellInfo",
  computed: {
    ...mapState("user", {
      sell: "sell",
    }),
  },
  data() {
    return {
      wallet: 0,
      level: "",
      count: 0,
    };
  },
  created() {
    this.axios.get("/sell/" + this.sell.id).then((response) => {
      if (response.status === 200) {
        this.wallet = response.data.data.wallet;
        this.level = response.data.data.level;
      }
    });
  },
};
</script>
<style scoped>
.sellInfo {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  height: 75vh;
  line-height: 30px;
  color: #246c47;
  text-align: center;
}
/* .sellInfo .integral {
  margin-top: 30px;
} */
.wallet {
  height: 300px;
  width: 500px;
  background-color: #f4faf4;
  display: inline-block;
  margin-right: 60px;
  margin-top: 100px;
  text-align: left;
}
.integral {
  height: 300px;
  width: 500px;
  background-color: #f4faf4;
  display: inline-block;
  text-align: left;
}
i {
  padding-right: 10px;
  font-size: 50px;
  vertical-align: -15%;
  margin: 20px 0px 0px 20px;
}
h3 {
  display: inline-block;
}
h4 {
  display: inline-block;
  margin: 20px 0px 0px 80px;
}
</style>