<template>
  <ClientOnly>
    <button class="h-8 w-8" @click="toggleTheme">
      <Icon
        :name="theme == 'light' ? 'uil:moon' : 'uil:sunset'"
        class="h-8 w-8 dark:hover:text-primary hover:bg-neutral p-1 rounded-md transition-all hover:text-secondary"
      />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(true);
});
const theme = useTheme();

const toggleTheme = () => {
  themeChange(false);
  if (theme.value == "dark") {
    theme.value = "light";
  } else {
    theme.value = "dark";
  }
  themeChange(false);
};
</script>
