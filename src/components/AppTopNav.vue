<template>
    <div class="app-top-nav">
        <div class="w">
          <ul>
            <template v-if="userinfo.username !=''">
              <li>
              <a href="javascript:;">苏孝炅</a>
            </li>
            <li>
              <a href="javascript:;" @click="logout">退出登录</a>
            </li>
            </template>
            <li v-else>
              <router-link to="/login">登录</router-link>
            </li>
            <li>
              <a href="javascript:;">我的订单</a>
            </li>
            <li>
              <a href="javascript:;">会员中心</a>
            </li>

            <li>
              <a href="javascript:;">
                <i class="iconfont icon-shouji"></i>
                App</a>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default {


  setup(){
    const store = useStore()
    let userinfo = computed(() => store.state.user.userinfo)
    userinfo = ref(userinfo)
    console.log(userinfo.value.username)

    const logout = () => {
      console.log('退出登录')
      store.commit('user/logout')
    }

    return {userinfo, store, logout}
  }

  
}
</script>

<style lang="less" scoped>
.app-top-nav{
  background-color: #333;
  ul{
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: flex-end;

    li{
      a {
        padding: 0 10px;
        color: #ccc;
        border-left: 1px solid #666;

        &:hover{
          color: #fff;
        }
      }
    }

    li:first-child{
      a{
        border-left: 0;
      }
    }
  }
}


</style>