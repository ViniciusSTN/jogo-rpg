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
        'custom-background': "url('https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/background.png?alt=media&token=34b4192a-28aa-4c72-b3b4-2bbb2bfbc7e1')",
        'select-character-bg': "url('https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/brasil.png?alt=media&token=a0968ea6-f49b-45c1-9409-0bb8864df1de')"
      },
    },
  },
  plugins: [],
}
