<template>
  <NuxtLink :href="href">
    <Icon
      :name="name"
      class="h-9 w-9 dark:hover:text-primary hover:bg-neutral p-1 rounded-md transition-all hover:text-secondary"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ name: string; href: string }>();
</script>
