<script lang="ts" setup>
import type { PropType } from 'vue';
import { SkillLevelEnum } from '~/model/skills';

defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  skillLevel: {
    type: String as PropType<SkillLevelEnum>,
    required: true
  }
})

const state = reactive({
  showSkillLevel: false
})

onMounted(() => {
  onloadShowSkillLevel()
})

function onloadShowSkillLevel() {
  state.showSkillLevel = true;
  setTimeout(() => {
    state.showSkillLevel = false;
  }, 1500)
}


</script>

<template>
  <div :class="['skill-wrapper my-2', skillLevel, {'show-skill-level': state.showSkillLevel}]">
    <div class="skill">
      <!-- <img :src="imgSrc" :alt="text"> -->
      <p>{{ text }}</p>
    </div>
    <div :class="['skill-background', skillLevel]"></div>
  </div>
</template>