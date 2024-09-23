/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'vh-header-footer': 'calc(100vh - 176px)',
        '1000px': '62.5rem',
      },
      backgroundImage: {
        'custom-background': "url('./public/background.png')",
        'select-character-bg': "url('./public/brasil.png')"
      },
    },
  },
  plugins: [],
}
