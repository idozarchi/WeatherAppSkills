/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      animation: {
        // for tailwindcss-animate
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

