<script setup lang="ts">
import type { SkillInterface } from "../model/skills";

defineProps({
  skills: {
    type: Array<SkillInterface>,
    required: true,
  },
});
</script>

<template>
  <section v-if="skills?.length" class="flex flex-col">
    <Skill
      v-for="(skill, index) in skills"
      :text="skill.text"
      :img-src="skill.imgSrc"
      :skill-level="skill.skillLevel"
      :key="index"
    ></Skill>
  </section>
</template>
