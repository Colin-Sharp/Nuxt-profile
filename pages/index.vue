<script setup lang="ts">
import { useMouse, useWindowSize } from "@vueuse/core";
import { skills } from "~/assets/lists/skills";
import { projects } from "~/assets/lists/project";
import { experience } from "~/assets/lists/experance";

const { x, y } = useMouse();
const { width } = useWindowSize();
const dx = computed(() => Math.abs(x.value - width.value / 2));
const distance = computed(() =>
  Math.sqrt(dx.value * dx.value)
);
const size = computed(() => Math.max(300 - distance.value / 3, 150));
const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7)));

</script>

<template>
  <div>
    <div
      class="cursor-background absolute bg-green-600/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="`left: ${x}px; top: ${y}px; width: ${size}px; height: ${size}px; opacity: ${opacity}`"
    ></div>
    <Header></Header>
    <main class="px-4 py-24 max-w-screen-lg mx-auto">
      <section class="container" id="skills">
        <h1 class="text-4xl font-bold">Colin Sinclair-Smith</h1>
        <h2 class="text-2xl font-bold">Frontend Developer</h2>
      </section>
      <Skills class="my-8" :skills="skills" ></Skills>
      <section id="experience" class="flex flex-col gap-4">
        <Experience v-for="(item, index) in experience" :key="index" :experience="item">
        </Experience>
      </section>
      <!-- <section id="projects" class="flex my-10 flex-wrap">
        <Project class="w-full sm:w-6/12" v-for="(item, index) in projects" :key="index" :project="item"></Project>
      </section> -->
    </main>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.whatever {
  color: #38ab24;
}
</style>
