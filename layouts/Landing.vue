<template>
  <div class="min-h-screen h-[200vh] w-screen">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import {} from "@vueuse/core";
import { themeChange } from "theme-change";

useHead({
  title: "Josef Macera's Homepage",
  meta: [
    {
      name: "description",
      content:
        "Hello! I'm Josef, avid programmer and open-source supporter. I love all things software development and enjoy working on personal and enterprise-level projects. I'm from Reno, Nevada and will be studying ECE and Carnegie Mellon University.",
    },
  ],
});
onMounted(() => {
  themeChange(false);
});
</script>
