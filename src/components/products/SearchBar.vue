<script setup lang="ts">

defineProps<{
  search: string
}>()



</script>

<template>

  <input
    :value="search"
    type="text"
    placeholder="Buscar producto..."
    class="border p-3 rounded-xl w-full"
  />

</template>