<template>
  <section class="mx-auto max-w-5xl px-5 py-12 sm:px-8">
    <p class="mono-label mb-2">$ cat about.md</p>
    <h2 class="mb-6 text-2xl font-bold text-slate-100">
      {{ authorIntro.headline }}
    </h2>
    <div class="max-w-3xl space-y-4">
      <p
        v-for="(line, index) in authorIntro.introduction"
        :key="index"
        class="text-[15px] leading-relaxed text-slate-400"
      >
        {{ line }}
      </p>
    </div>
  </section>
</template>

<script>
import authourIntro from "@/data/authorIntro";

export default {
  data: () => {
    return {
      authorIntro: authourIntro,
    };
  },
};
</script>
