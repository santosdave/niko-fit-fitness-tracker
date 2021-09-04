module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "signin-image":
          "url('https://hapakenya.com/wp-content/uploads/2016/01/mukami.jpg')",
      }),
      colors: {
        primary: "#182277",
        primaryDark: "#10185e",
        secondary: "#FFB7E4",
        secondaryDark: "#de8cbf",
      },
    },
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
