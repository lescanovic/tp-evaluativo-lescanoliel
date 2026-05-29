<script setup lang="ts">

import { computed, ref } from 'vue'

import SearchBar from '@/components/products/SearchBar.vue'
import ProductList from '@/components/products/ProductList.vue'
import { cart } from "@/data/cart"
import { products } from '@/data/products'



import type { Product } from '@/models/Product'

const search = ref("") //search is a reactive variable that will store 
// the value of the search input, it is initialized as an empty string.



const filteredProducts = computed(() => { //Create a list that updates itself .

    return products.filter(product => //Browse all the products.
        product.name //Access the name of the product 
            .toLowerCase() //convert the name to lowercase 
            .includes(search.value.toLowerCase())  //check if the name contains what the user typed.
    )

})

//if the user write "camp", and at the list there is a product called "Campera", it will be shown in the list, because "campera" includes "camp"

const addToCart = (product: Product) => { //function to add a product to the cart, it receives a product as a parameter.(price, name, stock, etc)

    const item = cart.value.find( //find if the product is already in the cart, using the id to compare.

        item => item.product.id === product.id //compares the id of the product with the id of the products in the cart
    )

    if(item){ //if the product is already in the cart, increase the quantity by 1.

        if(item.quantity >= product.stock){ //if the quantity is bigger than the stock, show an alert and return, to avoid adding more products than the stock.

            alert(
                `No hay suficiente stock para agregar más de ${product.name} al carrito.`
            )

            return
        }

        item.quantity++ //if the quantity is less than the stock, increase the quantity by 1.

    } else {
//if the product is not in the cart, add it to the cart with a quantity of 1.
        cart.value.push({ //push a new item to the cart, with the product and a quantity of 1.
            product, 
            quantity: 1
        })

    }
    console.log(cart.value) //log the cart to the console, to see the changes when we add products.
}

</script>

<template>

<main class="p-10 bg-gray-100 min-h-screen">

    <div class="max-w-xl mx-auto mb-10">

        <SearchBar 
            :search="search"
            @update:search="search = $event"
        /> <!--- Search Bar --->

    </div>

    <ProductList
        :products="filteredProducts"
        @add-to-cart="addToCart"
    /> <!--- Product List --->

</main>

</template>