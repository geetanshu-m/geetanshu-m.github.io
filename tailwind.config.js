module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        ink: {
          950: "#070a0f",
          900: "#0b0f17",
          850: "#0e131c",
          800: "#11161f",
          700: "#1a212d",
          600: "#252e3d",
          500: "#3a4658",
        },
        accent: {
          DEFAULT: "#34d399",
          soft: "#6ee7b7",
          dim: "#10b981",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(52,211,153,0.15), 0 8px 40px -12px rgba(52,211,153,0.25)",
      },
      keyframes: {
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
