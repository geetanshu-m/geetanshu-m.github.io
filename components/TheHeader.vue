<template>
  <header
    class="sticky top-0 z-50 border-b border-ink-700 bg-ink-900/80 backdrop-blur-md"
  >
    <nav
      class="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8"
    >
      <NuxtLink
        to="/"
        class="group flex items-center gap-2 font-mono text-sm"
        @click.native="open = false"
      >
        <span class="text-accent">~/</span>
        <span class="font-semibold text-slate-100 group-hover:text-accent transition"
          >geetanshu</span
        >
        <span class="animate-blink text-accent">_</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="hidden items-center gap-1 font-mono text-sm sm:flex sm:gap-2">
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

      <!-- Mobile toggle -->
      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-md border border-ink-600 text-slate-300 transition hover:border-accent/50 hover:text-accent sm:hidden"
        :aria-expanded="open ? 'true' : 'false'"
        aria-label="Toggle navigation menu"
        @click="open = !open"
      >
        <svg
          v-if="!open"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
        <svg
          v-else
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <ul
        v-show="open"
        class="flex flex-col gap-1 border-t border-ink-700 px-5 py-3 font-mono text-sm sm:hidden"
      >
        <li v-for="item in navLinks" :key="item.path">
          <NuxtLink
            :to="item.path"
            class="block rounded-md px-3 py-2 text-slate-400 transition hover:bg-ink-700 hover:text-slate-100"
            @click.native="open = false"
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
            class="block rounded-md border border-ink-600 px-3 py-2 text-slate-300 transition hover:border-accent/50 hover:text-accent"
            @click="open = false"
            >résumé ↗</a
          >
        </li>
      </ul>
    </transition>
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
      open: false,
    };
  },
  watch: {
    $route() {
      this.open = false;
    },
  },
};
</script>

<style>
.nuxt-link-exact-active {
  @apply text-accent bg-ink-700;
}
</style>
