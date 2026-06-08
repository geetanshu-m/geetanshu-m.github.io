<template>
  <section class="mx-auto max-w-5xl px-5 py-12 sm:px-8">
    <p class="mono-label mb-2">$ ls ./skills</p>
    <h2 class="mb-8 text-2xl font-bold text-slate-100">Technical Toolbox</h2>

    <div class="grid gap-4 sm:grid-cols-2">
      <div v-for="group in skills" :key="group.label" class="card p-5">
        <h3 class="mb-3 font-mono text-sm font-semibold text-accent">
          {{ group.label }}
        </h3>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="item in group.items"
            :key="item"
            class="rounded-md border border-ink-700 bg-ink-800 px-2.5 py-1 font-mono text-xs text-slate-300"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { label: "Languages", items: ["Python", "JavaScript", "SQL"] },
        {
          label: "Backend",
          items: ["Django", "Flask", "Node.js", "Express"],
        },
        { label: "Frontend", items: ["ReactJS", "VueJS", "TailwindCSS"] },
        { label: "Databases", items: ["PostgreSQL", "MongoDB"] },
        {
          label: "Distributed Systems",
          items: [
            "Kafka",
            "Event-Driven",
            "DAG Processing",
            "Idempotency",
            "Concurrency Control",
          ],
        },
        {
          label: "Cloud & DevOps",
          items: ["Docker", "Kubernetes", "AWS", "GCP"],
        },
        {
          label: "Domain",
          items: [
            "Usage-Based Billing",
            "Subscriptions",
            "RBAC",
            "Multi-Tenant",
            "Payments",
            "KYC",
          ],
        },
        {
          label: "Machine Learning",
          items: ["NLU", "Intent Classification", "Entity Extraction"],
        },
      ],
    };
  },
};
</script>
