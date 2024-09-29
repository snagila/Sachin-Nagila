/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customdark: "#F6F1EB",
        customlight: "#FFFCF7",
        buttonColor: "#3A5261",
      },
    },
  },
  plugins: [],
};
