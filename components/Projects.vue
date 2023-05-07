<template>
  <div class="bg-accent h-screen">{{ repos }}</div>
</template>

<script setup lang="ts">
const repos = await useFetch("/api/repos");
</script>
