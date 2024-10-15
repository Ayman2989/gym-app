/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151227", // Dark Purple/Navy
        secondary: "#dde0e9", // Light Grayish-Blue
        tertiary: "#58A4B0", // Coral/Orange-Red (for accents)
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
      animation: {
        "zoom-in-out": "zoomInOut 1.5s ease-in-out infinite",
        typing:
          "typing 4s steps(20, end) forwards, blink 0.75s step-end infinite",
      },
    },
  },
  plugins: [],
};
