<template>
  <div class="tabComponent">
    <button
      v-for="tab in tabs"
      :key="tab.title"
      :class="['tab-button', { active: currentTab === tab.title }]"
      @click="currentTab = tab.title"
    >
      {{ tab.displayName }}
    </button>

    <keep-alive>
      <component
        :is="currentTabComponent"
        :content="content"
        class="tab"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import CommodityIntroduction from "./CommodityIntroduction";
export default {
  name: "TabComponent",
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentTab: "introduction",
      tabs: [
        { title: "introduction", displayName: "商品介绍" },
        { title: "comment", displayName: "商品评价" },
        { title: "qa", displayName: "商品问答" },
      ],
    };
  },

  components: {
    CommodityIntroduction,
    CommodityComment: () => import("./CommodityCommentList"),
    CommodityQa: () => import("./CommodityQA"),
  },

  computed: {
    currentTabComponent: function () {
      return "Commodity-" + this.currentTab;
    },
  },
};
</script>
<style scoped>
.tabComponent {
  float: left;
  width: 88%;
  text-align: left;
  margin-top: 30px;
  margin-left: 74px;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: solid 1px #246c47;
  cursor: pointer;
  background: #246c47;
  margin-bottom: -1px;
  margin-right: -1px;
  color: #fff;
  margin-left: 1px;
  border-radius: 0%;
  width: 150px;
}
.tab-button:hover {
  background: #459e70;
}
.tab-button.active {
  background: #ef7900;
}
.tab {
  padding: 10px;
  font-size: 16px;
  height: 50px;
  border-bottom: 1px solid #246c47;
  width: 1016px;
}
</style>