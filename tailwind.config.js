/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lp: ["Poppins", "sans-serif"],
        db: ["Jost", "sans-serif"],
        num: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        bg: "#030712",
        card: "#18181b",
        bgBoard: "#0b0e11",
        button: "#134e4a",
      },
    },
  },
  plugins: [],
};
