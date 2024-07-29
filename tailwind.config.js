const {nextui} = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#2384D8',
        'secondary':'#E5EFF3',
        'tranceblue':'#303B4D',
        'appgray':'#d5dae2'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'buda': ['Buda', 'sans-serif'],
        'overlock': ['Overlock', 'cursive'],
        'cinzel': ['Cinzel', 'serif']
      },
    },
  },
  plugins: [nextui()],
 
};