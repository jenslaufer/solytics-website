/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'serif': ['"My Font"', 'sans-serif']
        'poppins': ["Poppins"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}