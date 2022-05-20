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
      },
    },
  },

  plugins: [],
};
