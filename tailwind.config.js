// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#00BFB3",
        "primary-dark": "#009d93",
        white: "#ffffff",
        "light-gray": "#f8f9fa",
        "text-dark": "#333333",
        "text-light": "#666666",
        "custom-teal-light": "rgba(0, 191, 179, 0.95)",
        "custom-teal-dark": "rgba(0, 157, 147, 0.9)",
      },
      boxShadow: {
        custom: "0 2px 10px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
