<template>
  <AppTopNav/>
  <Header/>
  <div class="cartPage w">
    <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" label="全选" width="55"/>
      <el-table-column label="商品信息" width="450">
        <template #default="scope">
          <div class="item-info">
            <img :src="scope.row.listPicUrl" style="height: 100px;weight:100px"/>
            <span>{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="retailPrice" label="单价" width="150">
        <template #default="scope">
          <span class="counterPrice">￥{{ scope.row.retailPrice }}</span>
          <span class="retailPrice">￥{{ scope.row.counterPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column property="address" label="数量" width="175">
        <template #default="scope">
          <el-input-number v-model="scope.row.count" :min="1" :max="1000" :step="1"
                           @change="handleCountChange(scope.$index,scope.row)"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column property="name" label="小计" width="120">
        <template #default="scope">
          <span class="counterPrice">￥{{ (scope.row.retailPrice * 10 * scope.row.count / 10).toFixed(1) }}</span>
        </template>
      </el-table-column>
      <el-table-column property="name" label="操作" width="120">
        <template #default="scope">
          <el-button type="danger" size="default" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>


    </el-table>
    <div class="cartSum">
      <div class="cartSum-left">
        <el-button type="danger" size="default" @click="handleDeleteAll">删除选中</el-button>
      </div>
      <div class="cartSum-right">
        <span>已选商品 <span class="cartSum-count">{{ total }}</span> 件</span>
        <span>合计（不含运费）：<span class="cartSum-price">￥{{ totalPrice }}</span></span>
        <el-button type="primary" size="default">去结算</el-button>
      </div>

    </div>
  </div>


  <Footer/>
</template>

<script>
import AppTopNav from '@/components/AppTopNav.vue'
import Footer from '@/components/Footer.vue'
import AppHeaderNav from '@/components/AppHeaderNav.vue'
import Header from "@/components/Header.vue";
import {cartItemList} from '@/utils/cart'
import {useStore} from "vuex";
import {ref} from "vue";

export default {

  components: {
    Header,
    AppTopNav,
    Footer,
    AppHeaderNav
  },
  setup() {
    const store = useStore();
    // console.log(store.state.cart.cartList)
    const tableData = ref(store.state.cart.cartList.result);
    return {tableData,store}
  },


  data() {
    return {
      // tableData: cartItemList.result,
      total: 0,
      totalPrice: 0,
      selectedRows: [],
    }
  },
  methods: {

    calculatePrice() {
      let total = 0;
      let totalPrice = 0;
      this.selectedRows.forEach(item => {
        total += item.count;
        totalPrice += item.retailPrice * 10 * item.count / 10;
      })
      this.total = total;
      this.totalPrice = totalPrice.toFixed(1);
    },
    handleCountChange(index,row) {
      //商品数量改变时，重新计算总数量和总价格
      const isSelected = this.selectedRows.includes(row);
      if (isSelected) {
        this.calculatePrice()
      }
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1);
        this.handleCountChange();
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleDeleteAll() {
      this.$confirm('此操作将永久删除所有选中的商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.selectedRows.forEach(item => {
          const index = this.tableData.indexOf(item)
          this.tableData.splice(index, 1)
        })
        this.calculatePrice();

        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSelectionChange(selection){
      //循环选中列表,如果选中则计算总数量和总价格
      this.selectedRows = selection;
      this.calculatePrice();
    }



  }

}
</script>
<style lang="less" scoped>
.cartPage {
  background-color: #fff;
}

.item-info {
  display: flex;
  align-items: center;
}

.counterPrice {
  font-size: 16px;
}

.retailPrice {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}

.cartSum {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top: 1px solid #eee;

  .cartSum-left {
    display: flex;
    align-items: center;

    .el-checkbox-group {
      margin-right: 20px;
    }
  }

  .cartSum-right {
    display: flex;
    align-items: center;

    .cartSum-count {
      color: #f60;
      font-size: 16px;
      margin: 0 5px;
    }

    .cartSum-price {
      color: #f60;
      font-size: 16px;
      margin: 0 5px;
    }
  }
}
</style>