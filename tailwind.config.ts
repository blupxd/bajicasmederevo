import type { Config } from "tailwindcss";

// Every colour on the site is a token here (no Tailwind palette: the theme replaces it).
// Source of truth: the logo (public/assets/logo.svg, from app/Bajica_logo_07.pdf).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      // brand green, derived from the logo green #8FBA2E, one hue throughout
      green: {
        50: "#EFF7E5",
        100: "#E0EECB",
        200: "#C6DF9E",
        300: "#AACD6C",
        500: "#8FBA2E", // the logo green: primary buttons, marks, nav lines
        550: "#80A62C", // the primary button's hover (charcoal on it 5.8:1)
        600: "#6D8D2B",
        700: "#546E1D", // links and small green text on warm white (5.2:1)
        800: "#344413",
        900: "#25300F", // the one deep-green band, #o-nama (warm white on it 12.5:1)
      },
      // neutrals, from the logo's charcoal and grey
      charcoal: {
        DEFAULT: "#292B2C", // logo charcoal: ink, the footer
        700: "#353738",
        600: "#444648", // logo grey
        950: "#1E2021",
      },
      stone: {
        50: "#F4F3EE", // warm white: the main ground
        100: "#E9E8E1", // surface: form panel, image grounds, cards
        300: "#A0A19E", // muted text on charcoal
        500: "#646565", // muted text on warm white (5.3:1)
      },
    },
    // the client: no rounded corners, no shadows
    borderRadius: { none: "0" },
    boxShadow: { none: "none" },
    fontFamily: {
      sans: ["var(--font-schibsted)", "system-ui", "sans-serif"],
    },
    extend: {
      fontSize: {
        label: ["13px", { lineHeight: "1.4" }],
        small: ["14px", { lineHeight: "1.5" }],
        body: ["16px", { lineHeight: "1.55" }],
        lead: ["var(--t-lead)", { lineHeight: "1.5" }],
        card: ["var(--t-card)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h3: ["var(--t-h3)", { lineHeight: "1.2", letterSpacing: "-0.035em" }],
        h2: ["var(--t-h2)", { lineHeight: "1.1", letterSpacing: "-0.035em" }],
        h1: ["var(--t-h1)", { lineHeight: "1.04", letterSpacing: "-0.042em" }],
      },
      spacing: {
        nav: "var(--nav)",
        gut: "var(--gut)",
        gutter: "var(--gutter)",
        head: "var(--head-gap)",
      },
      height: { screen: "100svh" },
      minHeight: { screen: "100svh" },
      maxWidth: { wrap: "1280px", head: "760px" },
      transitionTimingFunction: { out: "cubic-bezier(.2, .7, .2, 1)" },
      // the floating call button's ring: runs out from the square and fades
      keyframes: { ring: { "0%": { transform: "scale(1)", opacity: "0.9" }, "100%": { transform: "scale(1.6)", opacity: "0" } } },
      transitionDuration: { DEFAULT: "180ms" },
    },
  },
  plugins: [],
};

export default config;
