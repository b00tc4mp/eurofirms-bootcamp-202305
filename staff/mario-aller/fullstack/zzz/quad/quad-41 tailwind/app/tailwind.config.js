/** @type {import('tailwindcss').Config} */

import appquad from './tailwind.appquad.plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [appquad],
}

