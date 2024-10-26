/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html", 
    "./src/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-image': "url('/src/imagenes/inteligencia.jpg')"
      }  
    },
  },
  plugins: [],
}

