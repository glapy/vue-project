<template>
  <!-- 顶部导航 -->
  <div class="navigation">
    <ul style="list-style: none">
      <li style="float: left; margin-left: -100px">
        <a>
          <i class="el-icon-location-outline"></i>
          <span>佛山市</span>
        </a>
      </li>
      <li v-if="!user" class="login">
        <span class="loginSpan"
          ><router-link class="loginlink" to="/login"
            >你好，请登录！ </router-link
          ><router-link class="loginlink" to="/register"
            ><span>免费注册</span></router-link
          ></span
        >
      </li>
      <li v-else class="exit">
        <span class="loginSpan"
          >欢迎您，{{ user.name }}！<a href="javascript:;" @click="exit"
            >退出登录</a
          ></span
        >
      </li>
      <li class="cart">
        <router-link to="/cart">
          <span> 购物车<i class="el-icon-shopping-cart-full"></i> </span>
        </router-link>
      </li>
      <li class="mydingdan">
        <router-link to="/order"
          >我的订单<i class="el-icon-tickets"></i
        ></router-link>
      </li>

      <!-- <li class="spacer"></li> -->
      <li class="myqianbao">
        <router-link to="/account"
          >我的钱包<i class="el-icon-s-finance"></i
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Navigation",
  computed: {
    //user模块带有命名空间
    ...mapState("user", {
      //将this.user映射为this.$store.state.user.user  因为定义变量名称相同，可简写成 ['user']
      user: "user",
    }),
  },
  methods: {
    exit() {
      this.deleteUser();
      sessionStorage.removeItem("user");
    },
    ...mapMutations("user", ["deleteUser"]), //将this.deleteUser映射为this.$store.state.commit('user/deleteUser')
  },
};
</script>


<style scoped>
.navigation {
  position: relative;
  background-color: #246c47;
  padding-left: 10%;
  height: 50px;
  /* height: 30px;
    background-color: #e3e4e5;
    margin-top: 0;
    margin-bottom: 30px;
    border: 1px solid palevioletred; */
}
li > a {
  font-size: 15px;
  text-decoration: none;
  display: block;
  color: #fff;
  height: 30px;
  line-height: 50px;
}
.loginSpan {
  display: none;
  font-size: 15px;
  color: #fff;
  display: block;
  height: 30px;
  line-height: 50px;
}
.loginSpan > a {
  text-decoration: none;
  color: #fff;
  margin-left: 5px;
}
li.spacer {
  overflow: hidden;
  width: 1px;
  height: 10px;
  background-color: #ccc;
}
.link-regist {
  color: #ef7900;
}
li {
  margin-right: 15px;
  display: inline-block;
}
li a:hover {
  color: #ef7900;
}

.mydingdan {
  float: right;
}
.myqianbao {
  float: right;
}
.login {
  float: left;
}
.exit {
  float: left;
}
.cart {
  float: right;
  margin-right: 40px;
}
.loginlink {
  color: #fff;
  margin-right: 5px;
}
i {
  margin-left: 3px;
}
</style>