/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      dosis: ["Dosis", "sans-serif"],
      seaweed: ["Seaweed Script", "cursive"],
      dancing: ["Dancing Script", "cursive"],
      italianno: ["Italianno", "cursive"],
      cuprum: ["Cuprum", "sans-serif"],
      pacifico: ["Pacifico", "cursive"],
      swashed: ["Swashed", "cursive"],
      vollkorn: ["Vollkorn SC", "serif"],
      noto: ["Noto Serif", "serif"],
      playfair: ["Playfair Display", "serif"],
    },
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
      backgroundImage: {
        "image-one": "url('/src/img/bg-rung.webp')",
        "image-vo": "url('/src/img/vo.png')",
        "image-chong": "url('/src/img/chong.png')",
        "heading-tile": "url('/src/img/heading.webp')",
        cake: "url('/src/img/cake.webp')",
        invitation: "url('/src/img/invitation-bg.jpg')",
        image_wedding_1: "url('/src/img/anh_cuoi_1.webp')",
        cadong: "url('/src/img/cadong1.webp')",
        perfect: "url('/src/mp3/perfect.webp')",
        flower: "url('/src/img/flower.webp')",
      },
      colors: {
        love: {
          10: "#A63F52",
          20: "#F2C2CF",
          30: "#f9f9f9",
          40: "#D99Cb2",
          50: "#BBEDF2",
          60: "#fcdce2",
        },
        vitange_green: {
          10: "#ECE3CE",
          20: "#739072",
          30: "#669b6b",
          40: "#4F6F52",
          50: "#3A4D39",
          60: "#F1F6EA",
        },
      },
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
