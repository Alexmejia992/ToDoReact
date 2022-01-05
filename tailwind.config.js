const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "40-r": "40rem",
        "35-r": "35rem",
        "23-r": "23rem",
      },
      height: {
        "40-r": "40rem",
        "35-r": "35rem",
        "5-r": "5rem",
      },
      boxShadow: {
        "5xl": "20px 20px 50px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      animation: {
        animation: "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      colors: {
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
