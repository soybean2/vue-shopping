<template>
  <div class="content-main w">
    <div class="grid-container">
      <div class="grid-item" v-for="(item, index) in goods" :key="index">
        <router-link :to="{path: '/details', query: {id: item.id}}">
          <img :src="item.listPicUrl" alt="">
          <p class="name">{{item.name}}</p>
          <span class="price">￥{{item.retailPrice}} </span><span class="counterPrice"> ￥{{item.counterPrice}}</span>
        </router-link>
        <br/>
        <el-button type="warning" class="add">加入购物车</el-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    goods: Array
  },
  data() {
    return {

    }
  },
  setup(props) {
    const goods = props.goods;
    console.log(goods)
  }

}
</script>

<style lang="less" scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr) ;
    grid-gap: 20px;
    background-color: #fff;
    margin-top: 30px;
  }

  .grid-item {
    img{
      margin-left: 10px;
      width: 245px;
      height: 245px;
    }
    .name{
      margin-left: 10px;
      font-size: 14px;
      color: #333;
      margin-top: 10px;
      text-align: center;
    }

    .price{
      color: red;
      font-size: 14px;
      margin-left: 90px;
    }
    .counterPrice{
      color: #999;
      font-size: 14px;
      text-decoration: line-through;
    }
    .add{
      margin-left: 90px;
      margin-top: 10px;
    }
  }
</style>