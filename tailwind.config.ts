// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // sesuaikan path ke file HTML/JSX/TSX-mu
    theme: {
      extend: {
        colors: {
          brand: {
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
          },
          orangeBrand: {
            100: "#FFF2CC",
            500: "#F59E0B",
          },
        },
      },
    },
    plugins: [],
  };
  