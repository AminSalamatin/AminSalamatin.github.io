/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dominant: {
          dark: '#0b0c10',
          DEFAULT: '#0d1117',
          light: '#161b22',
        },
        secondary: {
          dark: '#000306',
          DEFAULT: '#010409',
          light: '#050910',
        },
        accent: {
          dark: '#45a29e',
          DEFAULT: '#00ffec',
          light: '#66fcf1',
        },
        text: {
          shadow: '#8f9397',
          DEFAULT: '#e6edf3',
          hover: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}