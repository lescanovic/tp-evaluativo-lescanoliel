<script setup lang="ts">
import { ref } from "vue"
import UserForm from "@/components/users/UserFrom.vue"
import UserList from "@/components/users/UserList.vue"
import { users as initialUsers } from "@/data/users.ts"
import type { User } from "@/models/User"


const users = ref<User[]>(initialUsers)
const addUser = (user: User) => {

  users.value.push(user)

}
const deleteUser = (id:number) => {
  users.value = users.value.filter(
    user => user.id !== id
  )

}
</script>

<template>
<main class="p-10">

  <UserForm
    @add-user="addUser"
  />

  <UserList
    :users="users"
    @delete-user="deleteUser"
  />

</main>

</template>