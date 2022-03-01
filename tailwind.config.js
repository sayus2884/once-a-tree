module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: "#415867",
        "ocean-500": "#1E292F",
        "ocean-600": "#1A2327",
      },
      spacing: {
        nav: "64px",
      },
    },
  },
  plugins: [],
};
