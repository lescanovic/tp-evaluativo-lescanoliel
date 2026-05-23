<script setup lang="ts">

import type { Product } from "@/models/Product"

defineProps<{
  product: Product
}>()

</script>

<template>

  <div class="bg-white shadow-md rounded-xl p-5 w-64">

    <!-- IMAGEN -->
    <img :src="product.image"
         :alt="product.title"
         class="h-56 w-full object-cover rounded-md"
    />

    <!-- TITULO -->
    <h2 class="font-bold text-xl mt-4">
      {{ product.title }}
    </h2>

    <!-- DESCRIPCION -->
    <p class="text-gray-500">
      {{ product.description }}
    </p>

    <!-- PRECIO -->
    <p class="text-2xl font-bold mt-2">
      ${{ product.price }}
    </p>

    <!-- BOTON -->
    <button
      class="bg-cyan-400 text-white px-4 py-2 rounded-full mt-4 w-full"
    >
      Agregar al carrito
    </button>

  </div>

</template>