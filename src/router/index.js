import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home/Home.vue'
//按需加载
const Login = () => import('@/views/Login.vue')


const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/cart/Cart.vue"),
  },
  {
    path: "/details",
    name: "details",
    component: () => import("@/views/Details.vue"),

  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/Main.vue"),
  }
];

const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes
})

export default router
