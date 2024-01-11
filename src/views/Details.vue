<template>
  <AppTopNav/>
  <Header/>

  <div class="app w">
    <div class="left">
      <el-image :src="item.listPicUrl" :fit="fit" class="left-img"/>
    </div>
    <div class="right">
      <h2 class="title">{{ item.name }}</h2>
      <p class="discribe">{{ item.simpleDesc }}</p>
      <div class="right-bottom">
        <p class="price">价格：<span class="num">{{ item.retailPrice }}</span> <span
            class="op">￥ {{ item.counterPrice }}</span></p>
        <p class="youhui">限制: 可使用优惠券</p>
        <p class="youfei">免邮: 可配送全球</p>
        <p class="peisong">配送 至 宁波市海曙区</p>
        <p class="service">服务
          ･ 支持7天无理由退货（一次性包装破损不支持）</p>
        <el-button type="warning" plain class="btn">立即购买</el-button>
        <el-button type="warning" plain class="btn" style="background-color:#75523a;" @click="addToCart">加入购物车</el-button>

      </div>
    </div>
  </div>

  <div class="detail w">
    <a class="goodDetail" @click="showDetails = true">详情</a>
    <a class="comments" @click="showDetails = false">评价</a>
    <div class="itemDetail w" v-if="showDetails && item.itemDetail && item.itemDetail.detailHtml"
         v-html="item.itemDetail.detailHtml"></div>
    <DetailsComment :id="id" v-else/>
  </div>
  <Footer/>

</template>

<script>
import AppTopNav from "@/components/AppTopNav.vue";
import Footer from "@/components/Footer.vue";
import AppHeaderNav from "@/components/AppHeaderNav.vue";
import Header from "@/components/Header.vue";
import axios from "axios";
import {ref} from "vue";
import DetailsComment from "@/components/DetailsComment.vue";
import {mapMutations, useStore} from "vuex";
import {useRoute} from "vue-router";

export default {

  data() {
    return {
      fit: 'cover',
    }
  },
  methods: {
    ...mapMutations(['cart/addToCart']),
  },
  components: {
    Header,
    AppHeaderNav,
    Footer,
    AppTopNav,
    DetailsComment
  },

  setup(props) {
    const route = useRoute()
    const id = route.query.id
    const item = ref({});
    const showDetails = ref(true)
    //发送请求
    // https://you.163.com/item/detail.json?id=${id}
    axios.get(`/api/item/detail.json?id=${id}`)
        .then(response => {
          item.value = response.data.item
        })
        .catch(error => {
          console.error(error)
        });
    const store = useStore();
    const addToCart = () => {
      item.value.count = 1
      console.log(item.value)
      store.commit('cart/addToCart', item.value);
      // store.commit('cart/addToCart', item.value);
      // this.$message({
      //   type: 'success',
      //   message: '添加成功!'
      // });
    };

    return {id, item, showDetails,addToCart};
  },


}
</script>

<style scoped lang="less">
.app {
  position: relative;
  height: 500px;
  background-color: #fff;

  .left-img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 450px;
    height: 450px;
  }

  .right {
    position: absolute;
    top: 10px;
    left: 500px;
    width: 500px;
    height: 450px;

    .title {
      margin-top: 30px;
    }

    .discribe {
      width: 520px;
      font-size: 14px;
      line-height: 20px;
      color: #999;
    }

    .right-bottom {
      width: 520px;
      height: 300px;
      background-color: #f5f3ef;


      .price {
        font-size: 14px;
        margin-top: 10px;
        padding-top: 10px;
        margin-left: 20px;
        line-height: 30px;

        .num {
          font-size: 25px;
          color: #f60;
        }

        .op {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }
      }

      .youhui {
        margin-top: 15px;
        margin-left: 20px;
        font-size: 14px;
      }

      .youfei {
        margin-top: 15px;
        margin-left: 20px;
        font-size: 14px;
      }

      .peisong {
        margin-top: 15px;
        margin-left: 20px;
        font-size: 14px;
      }

      .service {
        margin-top: 15px;
        margin-left: 20px;
        font-size: 14px;
      }

      .btn {
        margin-top: 30px;
        margin-left: 20px;
        width: 200px;
        height: 40px;
        font-size: 14px;
      }
    }
  }
}

.itemDetail {
  margin-top: 30px;
  background-color: #fff;
  font-size: 14px;
  line-height: 20px;
}

.goodDetail, .comments {
  cursor: pointer;
  border: 1px solid #ccc;
  display: inline-block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  color: #b4a078;
}


</style>