<template>
  <div class="register">
    <div>
      <Navigation />
      <div class="row">
        <Logo />
        <p>用户注册页面</p>
      </div>
    </div>
    <div class="content">
      <div class="toMerchantRegister">
        <router-link to="/sellRegister">前往商家注册页面...</router-link>
      </div>
      <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-width="100px"
        class="demo-form"
      >
        <el-form-item label="用户名" prop="name">
          <el-input
            type="text"
            v-model="form.name"
            autocomplete="off"
            placeholder=" 请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
            placeholder=" 请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="form.checkPass"
            autocomplete="off"
            placeholder=" 请输入确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input
            type="tel"
            v-model="form.phone"
            autocomplete="off"
            placeholder=" 请输入11位电话号码"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="email"
            v-model="form.email"
            autocomplete="off"
            placeholder=" 请输入邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item label="城市" prop="city">
          <el-input
            type="text"
            v-model="form.city"
            autocomplete="off"
            placeholder=" 请输入所在城市"
          ></el-input>
        </el-form-item>

        <el-form-item label="银行卡号" prop="card">
          <el-input
            type="tel"
            v-model="form.card"
            autocomplete="off"
            placeholder=" 请输入16位卡号"
          ></el-input>
        </el-form-item>
        <el-form-item class="sex" label="性别" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="0">男</el-radio>
            <el-radio label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="验证码" prop="imageValid">
          <el-input
            type="text"
            v-model="form.imageValid"
            placeholder=" 请输入验证码"
          ></el-input>
          <canvas
            ref="canvas"
            id="canvas"
            width="120"
            height="40"
            @click="updateCanvas()"
          ></canvas>
        </el-form-item>

        <el-form-item>
          <el-button class="submit" @click="register('form')">提交</el-button>
          <el-button class="reset" @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Logo from "./Logo.vue";
export default {
  components: { Navigation, Logo },
  name: "UserRegister",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("验证码不能为空"));
      } else if (value !== this.num) {
        this.updateCanvas();
        callback(new Error("验证码输入有误"));
      } else {
        callback();
      }
    };

    return {
      form: {
        name: "",
        password: "",
        checkPass: "",
        phone: "",
        email: "",
        city: "",
        sex: "0",
        card: "",
        imageValid: "", //用户输入的验证码
      },
      num: "", //图片中的随机验证码
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          { min: 11, max: 11, message: "电话号码格式不正确", trigger: "blur" },
        ],
        imageValid: [{ validator: validatePass3, trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱地址", trigger: "blur" }],
        city: [{ required: true, message: "请输入城市地址", trigger: "blur" }],
        card: [
          { required: true, message: "请输入银行卡号", trigger: "blur" },
          { min: 16, max: 16, message: "银行卡号格式不正确", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //提交注册
    register(formName) {
      this.$refs[formName].validate((valid) => {
        //表单验证
        if (!valid) {
          return;
        } else {
          this.axios
            .post("/user/register", this.form)
            .then((response) => {
              if (response.data.code === 0) {
                this.$message({
                  message: "注册成功！",
                  type: "success",
                });
                this.resetForm("form");
                this.$router.replace("/login");
              } else {
                this.resetForm("form");
                this.$message("该用户名已被注册！");
              }
            })
            .catch((error) => {
              alert(error.message);
            });
        }
      });
    },

    // 随机颜色函数
    getColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    draw() {
      var context = this.$refs.canvas.getContext("2d"); //舞台，getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。
      context.strokeRect(0, 0, 120, 40); //绘制矩形（无填充）
      var aCode = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      // 绘制字母
      var arr = []; //定义一个数组用来接收产生的随机数
      for (var i = 0; i < 4; i++) {
        let x = 20 + i * 20; //每个字母之间间隔20
        let y = 20 + 10 * Math.random(); //y轴方向位置为20-30随机
        var index = Math.floor(Math.random() * aCode.length); //随机索引值
        var txt = aCode[index];
        context.font = "bold 20px 微软雅黑"; //设置或返回文本内容的当前字体属性
        context.fillStyle = this.getColor; //设置或返回用于填充绘画的颜色、渐变或模式，随机
        context.translate(x, y); //重新映射画布上的 (0,0) 位置，字母不可以旋转移动，所以移动容器
        var deg = (90 * Math.random() * Math.PI) / 180; //0-90度随机旋转
        context.rotate(deg); //  旋转当前绘图
        context.fillText(txt, 0, 0); //在画布上绘制“被填充的”文本
        context.rotate(-deg); //将画布旋转回初始状态
        context.translate(-x, -y); //将画布移动回初始状态
        arr[i] = txt; //接收产生的随机数
      }
      this.num = arr[0] + arr[1] + arr[2] + arr[3]; //将产生的验证码放入num
      // 绘制干扰线条
      for (let i = 0; i < 8; i++) {
        context.beginPath(); //起始一条路径，或重置当前路径
        context.moveTo(Math.random() * 120, Math.random() * 40); //把路径移动到画布中的随机点，不创建线条
        context.lineTo(Math.random() * 120, Math.random() * 40); //添加一个新点，然后在画布中创建从该点到最后指定点的线条
        context.strokeStyle = this.getColor(); //随机线条颜色
        context.stroke(); //  绘制已定义的路径
      }
      // 绘制干扰点，和上述步骤一样，此处用长度为1的线代替点
      for (let i = 0; i < 20; i++) {
        context.beginPath();
        let x = Math.random() * 120;
        let y = Math.random() * 40;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.strokeStyle = this.getColor();
        context.stroke();
      }
    },
    //更新验证码
    updateCanvas() {
      var context = this.$refs.canvas.getContext("2d");
      context.clearRect(0, 0, 120, 40); //在给定的矩形内清除指定的像素
      this.draw();
      console.log(this.num);
    },
  },
  mounted() {
    this.draw();
  },
};
</script>

<style scoped>
.register {
  position: relative;
  margin: 0 auto;
  font-size: 14px;
  /* margin: 0 auto;
  padding: 2em 0;
  width: 500px; */
  /* background-image: url("background.png"); */
}
.register .content {
  width: 500px;
  display: inline-block;
  vertical-align: middle;
}
.imageVaild {
  position: relative;
}
.submit {
  margin-left: 1px;
  background-color: #ef7900;
  color: #fff;
  width: 150px;
}
.reset {
  background-color: #ef7900;
  color: #fff;
  width: 150px;
}
canvas {
  position: absolute;
  top: 0;
  right: 0;
}
.toMerchantRegister {
  position: relative;
  margin-top: 50px;
  font-size: 10px;
}
.toMerchantRegister a {
  position: absolute;
  top: -50px;
  right: 0;
  color: black;
}
a {
  text-decoration: none;
}
.register p {
  font-size: 50px;
  text-align: center;
  letter-spacing: 10px;
  color: #876d6c;
  overflow: hidden;
  width: 400px;
  margin: -130px 0px 0px 30px;
  margin-bottom: 50px;
  padding-left: 90px;
}
.sex {
  text-align: left;
}
</style>