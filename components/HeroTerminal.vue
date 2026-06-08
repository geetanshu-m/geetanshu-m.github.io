<template>
  <section class="mx-auto max-w-5xl px-5 pt-12 pb-6 sm:px-8 sm:pt-16">
    <div class="grid items-center gap-10 md:grid-cols-5">
      <!-- Left: identity -->
      <div class="md:col-span-3">
        <p class="mono-label mb-4">$ whoami</p>
        <h1
          class="text-4xl font-extrabold leading-tight tracking-tight text-slate-100 sm:text-5xl"
        >
          {{ meta.author }}
        </h1>
        <p class="mt-3 font-mono text-base text-accent sm:text-lg">
          Software Engineer
          <span class="text-slate-500">·</span> Distributed Systems
          <span class="text-slate-500">·</span> FinTech
          <span class="text-slate-500">·</span>
          <a
            href="https://summerofcode.withgoogle.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-accent-soft hover:underline"
            >GSoC</a
          >
        </p>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
          7 years designing and scaling distributed systems, real-time data
          platforms, and fintech infrastructure — event-driven architectures,
          usage-based billing, and subscription lifecycle orchestration built to
          stay correct under load.
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-3">
          <a
            :href="meta.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg bg-accent px-4 py-2 font-mono text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
            >connect →</a
          >
          <a
            :href="meta.resume"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border border-ink-600 px-4 py-2 font-mono text-sm text-slate-300 transition hover:border-accent/50 hover:text-accent"
            >résumé ↗</a
          >
          <a
            :href="`mailto:${meta.email}`"
            class="rounded-lg border border-ink-600 px-4 py-2 font-mono text-sm text-slate-300 transition hover:border-accent/50 hover:text-accent"
            >email</a
          >
          <a
            :href="meta.github"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border border-ink-600 px-4 py-2 font-mono text-sm text-slate-300 transition hover:border-accent/50 hover:text-accent"
            >github</a
          >
        </div>
      </div>

      <!-- Right: terminal card -->
      <div class="md:col-span-2">
        <div class="card overflow-hidden">
          <div
            class="flex items-center gap-2 border-b border-ink-700 bg-ink-800 px-4 py-2.5"
          >
            <span class="h-3 w-3 rounded-full bg-red-400/80"></span>
            <span class="h-3 w-3 rounded-full bg-yellow-400/80"></span>
            <span class="h-3 w-3 rounded-full bg-green-400/80"></span>
            <span class="ml-2 font-mono text-xs text-slate-500"
              >geetanshu@portfolio:~</span
            >
          </div>
          <div class="space-y-2 p-5 font-mono text-sm leading-relaxed">
            <p>
              <span class="text-accent">➜</span>
              <span class="text-slate-500"> ~ </span>cat profile.json
            </p>
            <pre class="whitespace-pre-wrap text-slate-300">{
  <span class="text-accent-soft">"role"</span>: <span class="text-slate-300">"Software Engineer 3"</span>,
  <span class="text-accent-soft">"company"</span>: <span class="text-slate-300">"Fynd"</span>,
  <span class="text-accent-soft">"location"</span>: <span class="text-slate-300">"{{ meta.location }}"</span>,
  <span class="text-accent-soft">"experience"</span>: <span class="text-slate-300">"7 years"</span>,
  <span class="text-accent-soft">"focus"</span>: [<span class="text-slate-300">"billing"</span>, <span class="text-slate-300">"identity"</span>],
  <span class="text-accent-soft">"stack"</span>: [<span class="text-slate-300">"python"</span>, <span class="text-slate-300">"node"</span>, <span class="text-slate-300">"kafka"</span>]
}</pre>
            <p>
              <span class="text-accent">➜</span>
              <span class="text-slate-500"> ~ </span
              ><span class="animate-blink">▋</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import meta from "@/data/sitemetainfo";
export default {
  data: () => ({ meta }),
};
</script>
