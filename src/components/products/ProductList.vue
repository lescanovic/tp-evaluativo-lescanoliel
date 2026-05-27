<script setup lang="ts">

import ProductCard from "./ProductCard.vue"
import type { Product } from "@/models/Product"

defineProps<{
  products: Product[]
}>()

</script>

<template>

  <div class="flex gap-10 flex-wrap justify-center">

 <ProductCard
  v-for="product in products"
  :key="product.id"
  :product="product"

/>

  </div>

</template>