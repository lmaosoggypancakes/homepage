<template>
  <div class="h-[80vh] flex flex-col justify-center" id="projects">
    <div class="stack relative">
      <Project v-for="repo in repos" :project="repo" />
    </div>
  </div>
</template>

<script setup lang="ts">
const repos = (await useFetch("/api/repos").data).value as any;
</script>
