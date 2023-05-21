<template>
  <div class="flex flex-col space-y-32 lg:w-5/6">
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
</script>
