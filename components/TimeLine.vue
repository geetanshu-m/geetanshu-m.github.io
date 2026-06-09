<template>
  <section class="mx-auto max-w-5xl px-5 py-12 sm:px-8">
    <p class="mono-label mb-2">$ git log --experience</p>
    <h2 class="mb-8 text-2xl font-bold text-slate-100">Experience</h2>

    <ol class="relative border-l border-ink-700">
      <li
        v-for="(job, i) in timeline"
        :key="i"
        class="mb-9 ml-6 last:mb-0"
      >
        <span
          class="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink-900"
          :class="job.current ? 'bg-accent' : 'bg-ink-500'"
        ></span>
        <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 class="text-lg font-semibold text-slate-100">
            {{ job.role }}
          </h3>
          <span
            v-if="job.current"
            class="rounded bg-accent/15 px-2 py-0.5 font-mono text-xs font-medium text-accent"
            >current</span
          >
        </div>
        <p class="font-mono text-sm text-accent/80">{{ job.org }}</p>
        <time class="mt-0.5 block font-mono text-xs text-slate-500">{{
          job.period
        }}</time>
        <p
          v-if="job.summary"
          class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400"
        >
          {{ job.summary }}
        </p>
        <ul
          v-if="job.highlights"
          class="mt-3 max-w-2xl space-y-1.5"
        >
          <li
            v-for="(point, p) in job.highlights"
            :key="p"
            class="flex gap-2 text-sm leading-relaxed text-slate-400"
          >
            <span class="mt-2 h-1 w-1 flex-none rounded-full bg-accent/60"></span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<script>
import experience from "@/data/experience.json";
export default {
  data() {
    return {
      timeline: experience.items,
    };
  },
};
</script>

<style></style>
