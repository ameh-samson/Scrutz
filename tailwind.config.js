/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        // Dark Colors
        darkGrayishBlue: "#455454",
        darkCyan: "#247B7B",
        darkIndigo: "#3B247B",

        // Light Colors
        lightGrayish: "#F0F4F4",
        lightGrayish2: "#EDF0F0",

        // Accent Colors
        deepPurple: "#6E0080",
        vividGreen: "#009918",

        // Neutral Colors
        gray: "#666666",
        gray2: "#999999",
        darkGray: "#333333",
        offWhite: "#FFFFFA",

        // Red
        red: "#990000",
      },
    },
  },
  plugins: [],
};
