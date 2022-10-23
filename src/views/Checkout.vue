<template>
  <div>
    <div class="shoppingAddress">
      <h3>收货地址</h3>
      <div style="display: flex; margin: 0 0 8px 0">
        <el-button
          size="small"
          type="primary"
          @click="dialogVisible = true"
          class="AddressBtn"
          >选择已有地址</el-button
        >
      </div>
      收货人：<el-input
        v-model="formItem.userAddressName"
        placeholder=" 请输入收货人"
      ></el-input>
      手机号：<el-input
        v-model="formItem.phone"
        placeholder=" 请输入手机号"
      ></el-input>
      地址：<el-input
        v-model="formItem.address"
        placeholder=" 请输入收货地址"
      ></el-input>
    </div>
    <div class="shoppingCart">
      <el-table :data="payItems" stripe style="width: 100%" max-height="1000px">
        <el-table-column
          prop="name"
          label="商品名称"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="shopName"
          label="店铺"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="price"
          label="单价"
          :formatter="formatterPrice"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="quantity"
          label="数量"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="amount"
          label="金额"
          :formatter="formatterAmount"
          width="180"
        ></el-table-column>
      </el-table>
      <p>
        <span
          ><el-button size="mini" class="submit" @click="submitOrder"
            >提交订单</el-button
          ></span
        >
        <span>总价：{{ totalPrice | currency }}</span>
      </p>
    </div>
    <el-dialog
      title="请选择收货地址"
      :visible.sync="dialogVisible"
      width="800px"
    >
      <div style="display: flex; margin-bottom: 10px">
        <el-button
          type="primary"
          size="small"
          @click="addAddress"
          class="addAddress"
          >添加收货地址</el-button
        >
        <el-button size="small" @click="editAddress">编辑</el-button>
        <el-button type="danger" size="small" @click="deleteAddress"
          >删除</el-button
        >
      </div>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column property="userAddressName" label="收货人" width="120">
        </el-table-column>
        <el-table-column property="phone" label="手机号" width="120">
        </el-table-column>
        <el-table-column property="address" label="地址"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="unSetData">取 消</el-button>
        <el-button type="primary" @click="setData">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 新增输入收货地址 -->
    <el-dialog
      title="新增收货地址"
      :visible.sync="dialogFormVisible"
      width="600px"
    >
      <el-form :model="form" size="small">
        <el-form-item label="收货人:">
          <el-input v-model="form.userAddressName"></el-input>
        </el-form-item>
        <el-form-item label="手机号:">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货地址:">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAddressSelected">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "checkout",
  data() {
    return {
      formItem: {
        id: null,
        userId: null,
        address: "",
        userAddressName: "",
        phone: "",
      },
      form: {
        id: null,
        userId: null,
        address: "",
        userAddressName: "",
        phone: "",
      },
      dialogVisible: false,
      dialogFormVisible: false,
      tableData: [],
      currentRow: null,
    };
  },
  created() {
    this.getAddressData();
  },
  computed: {
    ...mapState("cart", ["payItems"]),
    ...mapState("user", ["user"]),
    ...mapGetters("cart", ["totalPrice"]),
  },
  methods: {
    setImgUrl(photoOne) {
      return require("../assets" + photoOne);
    },
    //新增
    addAddress() {
      this.dialogFormVisible = true;
      this.dialogVisible = false;
    },
    //删除
    deleteAddress() {
      if (this.currentRow == null) {
        this.$message("请选择要删除的收货地址");
        return;
      }
      this.$confirm("您确定要删除商品吗？")
        .then(() => {
          this.axios
            .post("userAddress/delete", [this.currentRow])
            .then((response) => {
              if (response.data.code == 0) {
                this.getAddressData();
              }
            })
            .catch(() => {
              (error) => alert(error);
            });
        })
        .catch(() => {});
    },
    //编辑
    editAddress() {
      if (this.currentRow == null) {
        this.$message("请选择要编辑的收货地址");
        return;
      }
      this.form = JSON.parse(JSON.stringify(this.currentRow));
      this.dialogFormVisible = true;
      this.dialogVisible = false;
    },
    //点击取消
    addAddressUnSelected() {
      this.form = {};
      this.dialogVisible = true;
      this.dialogFormVisible = false;
    },
    //点击确认
    async addAddressSelected() {
      if (!this.ruleAddress(this.form)) return;
      if (this.form.userId !== null) {
        await this.axios
          .post("userAddress/update", this.form)
          .then((response) => {
            if (response.data.code == 0) {
              this.getAddressData();
            }
          });
      } else {
        this.form.userId = this.user.id;
        await this.axios
          .post("/userAddress", this.form)
          .then((response) => {
            if (response.data.code == 0) {
              this.$message("添加成功");
              this.getAddressData();
            } else {
              this.$message("添加失败");
            }
          })
          .catch((error) => alert("未知错误"));
      }
      this.form = {};
      this.dialogVisible = true;
      this.dialogFormVisible = false;
    },
    getAddressData() {
      this.axios
        .get("/userAddress/" + this.user.id, { params: { page: 1 } })
        .then((response) => {
          if (response.status === 200) {
            this.tableData = response.data.data.records;
          }
        })
        .catch((error) => alert(error));
    },
    //地址dialog
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    setData() {
      if (this.currentRow == null) {
        this.$message("请选择收货地址");
        return;
      }
      this.formItem = JSON.parse(JSON.stringify(this.currentRow));
      this.currentRow = null;
      this.dialogVisible = false;
    },
    unSetData() {
      this.currentRow = null;
      this.dialogVisible = false;
    },
    ruleAddress(itemss, i) {
      if (i) {
        let s = true;
        itemss.forEach((item) => {
          if (
            item.userAddressName == "" ||
            item.phone == "" ||
            item.address == ""
          ) {
            s = false;
          }
        });
        if (!s) this.$message("请输入收货地址！");
        return s;
      }
      if (
        itemss.userAddressName == "" ||
        itemss.phone == "" ||
        itemss.address == ""
      ) {
        this.$message("请输入收货地址！");
        return false;
      }
      return true;
    },

    formatterAmount(row) {
      return (row.quantity * row.price * row.discount).toFixed(2); //保留两位小数（四舍五入）
    },
    formatterPrice(row) {
      return row.discount * row.price;
    },

    //提交订单
    submitOrder() {
      this.payItems.forEach((item) => {
        item.userAddressName = this.formItem.userAddressName;
        item.phone = this.formItem.phone;
        item.address = this.formItem.address;
      });
      if (!this.ruleAddress(this.payItems, true)) return;
      this.$confirm("确认提交订单？")
        .then(() => {
          this.axios
            .post("/shoppingCart/checkOut", this.payItems)
            .then((response) => {
              if (response.data.code == 0) {
                this.$router.replace("/order");
              } else {
                this.$message(response.data.msg);
              }
            })
            .catch(() => {
              (error) => alert(error);
            });
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.shoppingAddress {
  margin: 0 auto;
  width: 400px;
  margin-top: 50px;
  padding-right: 500px;
  text-align: left;
}
.shoppingCart {
  margin: 0 auto;
  text-align: center;
  width: 900px;
  margin-top: 50px;
}
.shoppingCart span {
  float: right;
  padding-right: 15px;
}

.shoppingCart .submit {
  float: right;
  height: 30px;
  margin: 0;
  border: none;
  color: white;
  background-color: #246c47;
  cursor: pointer;
}

.shoppingCart p {
  margin-top: 10px;
}
.AddressBtn {
  background-color: #246c47;
  margin-top: 20px;
}
.addAddress {
  background-color: #246c47;
}
</style>