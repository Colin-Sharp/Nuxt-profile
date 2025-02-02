<script setup lang="ts">
import type { PropType } from 'vue';
import type { ExperienceInterface } from '~/model/experience';


defineProps({
  experience: {
    type: Object as PropType<ExperienceInterface>,
    required: true
  }
})

</script>

<template>
  <article>
    <h2 class="text-3xl">{{ experience?.title }}</h2>
    <h3 class="text-2xl mb-4">{{ experience?.subtitle }}</h3>
    <ul class="list-disc ml-4">
      <li v-for="(item, index) in experience?.skillList" :key="index">
        {{ item }}
      </li>
    </ul>
    <p class="my-2" v-for="(paragraph, index) in experience?.content" :key="index">
      {{ paragraph }}
    </p>
  </article>
</template>
