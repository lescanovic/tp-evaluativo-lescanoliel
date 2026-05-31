<script setup lang="ts">

import UserCard from "./UserCard.vue"

import type { User } from "@/models/User"

defineProps<{
  users: User[]
}>()

const emit = defineEmits<{
  (e:"delete-user", id:number): void
}>()

</script>

<template>

<div class="flex flex-wrap gap-5">

  <UserCard

    v-for="user in users"
    :key="user.id"
    :user="user"

    @delete-user="emit('delete-user', $event)"

  />

</div>

</template>