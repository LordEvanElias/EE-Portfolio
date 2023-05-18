/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "h-128": { height: "1200px" },
      },
    },
  },
  plugins: [],
};
