
import { getCategoryList } from "@/api/index"
import { topCategory } from "@/utils/constants";

export default {
  // 开启命名空间,这样就可以在不同的模块中使用相同的方法名
  namespaced: true,
  // 状态
  state: () => {
    return {
      cateList: topCategory,
    };
  },

  // 同步操作
  mutations: {
    setList(state, payload) {
      state.cateList = payload;
    },
  },

  // 异步操作
  action: {
    //请求后台，加载分类数据
    async getAllCategory({ commit }) {
      try {
        // 发送请求，请求所有分类类别
        const res = await getCategoryList();
        console.log(res);
        if (res.code === "200") {
          commit("setList", res.data.cateList);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
