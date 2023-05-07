<template>
  <div
    v-motion="{
      initial: {
        y: 100,
        opacity: 0,
      },
      enter: {
        y: 0,
        opacity: 1,
      },
    }"
  >
    Hello
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
</script>
