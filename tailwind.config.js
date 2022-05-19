const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/app.js",
    "./src/components/About/index.js",
    "./src/components/Contact/index.js",
    "./src/components/Nav/index.js",
    "./src/components/Projects/index.js",
    "./src/components/Resume/index.js"
  ],
  theme: {
    extend: {
       colors: {
         'darksienna': {
            '100': '#042a4a',
         },
         'wine': {
          '100': '#6a3937ff',
       },
       'granitegray': {
        '100': '#706563ff',
     },
     'slategray': {
      '100': '#748386ff',
   },
   'opal': {
    '100': '#9dc7c8ff',
 },
},},},
  plugins: [],
}
