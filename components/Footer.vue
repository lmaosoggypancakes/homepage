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
      <IconLink href="https://github.com/lmaosoggypancakes" name="uil:github" />
      <IconLink
        href="https://linkedin.com/in/josefmacera"
        name="uil:linkedin"
      />
      <IconLink href="mailto:macerajosef@gmail.com" name="uil:envelope" />
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
