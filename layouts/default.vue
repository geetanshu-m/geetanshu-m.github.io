<template>
  <div class="min-h-screen bg-ink-900 text-slate-300 flex flex-col">
    <TheHeader />
    <main class="flex-1 w-full">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style></style>
