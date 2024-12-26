/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "app-yellow": "#FCC822",
      "app-black": "#333333",
      "app-small-slate": "#E0E0E0",
      "app-paragraph-slate": "#828282",
      "app-white": "#FFFFFF",
      "app-error-red": "#cc0000",
    },
  },
  plugins: [],
};
