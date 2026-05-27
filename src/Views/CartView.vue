
<script setup lang="ts">

import { cart } from "@/data/cart"


//delete product from cart

const deleteProduct = (id: number) => { //i got the id of the product that a i want to delete
  const index = cart.value.findIndex( //find the index of the product in the cart
    (item: any) => item.product.id === id //i compare the id of the product with the id that i want to delete
  )

  if (index !== -1) {
    cart.value.splice(index, 1)
  }
}

</script>

<template>

<main class="p-10 bg-blue-50 min-h-screen">

    <h1 class="text-4xl font-bold mb-8 text-blue-900">
        Carrito
    </h1>

    <div
        v-for="item in cart"
        :key="item.product.id"
        class="bg-blue-100 border border-blue-200 p-5 rounded-xl mb-5 shadow-sm"
    >

        <h2 class="text-2xl font-semibold text-blue-900 mb-2">
            {{ item.product.name }}
        </h2>

        <p class="text-blue-700">
            Cantidad:
            <span class="font-medium">
                {{ item.quantity }}
            </span>
        </p>

        <p class="text-blue-700 mt-1">
            Precio:
            <span class="font-medium">
                ${{ item.product.price }}
            </span>
        </p>

  <i
              class="bi bi-trash text-red-500 cursor-pointer hover:text-red-700"
              @click="deleteProduct(item.product.id)"
            ></i>

            
<i class="bi bi-plus text-indigo-700 cursor-pointer hover:text-indigo-900"></i>
<i class="bi bi-dash text-red-500 cursor-pointer hover:text-red-700"></i>
    </div>

    <!-- Total price, discount and final price -->
    <div class="bg-blue-200 p-6 rounded-xl shadow-sm mt-8">

        <p class="text-lg text-blue-900 mb-2">
            Total:
            <span class="font-bold">
                <!-- calculo el precio total sumando los precios de cada producto multiplicados por la cantidad -->
                ${{ cart.reduce((total, item) => total + item.product.price * item.quantity, 0) }}
            </span>
        </p>

        <p class="text-lg text-blue-900 mb-2">
            Descuento:
            <span class="font-bold">
                <!-- Calculo descuento al total del precio, multiplicando por 0.1 (10%) -->
                ${{ cart.reduce((total, item) => total + item.product.price * item.quantity, 0) * 0.1 }}
            </span>
        </p>

        <p class="text-2xl font-bold text-blue-950 mt-4">
            <!-- Calculo el precio final restando el descuento al total -->
            Precio final:
            ${{ cart.reduce((total, item) => total + item.product.price * item.quantity, 0) - (cart.reduce((total, item) => total + item.product.price * item.quantity, 0) * 0.1) }}
        </p>

    </div>

</main>

</template>
```
