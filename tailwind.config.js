// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
