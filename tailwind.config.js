module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Radio Canada", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-yellow": "#BAA333",
        "primary-orange": {
          100: "#FFF67F",
          200: "#FFDD66",
          300: "#FFC44D",
          400: "#FFAA33",
          500: "#FF911A",
          600: "#FF7700",
          700: "#E65E00",
          800: "#CC4400",
          900: "#B32B00",
        },
        "secondary-color": {
          100: "#A9A4CF",
          200: "#908BB6",
          300: "#77729D",
          400: "#5D5883",
          500: "#443F6A",
          600: "#2A2550",
          700: "#110C37",
          800: "#00001D",
        },
      },
    },
  },

  plugins: [],
};
