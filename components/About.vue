<template>
  <div class="h-[80vh] grid grid-cols-2">
    <div>
      <h1 class="text-5xl font-extrabold text-secondary mb-4">About Me</h1>
      I've been programming
    </div>
    <div>
      <ul
        class="flex flex-row justify-center items-center max-w-24 gap-x-4 gap-y-4 flex-wrap relative"
      >
        <li v-for="(skill, index) in skills">
          <Icon
            :name="skill.icon"
            class="h-12 w-12 hover:pb-2 hover:text-secondary transition-all"
            v-motion="{
              initial: { y: 100, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { delay: index * 50 + 250 },
              },
            }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
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
