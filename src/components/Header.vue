<template>
  <div class="header">
    <router-link to="/"> </router-link>
    <div class="search">
      <HeaderSearch />
      <HeaderCategory />
    </div>
    <!-- <HeaderCart/> -->
  </div>
</template>

<script>
import HeaderCategory from "./HeaderCategory.vue";
import HeaderSearch from "./HeaderSearch.vue";
export default {
  name: "Header",
  components: {
    HeaderSearch,
    HeaderCategory,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  padding-left: 15%;
  margin: 10px auto;
  height: 150px;
  width: 100%;
  overflow: hidden;
  background-color: white;
}
.header .search {
  margin-top: 40px;
  width: 700px;
  height: 100%;
  overflow: hidden;
  float: left;
  background-color: white;
}
.header > a {
  float: left;
  margin-right: 60px;
  margin-top: -7px;
  width: 150px;
  height: 150px;
  text-decoration: none;
  background: url(../assets/Logo2.jpg);
  vertical-align: bottom;
  background-color: white;
}
</style>