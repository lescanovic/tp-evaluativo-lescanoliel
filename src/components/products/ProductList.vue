<script setup lang="ts">

import ProductCard from "./ProductCard.vue"
import type { Product } from "@/models/Product.ts"

defineProps<{
  products: Product[]
}>()
const emit = defineEmits<{
  (e:"add-to-cart", product:Product): void
}>()
</script>

<template>

  <div class="flex gap-10 flex-wrap justify-center">

 <ProductCard
  v-for="product in products"
  :key="product.id"
  :product="product"
  @add-to-cart="emit('add-to-cart', $event)"
/>

  </div>

</template>