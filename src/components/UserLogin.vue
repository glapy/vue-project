<template>
  <div class="login">
    <div>
      <Navigation />
      <div class="row">
        <Logo />
        <p>欢迎登录</p>
      </div>
    </div>
    <form>
      <div class="lable">
        <label for="name"><i class="el-icon-user-solid"></i></label>
        <input
          id="name"
          name="name"
          type="text"
          v-model.trim="name"
          placeholder="用户名"
        />
      </div>
      <div class="lable">
        <label for="password"><i class="el-icon-lock"></i></label>
        <input
          id="password"
          type="password"
          v-model.trim="password"
          placeholder="密码"
        />
      </div>
      <div class="identity">
        <input
          type="radio"
          id="user"
          name="identity"
          value="user"
          v-model="identity"
        />
        <label for="user">用户</label>
        <input
          type="radio"
          id="merchant"
          name="identity"
          value="sell"
          v-model="identity"
        />
        <label for="merchant">商家</label>
        <input
          type="radio"
          id="admin"
          name="identity"
          value="admin"
          v-model="identity"
        />
        <label for="admin">管理员</label>
      </div>
      <div class="submit">
        <input
          class="submit"
          type="submit"
          @click.prevent="login"
          value="登录"
        />
        <router-link class="toRegister" to="/register">立即注册</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import { mapMutations, mapState } from "vuex";
import Logo from "./Logo.vue";

export default {
  name: "UserLogin",
  data() {
    return {
      name: "",
      password: "",
      identity: "user",
    };
  },
  components: {
    Navigation,
    Logo,
  },
  computed: {
    ...mapState("user", {
      user: "user",
      sell: "sell",
      admin: "admin",
    }),
  },
  methods: {
    login() {
      if (!this.checkForm()) return;
      this.axios
        .post(this.identity + "/login", {
          name: this.name,
          password: this.password,
        })
        .then((response) => {
          if (response.data.code == 0) {
            this.name = "";
            this.password = "";
            //普通用户登录
            if (this.identity == "user") {
              this.saveUser(response.data.data);
              sessionStorage.setItem("user", JSON.stringify(this.user));
              this.$message({
                message: "登录成功！",
                type: "success",
              });
              //如果存在查询参数
              if (this.$route.query.redirect) {
                let redirect = this.$route.query.redirect;
                //跳转至进入登录页前的路由
                this.$router.replace(redirect); //跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面
              } else {
                // 否则跳转至首页
                this.$router.replace("/home");
              }
            } else if (this.identity == "sell") {
              //
              this.saveSell(response.data.data);
              sessionStorage.setItem("sell", JSON.stringify(this.sell));
              this.$message({
                message: "登录成功！",
                type: "success",
              });
              //如果存在查询参数
              if (this.$route.query.redirect) {
                let redirect = this.$route.query.redirect;
                //跳转至进入登录页前的路由
                this.$router.replace(redirect); //跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面
              } else {
                // 否则跳转至首页
                this.$router.replace("/shop/shopId/" + this.sell.id);
              }
            } else {
              //管理员登录
              this.saveAdmin(response.data.data);
              sessionStorage.setItem("admin", JSON.stringify(this.admin));
              this.$message({
                message: "登录成功！",
                type: "success",
              });
              this.$router.replace("/admin");
            }
          } else {
            this.$message({
              message: response.data.msg,
              type: "error",
            });
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    ...mapMutations("user", ["saveUser", "saveSell", "saveAdmin"]),
    checkForm() {
      if (!this.name || !this.password) {
        this.$message("用户名和密码不能为空");
        return false;
      }
      return true;
    },
  },
};
</script>
<style scoped>
.login {
  position: relative;
  margin: 0 auto;
  font-size: 14px;
  /* width: 350px; */

  /* margin: 0 auto;
  text-align: center;
  min-height: 100vh;
  color: #846e6e;
  overflow: hidden; */
}
.login .lable {
  position: relative;
  margin-top: 10px;
}
.login .lable label {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 0;
  top: 10px;
  border-right: solid 1px #ccc;
  text-align: center;
  margin-left: 500px;
}
i {
  margin-top: 12px;
}
.login .error {
  height: 30px;
  color: red;
  font-weight: bold;
  font-size: 0.5em;
}
.identity label {
  margin-right: 10px;
}
.login .lable input:not(:first-child) {
  width: 300px;
  height: 20px;
  padding: 10px 0 10px 50px;
  font-size: 14px;
  margin: 10px 0px;
  outline: none;
  font-weight: 500;
  background: #eee;
  border: solid 1px #ccc;
}

.login .submit input {
  border: 1px solid #ef7900;
  width: 153px;
  padding: 10px 2px 10px 0px;
  margin: 15px 245px 30px 50px;
  background: #ef7900;
  color: #fff;
  cursor: pointer;
}

.login .submit .toRegister {
  position: absolute;
  border: 1px solid #ef7900;
  width: 153px;
  padding: 10px 0;
  background: #ef7900;
  color: #fff;
  margin: 15px 60px 30px -200px;
}

a {
  text-decoration: none;
  color: #ef7900;
}
.login .identity input {
  margin: 20px 5px 5px 0px;
  vertical-align: -5%;
}
.login p {
  font-size: 50px;
  text-align: center;
  letter-spacing: 10px;
  color: #876d6c;
  overflow: hidden;
  width: 300px;
  margin: -130px 0px 0px 30px;
  margin-bottom: 50px;
  /* padding-left: 115px; */
}
</style>