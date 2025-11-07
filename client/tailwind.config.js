/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        mint: {
          light: "#C8E6E0",
          DEFAULT: "#38B69A",
          dark: "#2E8B75",
        },
        background: {
          light: "#F3F7F6",
          soft: "#E6F2EF",
        },
      },
    },
  },
  plugins: [],
};
