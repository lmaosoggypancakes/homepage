<template>
  <footer
    class="footer justify-between items-center p-10 bg-neutral text-neutral-content"
  >
    <div class="footer-center">
      <p>© {{ new Date().getFullYear() }} Josef Macera</p>
    </div>
    <div
      class="grid-flow-col gap-4 md:place-self-center md:justify-self-end footer-end"
    >
      <NuxtLink href="https://github.com/lmaosoggypancakes">
        <Icon
          name="uil:github"
          class="h-8 w-8 hover:text-primary transition-all"
        />
      </NuxtLink>
      <NuxtLink href="https://linkedin.com/in/josefmacera">
        <Icon
          name="uil:linkedin"
          class="h-8 w-8 hover:text-primary transition-all"
        />
      </NuxtLink>
      <NuxtLink href="mailto:macerajosef@gmail.com">
        <Icon
          name="uil:envelope"
          class="h-8 w-8 hover:text-primary transition-all"
        />
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
