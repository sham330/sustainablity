/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ecoGreen: "#10B981",
        ecoBlue: "#3B82F6",
        ecoPurple: "#8B5CF6",
        ecoYellow: "#F59E0B",
        ecoDark: "#1F2937",
      },
    },
  },
  plugins: [],
};
