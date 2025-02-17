/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f7fafc",
          DEFAULT: "#38a169",
          dark: "#2f855a",
        },
        secondary: {
          light: "#fefcbf",
          DEFAULT: "#ecc94b",
          dark: "#d69e2e",
        },
      },
    },
  },
  plugins: [],
};
