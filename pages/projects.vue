<template>
  <div class="mx-auto max-w-5xl px-5 py-14 sm:px-8">
    <header class="mb-10">
      <p class="mono-label mb-3">$ cat ./projects/*</p>
      <h1
        class="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl"
      >
        Projects
      </h1>
      <p class="mt-3 max-w-2xl text-slate-400">
        Systems I've architected and shipped — billing engines, control planes,
        orchestration, and identity infrastructure.
      </p>
    </header>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <project-card
        v-for="item in projectsData"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :href="item.href"
        :github="item.github"
        :tech1="item.tech1"
        :tech2="item.tech2"
        :tech3="item.tech3"
      />
    </div>
  </div>
</template>

<script>
import projectsData from "../data/projects.json";
export default {
  data() {
    return {
      projectsData: projectsData.items,
    };
  },
  head: {
    title: "Geetanshu Mathur | Projects",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Some of Projects developed by Geetanshu",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>
