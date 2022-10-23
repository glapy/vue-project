<template>
  <div class="category">
    <ul>
      <li v-for="category in categories" :key="category.id">
        <router-link :to="'/kind/' + category.id">{{
          category.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderCategory",
  data() {
    return {
      categories: [],
    };
  },
  // 在created生命周期钩子中向服务端请求所有分类数据
  created() {
    this.axios
      .get("/kind")
      .then((response) => {
        if (response.status === 200) {
          this.categories = response.data.data;
        }
      })
      .catch((error) => alert(error));
  },
};
</script>

<style scoped>
.category {
  float: left;
  width: 800px;
  height: 18px;
  font-size: 12px;
  overflow: hidden;
  margin-top: 10px;
  text-align: left;
}
.category a {
  color: #876d6c;
  text-decoration: none;
  /* padding: 0 15px; */
}
li {
  float: left;
  list-style: none;
  padding: 0 15px;
  text-align: left;
}
a {
  text-decoration: none;
  letter-spacing: 2px;
  float: left;
}
</style>