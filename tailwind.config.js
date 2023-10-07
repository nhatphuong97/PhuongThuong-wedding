/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        transright: {
          "0%,50%": { transfom: "translateY(-25%)" },
          "100%": { transfom: "translateY(0)" },
        },
        pulse: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        scale: {
          "0%": { transfom: "scale(1)", opacity: "1" },
          "75%, 100% ": { transfom: "scale(2)", opacity: "0" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        slide1: {
          "0%": { opacity: 0, transform: "translateY(-10%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
      },
    },
    animation: {
      "waving-hand": "wave 2s linear infinite",
      "trans-right": "transright 1.5s infinite",
      pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "spin-slow": "transright 1s linear infinite",
      "scale-pin": "scale 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      "slide-down": "slide1 .5s ease-out",
    },
  },
  plugins: [],
};
