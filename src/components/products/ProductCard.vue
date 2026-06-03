<script setup lang="ts">
import type { Product } from "@/models/Product"
const props = defineProps<{
  product: Product
}>()

//father component: ProductsView.vue

const emit = defineEmits<{ //i comunicate to the parent component that the user wants to add a
// product to the cart, and i send the product as a parameter.
  (e:"add-to-cart", product:Product): void
  //add-to-cart is the name of the event
}>()

const addProduct = () => { //function for the button, when the user click on the button, 
// it will emit the event to the parent component, and show an alert to the user.

  console.log("CLICK") //shows in the console that the button was clicked, to check if the function is working.

  emit("add-to-cart", props.product) //emit the event to the parent component, and send the product as a parameter, to add it to the cart.
  alert("Producto agregado al carrito") //alert to the user, to show that the product was added to the cart.
}


</script>

<template>
  <div class="bg-white shadow-md rounded-xl p-5 w-64">

  <img
    :src="product.image" 
    :alt="product.name"
    class="h-56 w-full object-cover rounded-md"
  /> <!--- Image of the product, it is a prop that receives the product from the parent component. --->

  <h2 class="font-bold text-xl mt-4">
    {{ product.name }}
  </h2> <!--- Name of the product, it is a prop that receives the product from the parent component. --->

  <p class="text-gray-500">
    {{ product.description }}
  </p> <!--- Description of the product, it is a prop that receives the product from the parent component. --->

  <p class="text-2xl font-bold mt-2">
    ${{ product.price }} 
  </p>

  <p>
    Stock: {{ product.stock }}
  </p>

  <!-- Button whit the event -->
  <button
    @click="addProduct" 
    
    class="bg-gray-400 text-white px-4 py-2 rounded-full mt-4 w-full hover:bg-gray-600"
  
  >

    Agregar al carrito
    
  </button>

  </div>

</template>