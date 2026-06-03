<script setup lang="ts">
import { useRoute } from "vue-router"
import { computed } from "vue"
import { users } from "@/data/users"

const route = useRoute()

const id = Number(route.params.id)

const user = users.find(
    user => user.id === id
)
 
</script>

<template>
    <main class="p-10">

        <div v-if="user" class="bg-white shadow rounded-xl p-10 max-w-xl mx-auto">
             <h1 class="text-3xl font-bold mb-5">
      Detalle Usuario
    </h1>

    <p class="mb-3">
      <strong>ID:</strong>
      {{ user.id }}
    </p>

    <p class="mb-3">
      <strong>Nombre:</strong>
      {{ user.name }}
    </p>

    <p class="mb-5">
      <strong>Email:</strong>
      {{ user.email }}
    </p>

    <RouterLink
      to="/users"
      class="bg-cyan-500 text-white px-5 py-3 rounded-xl"
    >
      Volver
    </RouterLink>
        </div>

          <div v-else>

    <h1 class="text-2xl">
      Usuario no encontrado
    </h1>

  </div>
    </main>
    </template>