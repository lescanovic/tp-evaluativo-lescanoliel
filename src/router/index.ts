import { createRouter, createWebHistory } from "vue-router"

import ProductsView from "@/Views/ProductsView.vue"
import CartView from "@/Views/ProductsView.vue"
import UsersView from "@/Views/UsersView.vue"

const routes = [

  {
    path: "/",
    component: ProductsView
  },

  {
    path: "/products",
    component: ProductsView
  },

  {
    path: "/cart",
    component: CartView
  },

  {
    path: "/users",
    component: UsersView
  }

]

export default createRouter({
  history: createWebHistory(),
  routes
})