<template>
  <div
    v-motion="{
      initial: { x: -200, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
      },
    }"
  >
    <h1 class="text-5xl font-extrabold text-secondary mt-64">Projects</h1>
  </div>
  <div
    class="grid lg:grid-flow-col xl:grid-cols-3 grid-cols-1 grid-flow-row lg:justify-between gap-y-36"
    id="projects"
  >
    <Project
      v-for="(repo, index) in repos"
      :project="repo"
      class="justify-self-center"
      v-motion="{
        initial: { x: -100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { delay: index * 50 + 250 },
        },
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { GitHubRepo } from "~/types";

const repos: GitHubRepo[] = [
  {
    repo: "Spellsword",
    description:
      "An interactive, multiplayer game that's built to enhance our command of the english language.",
    image:
      "https://raw.githubusercontent.com/lmaosoggypancakes/spellsword/master/public/logo.png",
    language: "Nuxt",
    website: "https://spellsword.vercel.app",
    repoUrl: "https://github.com/lmaosoggypancakes/spellsword",
  },
  {
    repo: "NTRL",
    description:
      "Desktop/web application that allows Nevadans to find natural parks in their area.",
    image:
      "https://raw.githubusercontent.com/lmaosoggypancakes/ntrl/app/src/assets/logo.png",
    language: "Vue",
    repoUrl: "https://github.com/lmaosoggypancakes/ntrl",
    website: "https://ntrl.app",
  },
  {
    repo: "Waffles",
    description:
      "A text-based social media application using Django and Vue.js",
    image:
      "https://raw.githubusercontent.com/lmaosoggypancakes/waffles/main/1.png",
    language: "Vue",
    repoUrl: "https://github.com/lmaosoggypancakes/waffles",
  },
];
</script>
