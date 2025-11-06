/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        brand: {
          black: '#090909',
          white: '#ffffff',
          electric: '#00d4ff',
          neon: '#ff006e',
          purple: '#8338ec',
          orange: '#ff8500',
          gradient: {
            from: '#090909',
            via: '#8338ec',
            to: '#00d4ff'
          }
        },
        gradient: {
          blue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          purple: 'linear-gradient(135deg, #8338ec 0%, #3a86ff 100%)',
          orange: 'linear-gradient(135deg, #ff8500 0%, #ff006e 100%)',
          dark: 'linear-gradient(135deg, #090909 0%, #434343 50%, #090909 100%)',
          electric: 'linear-gradient(135deg, #00d4ff 0%, #8338ec 50%, #ff006e 100%)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}