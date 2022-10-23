<template>
  <div class="account">
    <div class="wallet">
      <div class="walletTitle">
        <h3>我的钱包</h3>
      </div>
      <div class="sum">
        <i class="el-icon-s-finance"></i>
        <h4>余额：</h4>
        <span>{{ wallet.toFixed(2) }}</span>
      </div>
    </div>
    <div class="integral">
      <div class="integralTitle">
        <h3>我的积分</h3>
      </div>
      <div class="sum">
        <i class="el-icon-coin"></i>
        <h4>积分：</h4>
        <span>{{ points }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Account",
  data() {
    return {
      wallet: 0, //余额
      points: 0, //积分
    };
  },
  created() {
    this.axios.get("/user/" + this.user.id).then((response) => {
      if (response.status === 200) {
        this.wallet = response.data.data.wallet;
        this.points = response.data.data.points;
      }
    });
  },
  computed: {
    ...mapState("user", {
      user: "user",
    }),
  },
};
</script>
<style scoped>
.account {
  width: 965px;
  margin: 0 auto;
  text-align: left;
  height: 75vh;
  line-height: 30px;
  margin-left: 200px;
  /* background-image: url("../views/11.png"); */
}
.account .integral {
  margin-top: 30px;
}
.wallet {
  margin-left: 100px;
}
.integral {
  margin-left: 100px;
}
.wallet .walletTitle {
  width: 200px;
  background-color: #8c7774;
  color: #fff;
  text-align: center;
  letter-spacing: 5px;
}
.integral .integralTitle {
  width: 200px;
  background-color: #8c7774;
  color: #fff;
  text-align: center;
  letter-spacing: 5px;
}
.account .sum {
  width: 750px;
  height: 100px;
  /* border: 3px solid #e9e3e3; */
  background-color: #e9e3e3;
  padding: 30px 0px 0px 20px;
}
i {
  padding-right: 10px;
  font-size: 50px;
  vertical-align: -15%;
}
h4 {
  display: inline-block;
  letter-spacing: 3px;
}
</style>