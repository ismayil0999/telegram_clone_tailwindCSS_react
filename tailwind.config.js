/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "input":"#121212",
"background1":"#212121",
        "color1":"#FFFFFF",
        "color2":"#929292",
        "hover":"#2B2B2B "
      },
      width:{
        "30":"30%",
        "70":"70%",
        "60":"60px",
        "40":"40px",
        "50":"80%",
        "61":"61%"
      },
      height:{
"80":"60px",
"60":"45px",
"40":"40px"
      },
      bottom:{
        "2":"2%"
      },
      rotate:{
        "10":"-45deg"
      },
      backgroundImage: {
        'pattern': "url('/public/background.png')",
      }
    },
  },
  plugins: [],
}