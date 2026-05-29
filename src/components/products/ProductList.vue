<script setup lang="ts">

import ProductCard from "./ProductCard.vue"
import type { Product } from "@/models/Product.ts"


//father component: ProductsView.vue
defineProps<{ //define the props that the component receives from the parent component, in this case, a list of products.
  products: Product[]
}>()
const emit = defineEmits<{ //i comunicate to the parent component that the user wants to add a product to the cart, and i send the product as a parameter.
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
/> <!--I go to product of the list products, i go through each one and when the user clicks the button, it will emit the event to the parent component-->

  </div>

</template>