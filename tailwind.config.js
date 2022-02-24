module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ripple:theme => ({
          colors: theme('colors'),
          modifierTransition: 'background 0.2s',
          activeTransition: 'background 0.1s'
      }),

        },
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
// $color: #65ff78;

// html, body {
//   width: 100%;
//   height: 100%;
// }

// body {
//   background-color: #4e4e4e;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .circle-ripple {
//   background-color: #35ffc3;
//   width: 1em;
//   height: 1em;
//   border-radius: 50%;
//   animation: ripple 0.7s linear infinite;
// }

// @keyframes ripple {
//   0% {
//     box-shadow: 0 0 0 0 rgba($color, 0.3),
//                 0 0 0 1em rgba($color, 0.3),
//                 0 0 0 3em rgba($color, 0.3),
//                 0 0 0 5em rgba($color, 0.3);
//   }
//   100% {
//     box-shadow: 0 0 0 1em rgba($color, 0.3),
//                 0 0 0 3em rgba($color, 0.3),
//                 0 0 0 5em rgba($color, 0.3),
//                 0 0 0 8em rgba($color, 0);
//   }
// }
