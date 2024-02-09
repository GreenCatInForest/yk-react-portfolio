/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        rotateSlowly: "rotateSlowly 5s linear infinite",
      },
      keyframes: {
        rotateSlowly: {
          "0%": {
            transform: "rotate(0deg)",
            transition: "all 2s",
          },
          "100%": {
            transform: "rotate(360deg)",
            transition: "all 2s",
          },
        },
      },
    },
  },
  plugins: [],
};
