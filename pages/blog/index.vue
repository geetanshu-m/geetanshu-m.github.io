<template>
  <div class="mx-auto max-w-5xl px-5 py-14 sm:px-8">
    <header class="mb-10">
      <p class="mono-label mb-3">$ tail -f ./writing</p>
      <h1
        class="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl"
      >
        Writing
      </h1>
      <p class="mt-3 max-w-2xl text-slate-400">
        Notes on distributed systems, billing, and engineering — published on
        <a
          :href="medium"
          target="_blank"
          rel="noopener noreferrer"
          class="text-accent hover:text-accent-soft"
          >Medium</a
        >.
      </p>
    </header>

    <div class="space-y-5">
      <a
        v-for="article in articles"
        :key="article.url"
        :href="article.url"
        target="_blank"
        rel="noopener noreferrer"
        class="card group block p-6"
      >
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-slate-500">
          <span class="text-accent">{{ article.publication }}</span>
          <span class="text-slate-700">·</span>
          <span>{{ article.date }}</span>
        </div>
        <h2
          class="mt-2 text-xl font-bold leading-snug text-slate-100 transition group-hover:text-accent"
        >
          {{ article.title }}
        </h2>
        <p class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          {{ article.description }}
        </p>
        <div class="mt-4 flex flex-wrap items-center gap-2">
          <span
            v-for="t in article.tags"
            :key="t"
            class="rounded border border-ink-700 bg-ink-800 px-2 py-0.5 font-mono text-xs text-accent/80"
            >{{ t }}</span
          >
          <span
            class="ml-auto font-mono text-xs text-slate-500 transition group-hover:text-accent"
            >read on medium →</span
          >
        </div>
      </a>
    </div>

    <div class="mt-10 text-center">
      <a
        :href="medium"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block rounded-lg border border-ink-600 px-5 py-2.5 font-mono text-sm text-slate-300 transition hover:border-accent/50 hover:text-accent"
        >follow on medium →</a
      >
    </div>
  </div>
</template>

<script>
import mediumArticles from "@/data/mediumArticles";
import siteMetaInfo from "@/data/sitemetainfo";
export default {
  data() {
    return {
      articles: mediumArticles,
      medium: siteMetaInfo.medium,
    };
  },
  head: {
    title: "Geetanshu Mathur | Writing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Articles by Geetanshu Mathur on distributed systems, billing, and engineering.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style></style>
