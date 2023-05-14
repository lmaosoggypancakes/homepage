<template>
  <div class="flex flex-col space-y-32 lg:w-5/6">
    <Hero />
    <About />
    <!-- <Projects /> -->
    <Contact />
  </div>
</template>

<script setup lang="ts">
onBeforeMount(() => {
  if (!localStorage.theme) localStorage.setItem("theme", "dark");
});
definePageMeta({
  layout: "landing",
});
</script>
