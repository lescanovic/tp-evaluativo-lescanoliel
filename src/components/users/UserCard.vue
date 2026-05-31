<script setup lang="ts">
import type { User } from "@/models/User"
import { RouterLink } from "vue-router"
import { users } from "@/data/users"

defineProps<{
    user: User
}>()

const emit = defineEmits<{
    (e:"delete-user",
        id:number): void
    
}>()



</script>

<template>
<div class="bg-white p-5 rounded-xl shodow w-72">
    <h2 class="text-2x1 font-bold">
        {{ user.name }}
    </h2>

    <p class="text-gray-500 mt-2">
        {{user.email}}
    </p>

    <button @click="emit('delete-user', user.id)"
    class="bg-red-500 text-white px-4 py-2 rounded-xl mt-5"
  >
    Eliminar
  </button>

   <RouterLink
      :to="`/users/${user.id}`"
      class="bg-cyan-500 text-white px-4 py-2 rounded-xl"
    >
      Ver
    </RouterLink>

  <RouterLink
  :to="`/users/${user.id}/edit`"
  class="bg-yellow-500 text-white px-4 py-2 rounded-xl">
  Editar
</RouterLink>

    


</div>

</template>