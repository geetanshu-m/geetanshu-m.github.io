<template>
  <header
    class="sticky top-0 z-50 border-b border-ink-700 bg-ink-900/80 backdrop-blur-md"
  >
    <nav
      class="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8"
    >
      <NuxtLink to="/" class="group flex items-center gap-2 font-mono text-sm">
        <span class="text-accent">~/</span>
        <span class="font-semibold text-slate-100 group-hover:text-accent transition"
          >geetanshu</span
        >
        <span class="animate-blink text-accent">_</span>
      </NuxtLink>

      <ul class="flex items-center gap-1 font-mono text-sm sm:gap-2">
        <li v-for="item in navLinks" :key="item.path">
          <NuxtLink
            :to="item.path"
            class="rounded-md px-2.5 py-1.5 text-slate-400 transition hover:bg-ink-700 hover:text-slate-100 sm:px-3"
          >
            <span class="text-accent/60">{{ item.prefix }}</span
            >{{ item.name }}
          </NuxtLink>
        </li>
        <li>
          <a
            :href="resume"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-1 rounded-md border border-ink-600 px-2.5 py-1.5 text-slate-300 transition hover:border-accent/50 hover:text-accent sm:px-3"
            >résumé ↗</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import settings from "@/data/settings.json";

export default {
  name: "TheHeader",
  data() {
    return {
      navLinks: settings.menu,
      resume: settings.resume,
    };
  },
};
</script>

<style>
.nuxt-link-exact-active {
  @apply text-accent bg-ink-700;
}
</style>
