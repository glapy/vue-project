<template>
  <div class="commodityAudit">
    <h3>待审核商品</h3>
    <CommodityList class="CommodityList" :list="list" :isNeedMask="true" />
  </div>
</template>
<script>
import CommodityList from "../../components/CommodityList.vue";
export default {
  components: { CommodityList },
  name: "CommodityAudit",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.axios
      .post("/commodity/audit", { status: 0 })
      .then((response) => {
        if (response.status == 200) {
          this.list = response.data.data;
        }
      })
      .catch(() => {});
  },
};
</script>
<style>
.commodityAudit {
  padding: 30px 140px 0px 40px;
  text-align: center;
}
.commodityAudit h3 {
  /* margin: 30px 0px; */
  color: #545c64;
  padding-left: 120px;
}
.CommodityList {
  width: 500px;
  margin: 0px 0px 0px 50px;
  padding: 10px 0px 10px 15px;
}
</style>