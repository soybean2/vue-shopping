<template>
  <AppTopNav/>

  <div class="mylogin w">
    <div class="w">
      <div class="banner-bg"></div>
    </div>
    <div class="login-form">
      <div class="login_box">
        <!-- 头部 -->
        <div class="attention">随心购不会以任何理由要求您转账，谨防诈骗</div>
        <span class="mima">密码登录</span>
        <span class="yanzhengma">验证码登录</span>

        <!-- 登录表单区域 -->
        <el-form label-width="0px" class="login_form">
          <el-form-item>
            <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" v-model="form.password"></el-input>
          </el-form-item>
          <el-row justify="center">
            <el-form-item class="login_btn">
              <el-button type="primary" @click="login">登录</el-button>
              <el-button type="info">重置</el-button>
            </el-form-item>
          </el-row>
          <p style="font-size:14px;color:red">测试账号：admin 密码：123456</p>
        </el-form>

      </div>

    </div>

  </div>
  <Footer/>

</template>
<script>
import AppTopNav from '@/components/AppTopNav.vue'
import Footer from '@/components/Footer.vue'
import {ElMessage} from 'element-plus'
import {useStore} from 'vuex'
import store from '@/store'

export default {
  setup(props) {
    const store = useStore()
  },
  components: {
    AppTopNav,
    Footer
  },

  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if (this.form.username === "admin" && this.form.password === "123456") {
        ElMessage({
          message: '登录成功',
          type: 'success',
        })
        store.commit('user/updateUser', [this.form.username, this.form.password])
        this.$router.push('/')
      } else {
        ElMessage({
          message: '登录失败',
          type: 'error',
        })

      }

    }
  }
}
</script>
<style lang="less" scope>
.mylogin {
  position: relative;
  width: 100%;
  height: 475px;
  background-color: #e93854;

  .banner-bg {
    height: 475px;
    width: 100%;
    background: url(../assets/images/background.png) 0 0 no-repeat;

  }
  .mima{
    margin: 50px 10px;
    font-size: 16px;
    font-weight: 600;
    color: red;
  }

  .attention{
    padding-left: 20px;
    font-family: PingFang SC;
    font-size: 12px!important;
    font-weight: 400;
    letter-spacing: 0;
    text-align: left;
    color: #FF860D!important;
    line-height: 16px;
    margin-bottom: 30px;
  }

  .yanzhengma{
    margin: 10px 10px;
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }

  .login-form {
    position: absolute;
    top: 120px;
    right: 100px;
    width: 300px;
    height: 300px;
  }
}

.login_box {
  width: 350px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  top: 100px;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.login_btn {
  display: flex;
  justify-content: flex-start;
}


</style>