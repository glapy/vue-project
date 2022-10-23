<template>
  <!-- Vue开发中，建议把与父组件紧密耦合的子组件用父组件为前缀命名，这里search搜索框的父组件是header -->
  <div class="headerSearch">
    <input type="search" v-model.trim="keyword" placeholder=" 聚餐" />
    <button @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    //当查询关键字与当前路由对象中的查询参数wd值不同时，才调用$router.push方法
    search() {
      if (this.keyword != this.$route.query.wd) {
        // 页面通过path和query传递参数
        this.$router.push({
          path: "/searchOrder",
          query: {
            keyword: this.keyword,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.headerSearch {
  float: left;
  position: relative;
}
.headerSearch input {
  width: 700px;
  height: 35px;
  border: solid 2px #459e70;
  padding-left: 10px;
  outline-color: #246c47;
}

.headerSearch button {
  position: absolute;
  right: 0px;
  top: 0;
  width: 60px;
  height: 35px;
  margin: 0;
  border: none;
  color: white;
  background-color: #246c47;
  cursor: pointer; /*手形光标*/
  font-size: 16px;
}
</style>