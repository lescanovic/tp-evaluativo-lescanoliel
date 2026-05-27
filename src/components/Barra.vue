<script setup lang="ts">
</script>

<template>

<nav class="bg-gray-200 p-4 flex justify-between items-center">

    <div class="flex gap-10">

        <RouterLink to="/">
            Inicio
        </RouterLink>

        <RouterLink to="/products">
            Productos
        </RouterLink>

        <RouterLink to="/cart">
            Carrito
        </RouterLink>

        <RouterLink to="/users">
            Usuarios
        </RouterLink>

    </div>

    <div class="flex gap-5 text-3xl text-black">

        <i class="bi bi-person-fill"></i>
        <i class="bi bi-cart-fill"></i>

    </div>

</nav>

</template>