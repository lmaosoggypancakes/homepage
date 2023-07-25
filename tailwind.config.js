/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#282828", // darkest
          secondary: "#FFD6BA", // lightest
          accent: "#fabd2f", // light
          neutral: "#282828", // dark
          "base-100": "#1d2021", // medium
          info: "#7aacac", // blue
          success: "#8fb66d", // green
          warning: "#ecc100", // yellow
          error: "#ff2d21", // red
        },
        light: {
          primary: "#907aa9",
          secondary: "#d7827e",
          accent: "#907aa9",
          neutral: "#faf4ed",
          "base-100": "#fffaf3",
          info: "#286983",
          success: "#56949f",
          warning: "#ea9d34",
          error: "#b4637a",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  darkMode: ['[data-theme="dark"]'],
  plugins: [require("daisyui")],
};
