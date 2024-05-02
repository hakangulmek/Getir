/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      spacing: {
        0.1: "0.063rem",
      },
      backgroundImage: (theme) => ({
        "mobile-app":
          "url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)",
      }),
      colors: {
        "brand-color": "#4c3398",
        "primnary-brand-color": "#5d3ebc",
        "secondry-brand-color": "#7849f7",
        "brand-yellow": "#ffd300",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
  important: true,
};
