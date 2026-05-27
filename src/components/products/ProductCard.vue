<script setup lang="ts">

import type { Product } from "@/models/Product"

defineProps<{
  product: Product
}>()
// Define the event that will be emitted when the "Add to Cart" button is clicked


</script>

<template>
  <div class="bg-white shadow-md rounded-xl p-5 w-64">

         <img :src="product.image"
         :alt="product.name"
         class="h-56 w-full object-cover rounded-md"
    />

    <!-- Title -->
    <h2 class="font-bold text-xl mt-4">
      {{ product.name }}
    </h2>

    <!-- Description -->
    <p class="text-gray-500">
      {{ product.description }}
    </p>

    <!-- Price -->
    <p class="text-2xl font-bold mt-2">
      ${{ product.price }}
    </p>

    <!-- Button -->
  <button

  class="bg-cyan-400 text-white px-4 py-2 rounded-full mt-4 w-full"
>
  Agregar al carrito
</button>

  </div>

</template>