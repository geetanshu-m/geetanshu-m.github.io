// Form schema for the local admin. Shared by the server (to map a section to
// its data file) and the browser (to render forms). Mirrors the fields that
// used to live in static/admin/config.yml.
//
// Widget types:
//   string    -> single-line text input
//   text      -> multi-line textarea
//   boolean   -> checkbox
//   lines     -> array of strings edited as ONE textarea, one item per line
//   csv       -> array of strings edited as one comma-separated input
//   daterange -> month/year pickers + "Present" toggle, stored as a single
//                "Mon YYYY — Present" string
//   list      -> repeatable group of objects (use `fields`)
//
// Each section has `previewPath` / `previewLabel`: the page on the running dev
// site (localhost:3000) where this content shows, used by the live preview.

export const sections = [
  {
    id: "settings",
    label: "Settings",
    file: "settings.json",
    blurb: "Identity, links and navigation.",
    previewPath: "/",
    previewLabel: "Home — header, footer & identity (site-wide)",
    fields: [
      { name: "title", label: "Browser / SEO title", widget: "string" },
      { name: "author", label: "Name", widget: "string" },
      { name: "position", label: "Headline / role", widget: "string" },
      { name: "location", label: "Location", widget: "string" },
      { name: "headerTitle", label: "Header title", widget: "string" },
      { name: "slogan", label: "Slogan", widget: "string" },
      { name: "description", label: "Meta description", widget: "text" },
      { name: "email", label: "Email", widget: "string" },
      { name: "resume", label: "Résumé URL", widget: "string" },
      { name: "github", label: "GitHub URL", widget: "string" },
      { name: "githubUser", label: "GitHub username", widget: "string" },
      { name: "linkedin", label: "LinkedIn URL", widget: "string" },
      { name: "medium", label: "Medium URL", widget: "string" },
      { name: "youtube", label: "YouTube URL", widget: "string" },
      { name: "twitter", label: "Twitter URL", widget: "string" },
      { name: "twitter_user", label: "Twitter handle", widget: "string" },
      { name: "stackoverflow", label: "Stack Overflow URL", widget: "string" },
      { name: "siteUrl", label: "Site URL", widget: "string" },
      { name: "siteRepo", label: "Repo URL", widget: "string" },
      { name: "author_image", label: "Author image path", widget: "string" },
      { name: "siteLogo", label: "Site logo path", widget: "string" },
      { name: "image", label: "Image path", widget: "string" },
      { name: "socialBanner", label: "Social banner path", widget: "string" },
      { name: "language", label: "Language", widget: "string" },
      { name: "theme", label: "Theme", widget: "string" },
      {
        name: "menu",
        label: "Navigation",
        widget: "list",
        itemLabel: "Link",
        summary: (it) => `${it.name || "—"} → ${it.path || ""}`,
        fields: [
          { name: "name", label: "Label", widget: "string" },
          { name: "path", label: "Path", widget: "string" },
          { name: "prefix", label: "Prefix", widget: "string" },
        ],
      },
    ],
  },
  {
    id: "about",
    label: "About",
    file: "authorIntro.json",
    blurb: "Intro headline and paragraphs.",
    previewPath: "/",
    previewLabel: "Home — intro section",
    fields: [
      { name: "headline", label: "Headline", widget: "string" },
      {
        name: "introduction",
        label: "Introduction paragraphs",
        widget: "lines",
        hint: "One paragraph per line. Blank lines are ignored.",
      },
    ],
  },
  {
    id: "experience",
    label: "Experience",
    file: "experience.json",
    blurb: "Roles timeline.",
    previewPath: "/",
    previewLabel: "Home — experience timeline",
    fields: [
      {
        name: "items",
        label: "Roles",
        widget: "list",
        itemLabel: "Role",
        summary: (it) => `${it.role || "—"} · ${it.org || ""}`,
        fields: [
          { name: "role", label: "Role", widget: "string" },
          { name: "org", label: "Organization", widget: "string" },
          { name: "period", label: "Period", widget: "daterange" },
          { name: "current", label: "Current role?", widget: "boolean" },
          { name: "summary", label: "Summary", widget: "text" },
          {
            name: "highlights",
            label: "Highlights",
            widget: "lines",
            hint: "One bullet per line. Blank lines are ignored.",
          },
        ],
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    file: "projects.json",
    blurb: "Project cards.",
    previewPath: "/projects",
    previewLabel: "Projects page",
    fields: [
      {
        name: "items",
        label: "Projects",
        widget: "list",
        itemLabel: "Project",
        summary: (it) => it.title || "—",
        fields: [
          { name: "title", label: "Title", widget: "string" },
          { name: "description", label: "Description", widget: "text" },
          { name: "href", label: "Live URL", widget: "string" },
          { name: "github", label: "GitHub URL", widget: "string" },
          { name: "tech1", label: "Tech 1", widget: "string" },
          { name: "tech2", label: "Tech 2", widget: "string" },
          { name: "tech3", label: "Tech 3", widget: "string" },
        ],
      },
    ],
  },
  {
    id: "writing",
    label: "Writing",
    file: "mediumArticles.json",
    blurb: "Medium articles.",
    previewPath: "/blog",
    previewLabel: "Blog page",
    fields: [
      {
        name: "items",
        label: "Articles",
        widget: "list",
        itemLabel: "Article",
        summary: (it) => it.title || "—",
        fields: [
          { name: "title", label: "Title", widget: "string" },
          { name: "description", label: "Description", widget: "text" },
          { name: "url", label: "URL", widget: "string" },
          { name: "publication", label: "Publication", widget: "string" },
          { name: "date", label: "Date", widget: "string" },
          {
            name: "tags",
            label: "Tags",
            widget: "csv",
            hint: "Comma-separated, e.g. Python, Flask, API",
          },
        ],
      },
    ],
  },
];

// Map of section id -> data file name. Used by the server to validate writes
// (only these files may be written) and resolve the path.
export const fileBySection = Object.fromEntries(
  sections.map((s) => [s.id, s.file])
);
