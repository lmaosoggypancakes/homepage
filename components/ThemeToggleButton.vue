<template>
  <ClientOnly>
    <button class="h-8 w-8" @click="toggleTheme">
      <Icon
        :name="theme == 'dark' ? 'uil:moon' : 'uil:sunset'"
        class="h-8 w-8 dark:hover:text-primary hover:bg-neutral p-1 rounded-md transition-all hover:text-secondary"
      />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
const theme = useTheme();
onBeforeMount(() => {
  if (!theme.value) theme.value = "dark";
  document.documentElement.dataset.theme = theme.value;
});

const toggleTheme = () => {
  console.log(`from: ${theme.value}`);
  if (theme.value == "dark") {
    theme.value = "light";
  } else {
    theme.value = "dark";
  }
  document.documentElement.dataset.theme = theme.value;
  console.log(`to: ${theme.value}`);
};
</script>
