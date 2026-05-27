<script setup lang="ts">
import type { Product } from "@/models/Product"
const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  (e:"add-to-cart", product:Product): void
}>()

const addProduct = () => {

  console.log("CLICK")

  emit("add-to-cart", props.product)

}


</script>

<template>
  <div class="bg-white shadow-md rounded-xl p-5 w-64">

  <img
    :src="product.image"
    :alt="product.name"
    class="h-56 w-full object-cover rounded-md"
  />

  <h2 class="font-bold text-xl mt-4">
    {{ product.name }}
  </h2>

  <p class="text-gray-500">
    {{ product.description }}
  </p>

  <p class="text-2xl font-bold mt-2">
    ${{ product.price }}
  </p>

  <p>
    Stock: {{ product.stock }}
  </p>

  <button
    @click="addProduct"
    class="bg-cyan-400 text-white px-4 py-2 rounded-full mt-4 w-full hover:bg-cyan-600"
  >
    Agregar al carrito
  </button>

  </div>

</template>