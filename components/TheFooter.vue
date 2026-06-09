<template>
  <footer class="mt-8 border-t border-ink-700">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-10 sm:px-8"
    >
      <div class="flex items-center gap-5">
        <a
          class="text-slate-500 transition hover:text-accent"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.github"
          ><span class="sr-only">github</span>
          <img class="footer-ico h-6 w-6" src="~assets/icon/github_new.svg" />
        </a>
        <a
          class="text-slate-500 transition hover:text-accent"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.linkedin"
          ><span class="sr-only">linkedin</span>
          <img class="footer-ico h-6 w-6" src="~assets/icon/linkeding.svg" />
        </a>
        <a
          class="text-slate-500 transition hover:text-accent"
          target="_blank"
          rel="noopener noreferrer"
          :href="`mailto:${siteMetadata.email}`"
          ><span class="sr-only">mail</span>
          <img class="footer-ico h-6 w-6" src="~assets/icon/mail.svg" />
        </a>
        <a
          class="text-slate-500 transition hover:text-accent"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.medium"
          ><span class="sr-only">medium</span>
          <img class="footer-ico h-6 w-6" src="~assets/icon/medium.svg" />
        </a>
        <a
          class="text-slate-500 transition hover:text-accent"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.youtube"
          ><span class="sr-only">youtube</span>
          <img class="footer-ico h-6 w-6" src="~assets/icon/youtube.svg" />
        </a>
      </div>

      <p class="font-mono text-xs text-slate-500">
        © {{ new Date().getFullYear() }} {{ siteMetadata.author }}
        <span class="text-slate-700">·</span> {{ siteMetadata.slogan }}
      </p>
    </div>
  </footer>
</template>

<script>
import siteMetaInfo from "@/data/settings.json";
export default {
  data() {
    return {
      siteMetadata: siteMetaInfo,
    };
  },
};
</script>
