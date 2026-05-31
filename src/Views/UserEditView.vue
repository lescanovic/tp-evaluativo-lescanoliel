<script setup lang="ts">

import { ref } from "vue"

import { useRoute, useRouter } from "vue-router"

import { users } from "@/data/users"

const route = useRoute()

const router = useRouter()

const id = Number(route.params.id)

const user = users.find(
  user => user.id === id
)

const name = ref(user?.name || "")

const email = ref(user?.email || "")

const updateUser = () => {

  if(!user) return

  if(name.value.trim() === ""){

    alert("Nombre requerido")
    return

  }

  if(email.value.trim() === ""){

    alert("Email requerido")
    return

  }

  user.name = name.value
  user.email = email.value

  router.push("/users")

}

</script>

<template>

<main class="p-10">

  <div
    v-if="user"
    class="bg-white shadow rounded-xl p-10 max-w-xl mx-auto"
  >

    <h1 class="text-3xl font-bold mb-5">
      Editar Usuario
    </h1>

    <input
      v-model="name"
      type="text"
      placeholder="Nombre"
      class="border p-3 rounded-xl w-full mb-5"
    />

    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="border p-3 rounded-xl w-full mb-5"
    />

    <button
      @click="updateUser"
      class="bg-yellow-500 text-white px-5 py-3 rounded-xl"
    >
      Guardar cambios
    </button>

  </div>

  <div v-else>

    <h1 class="text-2xl">
      Usuario no encontrado
    </h1>

  </div>

</main>

</template>