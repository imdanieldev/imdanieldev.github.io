/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./index.html",
          "./src/**/*.{vue,js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               minWidth:{
                    "50vw": "50vw"
               },
               minHeight:{
                    "50vh": "50vh"
               }
          },
     },
     plugins: [],
}
