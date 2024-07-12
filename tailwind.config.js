/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "32px",
    },

    extend: {
      colors: {
        primary: "#a3e635",
        dark: "#1e293b",
        secondary: "#64748b",
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
