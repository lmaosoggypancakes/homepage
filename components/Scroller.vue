<template>
  <div
    class="h-screen grid grid-flow-row grid-rows-5 lg:grid-flow-col lg:grid-cols-5 lg:grid-rows-1 overflow-y-auto px-18 z-10 bg-neutral"
  >
    <div class="flex lg:flex-col justify-around items-center">
      <Icon name="uil:headphones" class="h-16 w-16" />
      <Divider />
      <Icon name="uil:code-branch" class="h-16 w-16 text-accent" />
      <Divider />
      <Icon name="uil:home" class="h-16 w-16" />
    </div>
    <div
      class="row-span-4 lg:col-span-4 h-screen overflow-y-auto"
      ref="scrollerRef"
    >
      <div class="h-[300vh] text-3xl text-accent">
        <About />
        <div class="h-screen">Projects</div>
        <div class="h-screen">Contact</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollerRef = ref<HTMLElement | null>(null);
const scroll = useScroll(scrollerRef, { behavior: "smooth" });
const windowScroll = useWindowScroll();
const reachedBottom = ref(false);
watch(windowScroll.y, (y) => {
  if (!scrollerRef.value) {
    return;
  }
  if (y > scrollerRef.value.offsetTop && !reachedBottom.value) {
    document.body.classList.add("overflow-hidden");
    scrollerRef.value.click();
  }
});

watch(scroll.y, (y) => {
  if (!scrollerRef.value) return;
  if (y >= scrollerRef.value.scrollHeight - scrollerRef.value.clientHeight) {
    reachedBottom.value = true;
    document.body.classList.remove("overflow-hidden");
  }
});
const skills = ref<{ icon: string; name: string }[]>([
  {
    icon: "bxl:html5",
    name: "HTML",
  },
  { icon: "bxl:css3", name: "CSS" },
  {
    icon: "bxl:typescript",
    name: "TypeScript",
  },
  {
    icon: "bxl:vuejs",
    name: "Vue",
  },
  {
    icon: "bxl:tailwind-css",
    name: "TailwindCSS",
  },
  {
    icon: "bxl:visual-studio",
    name: "VSCode",
  },
  {
    icon: "bxl:postgresql",
    name: "PostgreSQL",
  },

  {
    icon: "bxl:react",
    name: "React.js",
  },
  { icon: "bxl:git", name: "Git" },
  {
    icon: "bxl:python",
    name: "Python",
  },
  {
    icon: "bxl:discord",
    name: "Discord.js",
  },
  {
    icon: "bxl:docker",
    name: "Docker",
  },
  {
    icon: "bxl:heroku",
    name: "Heroku",
  },
  {
    icon: "bxl:aws",
    name: "AWS",
  },
  { icon: "bxl:tux", name: "Linux" },
  {
    icon: "bxl:firebase",
    name: "Firebase",
  },
]);
</script>
