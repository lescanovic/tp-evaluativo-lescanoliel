<script setup lang="ts">
import { ref } from "vue"
import type { User } from "@/models/User"

const emit = defineEmits<{
    (e: "add-user", user: User): void

}>()

const name = ref("")
const email = ref("")

const saveUser = () => {

    if(name.value.trim() === ""){

    alert("Nombre requerido")
    return

  }

  if(email.value.trim() === ""){

    alert("Email requerido")
    return

  }

  emit("add-user", {

    id: Date.now(),
    name: name.value,
    email: email.value

  })

  name.value = ""
  email.value = ""

}
</script>

<template>
    <div class="mb-5">
    
        <h2 class="text-2xl mb-3">
        Crear Usuario 
        </h2>
    
        <input
        v-model="name"
        type="text"
        placeholder="Nombre"
        class="border p-3 rounded-xl mb-3 w-full"
        />
    
        <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="border p-3 rounded-xl mb-3 w-full"
        />
    
        <button
        @click="saveUser"
        class="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-600 transition-colors w-full"
        >
        Guardar
        </button>
    
    </div>
</template>