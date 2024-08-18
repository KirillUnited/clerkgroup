const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    container: {
      center: true,
      padding: '20px'
    },
    fontFamily: {
      primary: ['var(--font-primary)', ...fontFamily.sans],
      foreground: ['var(--font-foreground)', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          text: 'hsl(var(--primary-text))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          text: 'hsl(var(--secondary-text))'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        text: 'var(--text)'
      }
    },
  },
  plugins: [],
}

