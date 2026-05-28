<script setup lang="ts">
import { RouterLink } from "vue-router"
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



    </div>

    <div class="flex gap-5 text-3xl text-black">
  <RouterLink to="/users">
         <i class="bi bi-person-fill"></i>
        </RouterLink>
        
            <RouterLink to="/cart">
               <i class="bi bi-cart-fill"></i>
        </RouterLink>
 

    </div>

</nav>

</template>
