<template>
<div class="top-nav w">
  <ul class="header-nav">
    <li>
      <router-link to="/">首页</router-link>
      <!-- 弹出层 -->
      <div class="layer">
        <ul>
          <li>
            <a href="#">
              <img src="@/assets/logo.png" alt="">
              </a>
              <div>商品名称</div>
            </li>
        </ul>
      </div>
      </li>
    <li><a href="#">居家生活</a></li>
    <li><a href="#">宠物生活</a></li>
    <li><a href="#">服饰鞋包</a></li>
    <li><a href="#">美食酒水</a></li>
    <li><a href="#">个护清洁</a></li>
    <li><a href="#">母婴亲子</a></li>
    <li><a href="#">运动旅行</a></li>
    <li><a href="#">数码家电</a></li>
  </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>

.header-nav{
  height: 40px;
}


li{
  position: relative;
    float: left;
    padding: 0 10px;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    // 选中高亮
    .router-link-exact-active {
      color: #cc9756;
        border-bottom: 2px solid #cc9756;
    }
    a{
        padding-bottom: 8px;
    }
    a:hover{
        color: #cc9756;
        border-bottom: 2px solid #cc9756;
        
    }
    .layer{
      display: none;
      position: absolute;
      background-color: #fff;
      box-shadow: 0 0 5px #ccc;
      padding: 10px;
      width: 1100px;
      height: 130px;

      ul{
        li{
          height: 70px;

          a{
            border-bottom:0 ;
          }
          img{
            width: 50px;
            height: 50px;
            text-align: center;
          }
          &:hover{
            background-color: #f7f7f7;
          }
        }
      }

    }
    
}
</style>                                                           