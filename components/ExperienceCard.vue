<template>
  <div class="w-full inline-flex">
    <img
      :src="e.image"
      v-if="!right"
      class="rounded-xl mr-4 hidden xl:block w-1/2 h-auto"
    />
    <div class="card bg-neutral shadow-xl relative xl:w-3/4 w-full">
      <div class="flex justify-around">
        <img
          :src="e.mascot"
          :alt="e.org"
          class="w-1/4 md:block hidden"
          v-if="right"
        />
        <section class="flex flex-col md:justify-center mt-8 lg:mt-0">
          <h2 class="text-primary text-3xl font-bold">
            {{ e.position }}
          </h2>
          <span class="text-md text-neutral-50">
            {{ e.org }}
          </span>
        </section>
        <img
          :src="e.mascot"
          :alt="e.org"
          class="w-1/4 md:block hidden"
          :class="{ 'justify-end': !right }"
          v-if="!right"
        />
      </div>
      <div class="card-body">
        <ul class="text-sm list-disc p-4 w-full">
          <li v-for="r in e.responsibilities">
            {{ r }}
          </li>
        </ul>
        <div
          class="card-actions"
          :class="right ? 'justify-end' : 'justify-start'"
        >
          <div class="badge badge-secondary" v-for="tag in e.tags">
            {{ tag }}
          </div>
        </div>
      </div>
      <IconLink
        :href="e.website"
        class="absolute bottom-4"
        :class="right ? 'left-4' : 'right-4'"
        name="uil:external-link-alt"
      />
    </div>
    <img
      :src="e.image"
      v-if="right"
      class="rounded-xl ml-4 hidden xl:block w-1/2 h-auto"
    />
  </div>
</template>
<script setup lang="ts">
import { Work } from "~/types";

defineProps<{ e: Work; right?: boolean }>();
</script>
