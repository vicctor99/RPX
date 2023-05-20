module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1360px",
      xl: "1920px",
    },
    extend: {
      spacing: {
        5: "1.25rem",
        30: "7.5rem",
        40: "10rem",
        72: "18rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
