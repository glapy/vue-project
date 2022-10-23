<template>
  <div class="commodity">
    <Navigation />
    <Header />
    <router-view />
    <div class="img-preview">
      <img :src="img" v-if="commodity.photoOne" />
    </div>
    <div>
      <div class="commodityInfo">
        <p class="commodityName">{{ commodity.name }}</p>
        <p>
          <span>团物价：</span>
          <span class="factPrice">
            {{ commodity.price | factPrice(commodity.discount) | currency }}
          </span>
          <span v-if="commodity.discount != 1" class="discount">
            [{{ commodity.discount | formatDiscount }}]
          </span>
          <span v-if="commodity.discount != 1"
            >[定价 <i class="price">{{ commodity.price | currency }}</i
            >]</span
          >
        </p>
        <!-- <div class="bargain">{{ commodity.bargain }}</div> -->
        <p>
          <span>商品编号：{{ commodity.shopName }}</span>
        </p>
        <p>
          <span>平均分：{{ commodity.score }}</span>
        </p>
        <p>库存：{{ commodity.inventory }}</p>

        <div class="SelfAssuredPurchase li">
          <div class="dt">服务支持</div>
          <div class="dd">
            <p class="buy">放心购<i class="el-icon-shopping-cart-full"></i></p>
            <a class="backup" href="javascript:;">免费上门取退</a>
            <i class="icon">|</i>
            <a href="javascript:;">7天保价</a>
            <span>可配送海外，也可以享受退货服务哦！</span>
          </div>
        </div>
        <p class="line">
          ----------------------------------------------------------------------------------------------------------------------------------------
        </p>
        <div class="addCart" v-if="user">
          <span>数量：</span>
          <AddSubtractButton
            :quantity="quantity"
            @updateQuantity="handleUpdate"
          />

          <button class="addCartButton" @click="addCart(commodity)">
            <i class="el-icon-shopping-cart-1"></i>
            加入购物车
          </button>
        </div>
        <!-- <p>新旧程度：{{ commodity.degree | formatEmptyData }}成新</p> -->
      </div>
    </div>
    <commodityTabComponent :content="commodity.instruction" />
  </div>
</template>

<script>
import AddSubtractButton from "@/components/AddSubtractButton";
import commodityTabComponent from "@/components/CommodityTabComponent";
import { mapActions, mapState } from "vuex";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default {
  name: "commodity",
  data() {
    return {
      img: "",
      commodity: {
        Header,
        Navigation,
      },
      quantity: 0,
    };
  },
  components: {
    AddSubtractButton,
    commodityTabComponent,
  },
  computed: {
    ...mapState("user", ["user"]),
  },

  created() {
    let url = this.$route.fullPath;
    if (url.indexOf("/shop/commodity") != -1) {
      url = "/commodity/" + this.$route.params.id;
    }
    this.axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          this.commodity = response.data.data;
          this.img = require("../assets" + this.commodity.photoOne);
          if (this.commodity.bargain == 0) {
            this.commodity.bargain = "不议价";
          } else this.commodity.bargain = "可以议价";
        }
      })
      .catch((error) => alert(error));
  },
  methods: {
    // 子组件AddSubtractButton的自定义事件updateQuantity的处理函数
    handleUpdate(value) {
      this.quantity = value;
    },
    factPrice(price, discount) {
      return price * discount;
    },
    //加入购物车
    addCart(commodity) {
      if (!this.user) {
        this.$router.push("/login");
        return;
      }
      let quantity = this.quantity;

      if (quantity === 0) {
        quantity = 1;
      }
      if (commodity.inventory < quantity) {
        this.$message("库存不够");
        return;
      }
      this.axios
        .post("/shoppingCart", {
          commodityId: commodity.id,
          quantity: quantity,
          userId: this.user.id,
        })
        .then((response) => {
          if (response.data.code == 0) {
            this.$router.push("/cart");
          } else {
            this.$message("加入购物车失败");
          }
        })
        .catch((error) => alert(error));
    },
    ...mapActions("cart", ["addProductToCart"]),
  },

  filters: {
    // 格式化折扣数据
    formatDiscount(value) {
      if (value) {
        let strDigits = value.toString().substring(2);
        strDigits += "折";
        return strDigits;
      } else return value;
    },
    formatEmptyData(value) {
      if (value == null) {
        value = "未知";
      }
      return value;
    },
  },
};
</script>
<style scoped>
.commodity {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 16px;
  text-align: left;
  color: black;
  /* background-color: #e1f5de; */
  background-color: #f4faf4;
}
span {
  display: block;
}
.commodity img {
  margin-top: 50px;
  margin-left: 50px;
  float: left;
  width: 370px;
  height: 370px;
  margin-left: 40px;
}
.commodity .commodityInfo {
  margin-top: 50px;
  float: left;
  width: 700px;
  background-color: #fff;
  padding-left: 10px;
  padding-top: 5px;
  height: 370px;
  margin-left: 35px;
}
.commodity .commodityName {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 17px;
}
.commodity .commodityInfo span {
  display: inline;
}
p {
  margin: 12px auto;
  font-size: 15px;
  display: block;
}

.commodity .addCart {
  margin-top: 5px;
  margin-left: 50px;
  float: left;
}
.commodity .addCart span {
  margin: -50px;
}
.commodity .addCartButton {
  padding: 5px 10px 6px;
  color: #fff;
  border: none;
  border-bottom: solid 1px #222;
  border-radius: 5px;
  box-shadow: 0 1px 3px #999;
  text-shadow: 0 -1px 3px #444;
  cursor: pointer;
  background-color: #ef7900;
  display: block;
  margin-left: 90px;
  font-size: 15px;
  letter-spacing: 2px;
}
.addCartButton:hover {
  text-shadow: 0 1px 1px #444;
}

.commodity span {
  padding-right: 15px;
}

.commodity .price {
  color: black;
  text-decoration: line-through;
}
/* .commodity .discount {
  color: red;
} */
.commodity .factPrice {
  color: red;
  font-weight: bold;
  font-size: 30px;
}
.SelfAssuredPurchase .dt {
  float: left;
  padding: 20px 14px 0px 0px;
  font-family: simsun;
  font-size: 2px;
  color: #999;
}

.SelfAssuredPurchase .dd a {
  color: #646fb0;
  text-decoration: none;
  font-size: 2px;
}
.SelfAssuredPurchase .dd span {
  font-size: 2px;
  display: block;
  color: black;
  margin: -5px 0px 0px 64px;
}
.SelfAssuredPurchase .dd .backup {
  margin-left: 14px;
}
.SelfAssuredPurchase .dd p {
  font-size: 20px;
  color: #246c47;
  font-weight: bold;
  display: inline-block;
}
.SelfAssuredPurchase .dd .icon {
  margin: 0px 5px;
  color: #999;
}
.commodityInfo .line {
  color: #246c47;
  margin-bottom: 0px;
}
</style>