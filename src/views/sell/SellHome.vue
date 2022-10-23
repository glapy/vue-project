<template>
  <div class="sellHome">
    <!-- 顶部导航 -->
    <div class="navigation">
      <ul style="list-style: none">
        <li class="loginLi" v-if="!sell">
          <span class="loginSpan"
            ><router-link to="/login">你好，请登录 </router-link
            ><router-link to="/sellRegister"
              ><span>免费注册</span></router-link
            ></span
          >
        </li>
        <li class="loginLi" v-else>
          <span class="loginSpan"
            >欢迎您，{{ sell.name }}！<a href="javascript:;" @click="exit"
              >退出登录</a
            ></span
          >
        </li>

        <!-- <li class="spacer"></li> -->
        <li class="order">
          <router-link to="/shop/order"
            >我的订单<i class="el-icon-tickets"></i
          ></router-link>
        </li>
        <!-- <li class="spacer"></li> -->
        <li class="massage">
          <router-link to="/shop/info"
            >我的信息<i class="el-icon-chat-dot-square"></i
          ></router-link>
        </li>
        <li class="shop">
          <router-link :to="'/shop/shopId/' + sell.id">
            <span>我的商店</span>
            <i class="el-icon-s-home"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "SellHome",
  computed: {
    ...mapState("user", {
      sell: "sell",
    }),
  },
  watch: {
    sell(val) {
      if (val == null) {
        this.$router.push("/login");
      }
    },
  },
  methods: {
    exit() {
      this.deleteSell();
      sessionStorage.removeItem("sell");
    },
    ...mapMutations("user", ["deleteSell"]), //将this.deleteUser映射为this.$store.state.commit('user/deleteUser')
  },
};
</script>

<style scoped>
.sellHome {
  min-height: 100vh;
}
.navigation {
  position: relative;
  background-color: #246c47;
  padding-left: 3%;
  height: 50px;
}
.navigation i {
  margin-left: 5px;
}
.navigation .loginLi {
  float: left;
}

.navigation .order {
  float: right;
  margin-right: 40px;
}
.navigation .massage {
  float: right;
}
.navigation .shop {
  float: right;
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
  font-size: 15px;
  margin-left: 24px;
}
li.spacer {
  overflow: hidden;
  width: 1px;
  height: 10px;
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
</style>