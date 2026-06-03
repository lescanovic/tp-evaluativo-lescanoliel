
<script setup lang="ts">
import { cart } from "@/data/cart"

// Delete product
const deleteProduct = (id: number) => { //find the producto usign the id
  const index = cart.value.findIndex( //inside the const, use value to access to the cart and find the index of the product using the id
    (item: any) => item.product.id === id //item: any parameter for the findIndex function
  )

  if (index !== -1) {  //if the product is found, return the index, if not, return -1
    cart.value.splice(index, 1) //if the index is different from -1, use splice to remove the product from the cart 
    //"index,1" means that we want remove one element starting from the index
  }
}

// Total
const total = () => { //constant for the total price
  return cart.value.reduce( //access to the cart using value and reduce the cart
    (acc: number, item: any) => //acc: nunber parameter for the accumulator, item: any parameter for the current item
      acc + item.product.price * item.quantity, //return the accumulator plus the price of the product multiplied by the quantity
    0
  )
}

// Discount 10%
const discount = () => { //calculate the discount, in this case, 10% of the total price
  return total() * 0.1 //multiply the total price by 0.1 to get the discount amount
}

// Final price
const finalPrice = () => {
  return total() - discount() //remove the discount from the total price to get the final price
}

//Add quantity function, for the plus button
const addQuantity = (id: number) => {  //find the product using the id
  const product = cart.value.find( //inside a constant, use value to access to the cart and find the product using the id
    (item: any) => item.product.id === id //if the product is found, return it, if not, return undefined
  )

  if (product) { //if the product is found, add 1 to the quantity
    product.quantity++
    if (product.quantity > product.product.stock) { //if the quantity is greater than the stock, set the quantity to the stock and show an alert
      alert(
        `No hay suficiente stock para agregar más de ${product.product.name} al carrito.`
      )
    }
  }
}

//this is the same function that the plus one, only changes the operator to minus and the alert message 
const removeQuatity = (id:number) => {
const product = cart.value.find(
    (item: any) => item.product.id === id
)
if (product) {
  product.quantity--
  if (product.quantity < 1) { //if the quantity is less than 1, delete the product from the cart.
    deleteProduct(id)
  }
}
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">

    <div class="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">

      <!-- Title -->
      <h1 class="text-3xl font-bold text-center mb-8">
        Carrito de Compras
      </h1>

      <!-- Header -->
      <div
        class="grid grid-cols-4 bg-gray-100 p-4 rounded-xl text-gray-600 font-semibold mb-5"
      >
        <p>Producto</p>
        <p class="text-center">Cantidad</p>
        <p class="text-center">Precio</p>
        <p class="text-center">Eliminar</p>
      </div>

      <!-- Products -->
      <div
        v-for="item in cart" 
        :key="item.product.id"
        class="grid grid-cols-4 items-center border-b border-gray-200 py-5"
      > <!--I go through all the items in the shopping cart for each product added, the div is repeated.-->

        <!-- Product -->
        <div class="flex items-center gap-4">

          <img
            :src="item.product.image"
            alt=""
            class="w-20 h-20 object-cover rounded-xl bg-gray-100"
          /> <!--Show the product image-->

          <div>
            <h2 class="font-semibold text-lg">
              {{ item.product.name }}
            </h2> <!--Show the product name-->

            <p class="text-gray-500 text-sm">
              Stock: {{ item.product.stock }}
            </p> <!--Show the product stock, to know how many products are available-->
          </div>
        </div>

        <!-- Quantity -->
        <div class="flex justify-center items-center gap-4">

          <!-- Using the remove quantity function -->
          <i @click="removeQuatity(item.product.id)" 
          class="bi bi-dash cursor-pointer text-gray-600"></i>

          <span
            class="bg-gray-100 w-9 h-9 rounded-full flex items-center justify-center"
          ><!-- Show the quantity -->
            {{ item.quantity }}
          </span>

            <!-- Using the add quantity function -->
          <i @click="addQuantity(item.product.id)" class="bi bi-plus cursor-pointer text-gray-600"></i>
        </div>

        <!-- Price -->
        <p class="text-center font-semibold">
          ${{ item.product.price }}
        </p>

        <!-- Using the delete product function -->
        <div class="flex justify-center">
          <i
            class="bi bi-trash text-red-500 cursor-pointer hover:text-red-700"
            @click="deleteProduct(item.product.id)"
          ></i>
        </div>
      </div>

      <!-- Totals -->
      <div class="grid grid-cols-3 gap-4 mt-8">

        <div class="bg-gray-100 p-5 rounded-xl">
          <p class="text-gray-500 mb-2">Total</p>

          <p class="text-2xl font-bold">
            <!-- Show the total price -->
            ${{ total() }}
          </p>
        </div>

        <div class="bg-gray-100 p-5 rounded-xl">
          <p class="text-gray-500 mb-2">Descuento 10%</p>

          <p class="text-2xl font-bold text-green-600">
            <!-- Show the discount amount -->
            -${{ discount() }}
          </p>
        </div>

        <div class="bg-gray-600 p-5 rounded-xl text-white">
          <p class="mb-2">Precio Final</p>
          <!-- Show the final price -->
          <p class="text-2xl font-bold">
            ${{ finalPrice() }}
          </p>
        </div>
      </div>

   

    </div>
  </div>
</template>

