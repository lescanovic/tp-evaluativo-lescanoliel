<script setup lang="ts">

import { cart } from "@/data/cart"

</script>

<template>

<main class="p-10">

    <h1 class="text-3xl font-bold mb-5">
        Carrito
    </h1>

    <div
        v-for="item in cart"
        :key="item.product.id"
        class="bg-white p-5 rounded-xl mb-4"
    >

        <h2 class="text-xl font-bold">
            {{ item.product.name }}
        </h2>

        <p>
            Cantidad: {{ item.quantity }}
        </p>

        <p>
            Precio: ${{ item.product.price }}
        </p>

    </div>

</main>

</template>