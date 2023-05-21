<template>
  <div class="card bg-neutral shadow-xl relative">
    <figure>
      <img :src="e.image" :alt="e.org" class="h-32 w-32" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-primary text-3xl">
        {{ e.position }}
      </h2>
      <div class="text-md text-primary">
        {{ e.org }} -
        <span class="text-md text-[#e5e7eb]">
          {{ e.startDate }} - {{ e.endDate }}</span
        >
      </div>
      <ul class="text-sm list-disc p-4">
        <li v-for="r in e.responsibilities">{{ r }}</li>
      </ul>
      <div class="card-actions justify-end">
        <div class="badge badge-primary" v-for="tag in e.tags">{{ tag }}</div>
      </div>
    </div>
    <IconLink
      :href="e.website"
      class="absolute top-4 right-4"
      name="uil:external-link-alt"
    >
    </IconLink>
  </div>
</template>
<script setup lang="ts">
import { Work } from "~/types";

defineProps<{ e: Work }>();
</script>
