<template>
  <div class="Logo">
    <router-link to="/"> </router-link>
  </div>
</template>

<script>
export default {
  name: "Logo",
  components: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Logo {
  padding-left: 15%;
  margin: 10px auto;
  height: 150px;
  background-color: white;
}

.Logo > a {
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