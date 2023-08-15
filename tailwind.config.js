/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: "#FF00F5",
        },
        yellow: {
          400: "#DBFF00 ",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        helvetica: ["var(--helvetica)"],
        helveticaRegular: ["var(--helvetica-regular)"],
        Bayon: ["'Bayon'", "sans-serif"],
        Inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
