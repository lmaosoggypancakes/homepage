<template>
  <div class="card w-96 bg-neutral shadow-2xl" ref="el">
    <figure>
      <img :src="project.image" :alt="project.repo" class="h-96 w-96" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ project.repo }}</h2>
      <p>{{ project.description }}</p>
      <div class="card-actions justify-end">
        <IconLink
          v-if="project.website"
          :href="project.website"
          name="uil:external-link-alt"
        >
        </IconLink>
        <IconLink :href="project.repoUrl" name="uil:github"> </IconLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GitHubRepo } from "~/types";

defineProps<{ project: GitHubRepo }>();
</script>
