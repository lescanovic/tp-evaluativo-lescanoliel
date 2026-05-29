<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>

<<<<<<< HEAD
<nav class="bg-white p-4 flex justify-between items-center">

=======
  <nav class="bg-gray-200 p-4 flex justify-between items-center">
    
>>>>>>> 51fdc77ceaadd70609217c4e571deb1ef38cf48b
    <div class="flex gap-10">

        <RouterLink to="/">
            Inicio
        </RouterLink>

        <RouterLink to="/products">
            Productos
        </RouterLink>

<<<<<<< HEAD
       
=======

>>>>>>> 51fdc77ceaadd70609217c4e571deb1ef38cf48b

    </div>

    <div class="flex gap-5 text-3xl text-black">
  <RouterLink to="/users">
         <i class="bi bi-person-circle text-4xl text-black"></i>
        </RouterLink>
        
            <RouterLink to="/cart">
               <i class="bi bi-cart-fill"></i>
        </RouterLink>
 

    </div>

</nav>

</template>
