<template>
  <div class="my-header w">
    <div class="header-top">
      <h1 class="logo">
        <router-link to="/"></router-link>
      </h1>
      <div class="center">
        <div class="center-search">
          <input v-model="content" name="keyword" placeholder="请输入商品" type="text">
          <button class="search-btn" @click="search">搜索</button>
        </div>

        <ul class="center-navs">
          <li><router-link to="/main?keyword=睡衣">睡衣</router-link></li>
          <li><router-link to="/main?keyword=咖啡">咖啡</router-link></li>
          <li><router-link to="/main?keyword=牙膏">牙膏</router-link></li>
          <li><router-link to="/main?keyword=行李箱">行李箱</router-link></li>
          <li><router-link to="/main?keyword=牛奶">牛奶</router-link></li>
          <li><router-link to="/main?keyword=口罩">口罩</router-link></li>
          <li><router-link to="/main?keyword=茶">茶</router-link></li>
          <li><router-link to="/main?keyword=匠心工厂">匠心工厂</router-link></li>

        </ul>
      </div>
      <div class="cart">
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche" style="color: red"></i>
          <span style="color: red;padding: 0 5px">我的购物车</span>
          <div class="em">{{cartCount}}</div>
        </router-link>

      </div>
    </div>
    <AppHeaderNavVue></AppHeaderNavVue>

  </div>
</template>

<script>
import AppHeaderNavVue from './AppHeaderNav.vue'
import {mapGetters, useStore} from 'vuex'
import {computed, ref} from "vue";
import cart from "../store/modules/cart";

export default {
  components: {
    AppHeaderNavVue
  },
  data() {
    return {
      content: ''
    }
  },

  setup() {
    const store = useStore()
    const num = ref(store.state.cart.cartList.result.length)
    const cartCount = computed(() => store.getters['cart/cartCount']);
    return {store,num,cartCount}
  },
  methods: {
    search() {
      this.$router.push({path: '/main', query: {keyword: this.content}})
    }
  }
}
</script>

<style lang="less" scope>

.my-header {
  height: 120px;
  padding: 20px 0 0;
  // background-color: #fff;
  .header-top {
    display: flex;

    .logo {
      width: 230px;
      height: 60px;

      a {
        display: inline-block;
        height: 60px;
        width: 100%;
        background-image: url("../assets/images/sui.png");
      }
    }

    .center {
      margin-left: 30px;
      flex: 1;

      .center-search {
        width: 540px;
        height: 35px;

        input {
          width: 440px;
          height: 35px;
          border: 1px solid #e1251b;
          border-radius: 20px 0 0 20px;
          padding-left: 15px;
          box-sizing: border-box;
        }

        .search-btn {
          float: right;
          width: 100px;
          height: 35px;
          color: #fff;
          background-color: #e1251b;
          border-radius: 0 20px 20px 0;
          border: 0;
          font-size: 16px;
          cursor: pointer;
        }
      }

      .center-navs {
        width: 540px;

        li {
          float: left;
          height: 32px;
          padding: 5px;

          a {
            padding: 0 5px;
            border-right: 1px solid #adabab;

            &:hover {
              color: #e1251b;
            }
          }

        }

        li:last-child a {
          border-right: 0;
        }
      }

    }

    .cart {
      box-sizing: border-box;
      width: 150px;
      height: 35px;
      line-height: 35px;
      //border-radius: 20px;
      border: 1px solid #adabab;
      font-size: 16px;
      text-align: center;

      i {
        font-size: 16px;
      }

      .em {
        color: #fff;
        background-color: red;
        border-radius: 50%;
        padding: 5px;
        display: inline-block;
        width: 12px;
        height: 10px;
        line-height: 10px;

      }
    }
  }
}

</style>