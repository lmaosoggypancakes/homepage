<template>
  <div class="min-h-screen" id="experience">
    <div
      class="text-xl"
      v-motion="{
        initial: { x: -200, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
        },
      }"
    >
      <h1 class="text-5xl font-extrabold text-secondary mb-12">
        Work Experience
      </h1>
    </div>
    <div class="w-full flex flex-col items-center space-y-12">
      <ExperienceCard
        v-for="(experience, index) in experiences"
        :key="experience.org"
        :e="experience"
        :right="index % 2 === 1"
        v-motion="{
          initial: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { delay: index * 50 + 500 },
          },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Work } from "~/types";
const experiences = ref<Work[]>([
  {
    org: "Arafa Tech Foundation",
    position: "Chief Technical Officer",
    startDate: "February 2023",
    endDate: "Present",
    responsibilities: [
      "Helped build a software development team of 10+ students",
      "Wrote 4 programming courses for the organization’s website",
    ],
    website: "https://arafa.tech",
    mascot: "https://arafa.tech/logos/kody/secondary.png",
    tags: ["Next.js", "React", "OpenAI", "TypeScript"],
    image: "/arafa_tech.png",
  },
  {
    org: "School Simplified",
    position: "Chief Information Officer",
    startDate: "May 2022",
    endDate: "March 2023",
    responsibilities: [
      "Led a team of 20+ student software engineers for the organization’s IT department",
      "Maintained the codebases behind the organization’s websites and Discord bot commission system",
    ],
    website: "https://schoolsimplified.org",
    mascot: "https://www.schoolsimplified.org/timmy/dog.png",
    tags: ["NuxtJS", "Vue", "Firebase", "Discord.py", "TypeScript"],
    image: "/ss.png",
  },
]);
</script>
