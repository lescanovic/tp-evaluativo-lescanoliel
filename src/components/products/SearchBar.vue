<script setup lang="ts">

defineProps<{
  search: string
}>()

const emit = defineEmits<{
  (e: "update:search", value: string): void
}>()

</script>

<template>

<input
  :value="search"
  @input="emit('update:search', ($event.target as HTMLInputElement).value)"
  type="text"
  placeholder="Buscar producto..."
  class="border p-3 rounded-xl w-full"
/>


</template>