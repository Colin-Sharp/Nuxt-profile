import type { ProjectInterface } from "~/model/project";

export const projects: Array<ProjectInterface> = [
  {
    title: "NASA Nuxt Pinia",
    description: `Nuxt NASA app displaying images and videos from a NASA API.`,
    imgSrc: "/images/nasa.svg",
    gitHubLink: "https://github.com/Colin-Sharp/NASA-NUXT-PINIA",
    liveLink: "https://nasa-nuxt-pinia.netlify.app/",
  },
  {
    title: "Next.js Aceternity UI",
    description: "A portfolio website built with Next.js and used Aceternity UI to create some cool effects.",
    imgSrc: "/images/AceternityUI.svg",
    gitHubLink: "https://github.com/Colin-Sharp/Profile_site",
    liveLink: "https://colinsinclairsmith-next.netlify.app/",
  },
];
