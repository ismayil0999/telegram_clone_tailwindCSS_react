/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "input":"#121212",
"background1":"#1D2733",
"background2":"white",
        "color1":"#FFFFFF",
        "color2":"#929292",
        "hover":"#080808 ",
        "menu":"red",
        "done":"#06b6d4",
        "call":"#2F4654"
      },
      width:{
        "30":"30%",
        "70":"70%",
        "60":"60px",
        "40":"40px",
        "50":"80%",
        "61":"61%",
        "35":"55px"
      },
      height:{
"80":"55px",
"60":"60px",
"40":"40px",
"13":"100%",
"23":"85px",
"35":"55px"
      },
      left:{
"51":"50%"
      },
      bottom:{
        "2":"2%",
        "11":"6%"
      },
      rotate:{
        "10":"-45deg"
      },
      backgroundImage: {
        'pattern': "url('/public/background.png')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}