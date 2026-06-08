<template>
  <div>
    <HeroTerminal />

    <AuthorIntro />

    <Expertise />

    <TimeLine />

    <!-- Featured projects -->
    <section class="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <div class="mb-8 flex items-end justify-between">
        <div>
          <p class="mono-label mb-2">$ ls ./projects</p>
          <h2 class="text-2xl font-bold text-slate-100">Selected Work</h2>
        </div>
        <NuxtLink
          to="/projects"
          class="font-mono text-sm text-accent transition hover:text-accent-soft"
          >all →</NuxtLink
        >
      </div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <project-card
          v-for="item in featured"
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
    </section>

    <ContactCTA />
  </div>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";
import projectsData from "@/data/projects";
export default {
  data() {
    return {
      siteMetaInfo,
      featured: projectsData.slice(0, 3),
    };
  },
  head: {
    title: siteMetaInfo.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: siteMetaInfo.description,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style></style>
