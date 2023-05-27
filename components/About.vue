<template>
  <div class="min-h-[80vh] grid md:grid-cols-2" id="about">
    <div
      v-motion="{
        initial: { x: -200, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
        },
      }"
    >
      <h1 class="text-5xl font-extrabold text-secondary mb-4">About Me</h1>
      I'm a self-taught developer who loves nothing more than learning new
      things and passing on what I know to others. I have a passion for app
      development and building AI projects, as well as supporting the
      open-source community. In my spare time, I enjoy building computers,
      ricing Linux machines, and praticing martial arts.
      <br />
      <br />
      I'll be attending Carnegie Mellon Univerisity in the fall, where I plan to
      study electrical and computer engineering. Feel free to reach out! :)
    </div>
    <div>
      <h1 class="text-2xl font-extrabold text-secondary mb-4 mt-4">Skills</h1>
      <ul
        class="flex flex-row justify-center items-center max-w-24 gap-x-4 gap-y-4 flex-wrap relative"
      >
        <li v-for="(skill, index) in skills">
          <Icon
            :name="skill.icon"
            class="h-12 w-12 hover:pb-2 text-primary transition-all"
            v-motion="{
              initial: { y: 100, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { delay: index * 50 },
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
