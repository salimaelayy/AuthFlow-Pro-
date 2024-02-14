/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        turquois: '#0b676e',
        blueCiel: '#75b2b8',
        greywhite:"#dbe6e4",
        saturatedOrange:"#ed8807",
        fallOrange:"#bb6c17"
      },
    },
  },
  plugins: [],
}
