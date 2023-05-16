/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],//pasted from tailwind official documentation
  theme: {
    extend: {},
    //As we want this fontFamily Great Vibes only for our name thats why we have used it inside fontFamily(note you can name the key(in my case it is signature) as what you  want) 
    fontFamily:{
      signature:["Great Vibes"]
    }
  },
  plugins: [],
}

