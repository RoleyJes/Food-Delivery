/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      colors: {
        orange: "#fa4a0c",
        darkBgTxt: "#252b42",
        offwhite: "#f6f6f6",
        secTxt: "#737373",
        secTxt2: "#5c5c5c",
        gray: "#e4e4e4",
        // bgi:'#171010'
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        poppins: ["Poppins"],
      },
      boxShadow: {
        btn: "0px 10px 30px 0px rgba(183, 50, 39, 0.20)",
        shd: "50px 30px 150px 0px rgba(46, 4, 4, 0.15)",
      },
    },
  },
  plugins: [],
};
