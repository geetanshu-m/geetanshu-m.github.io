<template>
  <section class="mx-auto max-w-5xl px-5 py-12 sm:px-8">
    <div class="card p-8 text-center sm:p-12">
      <p class="mono-label mb-3">$ ./say-hello.sh</p>
      <h2 class="text-2xl font-bold text-slate-100 sm:text-3xl">
        Let's build something resilient.
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-slate-400">
        Open to conversations about distributed systems, billing platforms, and
        fintech infrastructure — or just to trade notes.
      </p>
      <div class="mt-7 flex flex-wrap justify-center gap-3">
        <a
          :href="`mailto:${meta.email}`"
          class="rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
          >{{ meta.email }}</a
        >
        <a
          :href="meta.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border border-ink-600 px-5 py-2.5 font-mono text-sm text-slate-300 transition hover:border-accent/50 hover:text-accent"
          >linkedin</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import meta from "@/data/settings.json";
export default {
  data: () => ({ meta }),
};
</script>
