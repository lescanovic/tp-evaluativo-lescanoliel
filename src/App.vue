<script setup lang="ts">
import { computed, ref } from "vue"
import Navbar from "@/components/Barra.vue"
import SearchBar from "@/components/products/SearchBar.vue"
import ProductList from "@/components/products/ProductList.vue"
import { products } from "@/data/products"

const search = ref("")

const filteredProducts = computed(() => {

  return products.filter(product =>

    product.title
      .toLowerCase()
      .includes(search.value.toLowerCase())

  )

})

</script>

<template>

  <!-- NAVBAR -->
  <Navbar />

  <!-- CONTENIDO -->
  <main class="p-10 bg-gray-100 min-h-screen">

    <!-- BUSCADOR -->
    <div class="max-w-xl mx-auto mb-10">

      <SearchBar
        :search="search"
        @update:search="search = $event"
      />

    </div>

    <!-- PRODUCTOS -->
    <ProductList
      :products="filteredProducts"
    />

  </main>

</template>