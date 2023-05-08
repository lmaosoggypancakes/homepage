<template>
  <div class="card w-96 bg-base-100 shadow-xl" ref="el">
    <figure>
      <img :src="project.image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ project.repo }}</h2>
      <p>{{ project.language }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Visit</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GitHubRepo } from "~/types";

defineProps<{ project: GitHubRepo }>();
</script>
