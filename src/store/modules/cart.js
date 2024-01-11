import {cartItemList} from "@/utils/cart";
export default {
  namespaced: true,
  state: () => {
    return {
      cartList: cartItemList,
    };
  },
  mutations: {
    addToCart(state, item) {
      console.log("添加成功")
      state.cartList.countNum += 1;
      // state.cartList.totalPrice += item.price;
      state.cartList.result.push(item);
    },
    removeFromCart(state, itemId) {
      state.cartList = state.cartList.filter(item => item.id !== itemId);

    },
    updateCartItem(state, updatedItem) {
      const index = state.cartList.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        state.cartList.splice(index, 1, updatedItem);
      }
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addToCart', item);
    },
    removeFromCart({ commit }, itemId) {
      commit('removeFromCart', itemId);
    },
    updateCartItem({ commit }, updatedItem) {
      commit('updateCartItem', updatedItem);
    },
  },

  getters: {
    cartCount: (state) => {
      return state.cartList.result.length;
    },
  },
};
