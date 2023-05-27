<template>
  <NuxtLink :to="to" class="text-primary-500 hover:underline">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
