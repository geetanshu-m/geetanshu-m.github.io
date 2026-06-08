<template>
  <div class="card group flex h-full flex-col p-6">
    <div class="mb-4 flex items-center justify-between">
      <Folder class="h-8 w-8 text-accent" />
      <div class="flex items-center gap-3">
        <a
          v-if="href && href !== '#'"
          class="text-slate-500 transition hover:text-accent"
          target="_blank"
          rel="noopener noreferrer"
          :href="href"
          ><span class="sr-only">live</span>
          <img class="h-5 w-5" src="~assets/icon/external.svg" />
        </a>
        <a
          v-if="github && github !== '#'"
          class="text-slate-500 transition hover:text-accent"
          target="_blank"
          rel="noopener noreferrer"
          :href="github"
          ><span class="sr-only">github</span>
          <img class="h-5 w-5" src="~assets/icon/github_new.svg" />
        </a>
      </div>
    </div>

    <h3
      class="mb-2 text-lg font-bold leading-snug text-slate-100 transition group-hover:text-accent"
    >
      {{ title }}
    </h3>
    <p class="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
      {{ description }}
    </p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="t in [tech1, tech2, tech3].filter(Boolean)"
        :key="t"
        class="rounded border border-ink-700 bg-ink-800 px-2 py-0.5 font-mono text-xs text-accent/80"
        >{{ t }}</span
      >
    </div>
  </div>
</template>

<script>
import Folder from "../assets/icon/folder.svg?inline";
export default {
  props: ["title", "description", "href", "github", "tech1", "tech2", "tech3"],
  components: { Folder },
};
</script>

<style></style>
