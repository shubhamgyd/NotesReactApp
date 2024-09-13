/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "430px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
