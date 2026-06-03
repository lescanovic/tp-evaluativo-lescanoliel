import { createRouter, createWebHistory } from "vue-router"

import ProductsView from "@/Views/ProductsView.vue"
import CartView from "@/Views/CartView.vue"
import UsersView from "@/Views/UsersView.vue"

import UserDetailView from "@/Views/UserDetailView.vue"
import UserEditView from "@/Views/UserEditView.vue"
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
  },

  {
    path: "/users/:id",
    component: UserDetailView
  },

  {
    path: "/users/:id/edit",
    component: UserEditView
  },

]

export default createRouter({
  history: createWebHistory(),
  routes
})