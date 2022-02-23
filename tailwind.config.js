module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(2) translate(-25%, -25%)",
            "transform-origin": "center center",
            opacity: 0.5,
          },
        },
      },
    },
  },
  plugins: [],
};
