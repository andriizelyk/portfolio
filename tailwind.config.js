/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,js,tsx,css}", "./src/**/*.{html,js,tsx,css}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },},
  },
  plugins: [],
}
