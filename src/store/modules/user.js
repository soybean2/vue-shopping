export default {
  // 开启命名空间,这样就可以在不同的模块中使用相同的方法名
  namespaced: true,
  // 状态
  state: () => {
    return {
      userinfo: {
        username: "",
        password: "",
      },
    };
  },

  // 同步操作
  mutations: {
    updateUser(state, payload) {
      state.userinfo.username = payload[0];
      state.userinfo.password = payload[1];
      },
      
    logout(state) {
      console.log(111);
        state.userinfo.username = "";
        state.userinfo.password = "";
      }
  },

  // 异步操作
  action: {
    
  },
};