/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'vh-header-footer': 'calc(100vh - 176px)'
      },
      backgroundImage: {
        'custom-background': "url('./public/background.png')",
      },
    },
  },
  plugins: [],
}
