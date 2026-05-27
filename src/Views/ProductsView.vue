<script setup lang="ts">

import { computed, ref } from 'vue'

import SearchBar from '@/components/products/SearchBar.vue'
import ProductList from '@/components/products/ProductList.vue'
import { cart } from "@/data/cart"
import { products } from '@/data/products'



import type { Product } from '@/models/Product'

const search = ref("")



const filteredProducts = computed(() => {

    return products.filter(product =>
        product.name
            .toLowerCase()
            .includes(search.value.toLowerCase())
    )

})

const addToCart = (product: Product) => {

    const item = cart.value.find(

        item => item.product.id === product.id
    )

    if(item){

        if(item.quantity >= product.stock){

            alert(
                `No hay suficiente stock para agregar más de ${product.name} al carrito.`
            )

            return
        }

        item.quantity++

    } else {

        cart.value.push({
            product,
            quantity: 1
        })

    }
console.log(cart.value)
}

</script>

<template>

<main class="p-10 bg-gray-100 min-h-screen">

    <div class="max-w-xl mx-auto mb-10">

        <SearchBar
            :search="search"
            @update:search="search = $event"
        />

    </div>

    <ProductList
        :products="filteredProducts"
        @add-to-cart="addToCart"
    />

</main>

</template>