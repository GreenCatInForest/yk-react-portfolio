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
        orbit: "orbit 5s ease-in-out infinite",
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
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },

        customPulse: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: ".8",
            transform: "scale(1.1)",
          },
        },

        customBounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },

        orbit: {
          "0%": {
            transform: "translateX(10%) translateY(-60%)",
          },
          "50%": {
            transform: "translateX(80%) translateY(20%)",
          },
          "100%": {
            transform: "translateX(10%) translateY(-60%)",
          },
          // "50%": {
          //   transform: "translateX(50%) translateY(-60%)",
          // },
          // "75%": {
          //   transform: "translateX(80%) translateY(0)",
          // },
          // "100%": {
          //   transform: "translateX(0) translateY(-60%)",
          // },
        },
      },
    },
  },
  plugins: [],
};
