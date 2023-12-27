/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary-dark": "#184e77", //dark blue
      "secondary-dark": "#f07167", //dark orange
      "primary-light": "#fdfcdc", //light yellow
    },
  },
  plugins: [],
};
