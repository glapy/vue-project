<template>
  <div class="homePage">
    <home-scroll-pic />
    <h3>团物商城 MALL</h3>
    <p><i class="el-icon-truck"></i>产地直批</p>
    <p><i class="el-icon-time"></i>急速到货</p>
    <p><i class="el-icon-success"></i>品质保证</p>
    <Commodities />
  </div>
</template>

<script>
import HomeScrollPic from "../components/HomeScrollPic.vue";
import Commodities from "./Commodities.vue";
export default {
  name: "homePage",
  components: {
    Commodities,
    HomeScrollPic,
  },
};
</script>

<style>
.homePage {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
}
.homePage > h3 {
  margin: 20px 0;
  color: #246c47;
}
p {
  display: inline-block;
  margin: 0px 10px 20px 0px;
}
p i {
  margin: 5px;
  font-size: 30px;
  vertical-align: -15%;
}
</style>