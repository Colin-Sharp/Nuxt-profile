<script setup lang="ts">
import { useMouse, useWindowSize } from "@vueuse/core";
import { skills } from "~/assets/lists/skills";
import { experience } from "~/assets/lists/experance";

const { x, y } = useMouse();
const { width, height } = useWindowSize();
const dx = computed(() => Math.abs(x.value - width.value / 2));
const dy = computed(() => Math.abs(y.value - height.value / 2));
const distance = computed(() =>
  Math.sqrt(dx.value * dx.value + dy.value * dy.value)
);
const size = computed(() => Math.max(300 - distance.value / 3, 150));
const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7)));

</script>

<template>
  <div>
    <div
      class="cursor-background absolute bg-green-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="`left: ${x}px; top: ${y}px; width: ${size}px; height: ${size}px; opacity: ${opacity}`"
    ></div>
    <Header></Header>
    <main class="px-4 py-24 max-w-screen-lg mx-auto">
      <section class="container">
        <h1 class="text-4xl font-bold">Colin Sinclair-Smith</h1>
        <h2 class="text-2xl font-bold">Frontend Developer</h2>
      </section>
      <Skills class="my-8" :skills="skills" ></Skills>
      <section id="experience" class="flex flex-col gap-4">
        <Experience v-for="(item, index) in experience" :key="index" :experience="item">
        </Experience>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>
