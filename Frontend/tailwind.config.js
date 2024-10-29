/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'text-gradient':"linear-gradient(45deg, #ff7e5f, #feb47b)",
        'custom-image':"url('./src/imagenes/inteligencia.jpg')",
        //'photo-image':"url('./src/imagenes/Diego-Corrales-Carnet.jpg')"
      }  
    },
  },
  plugins: [],
}

