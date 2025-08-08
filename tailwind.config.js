module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        sage: {
          100: '#f4f7f5',
          200: '#dbe8e3',
          300: '#b8ccc2',
          400: '#94b1a2',
          500: '#6f9482',
          600: '#52796f',
        }
      }
    },
  },
  plugins: [],
}
