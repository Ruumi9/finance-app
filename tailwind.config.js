const daisyui = require("daisyui");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App router Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // Komponen custom kamu
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          "base-100": "oklch(97% 0.014 254.604)",
          "base-200": "oklch(93% 0.032 255.585)",
          "base-300": "oklch(88% 0.059 254.128)",
          "base-content": "oklch(37% 0.146 265.522)",
          primary: "oklch(64% 0.2 131.684)",
          "primary-content": "oklch(98% 0.031 120.757)",
          secondary: "oklch(64% 0.2 131.684)",
          "secondary-content": "oklch(98% 0.031 120.757)",
          accent: "oklch(64% 0.222 41.116)",
          "accent-content": "oklch(98% 0.016 73.684)",
          neutral: "oklch(37% 0.146 265.522)",
          "neutral-content": "oklch(97% 0.014 254.604)",
          info: "oklch(54% 0.245 262.881)",
          "info-content": "oklch(97% 0.014 254.604)",
          success: "oklch(60% 0.118 184.704)",
          "success-content": "oklch(98% 0.014 180.72)",
          warning: "oklch(68% 0.162 75.834)",
          "warning-content": "oklch(98% 0.026 102.212)",
          error: "oklch(59% 0.249 0.584)",
          "error-content": "oklch(97% 0.014 343.198)",
        },
      },
    ],
  },
};
