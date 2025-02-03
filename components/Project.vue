<script setup lang="ts">
import type { PropType } from 'vue';
import type { ProjectInterface } from "../model/project";
defineProps({
  project: {
    type: Object as PropType<ProjectInterface>,
    required: true
  }
})
</script>

<template>
  <div class="p-1">
    <div class="flex flex-col border border-green-500 py-8 px-10 items-center gap-4 bg-black bg-opacity-30">
      <h3 class="text-2xl">{{ project?.title }}</h3>
      <figure>
        <img :src="project?.imgSrc" class="h-48 w-48" alt="">
      </figure>
      <p class="text-center">{{ project?.description }}</p>
      <div class="flex flex-col gap-4">
        <a :href="project?.gitHubLink" class="flex gap-2 items-center" target="_blank">
          <img class="h-10 w-10 hover:shadow-lg" src="/images/github-brands-solid.svg" alt="gitHub"> Github
        </a>
        <a :href="project?.liveLink" class="flex gap-2 items-center" target="_blank">
          <img class="h-10 w-10 hover:shadow-lg" src="/images/globe.svg" alt="gitHub"> Hosted on Netlify
        </a>
      </div>
    </div>
  </div>
</template>
