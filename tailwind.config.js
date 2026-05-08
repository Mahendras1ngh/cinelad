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
        // Primary Dark Colors (60%)
        'dark-primary': '#0a0a0a',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#2a2a2a',

        // Light Colors (30%)
        'light-primary': '#ffffff',
        'light-secondary': '#f8f8f8',
        'light-tertiary': '#e5e5e5',

        // Accent Red Colors (10%)
        'accent-red': {
          primary: '#e31e25',
          light: '#ff4757',
          dark: '#b91c1c',
        },

        // Legacy support
        primary: {
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
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#e31e25',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        brand: {
          black: '#0a0a0a',
          'black-secondary': '#1a1a1a',
          white: '#ffffff',
          red: '#e31e25',
          redLight: '#ff4757',
          redDark: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(227, 30, 37, 0.3)',
        'red-glow-strong': '0 0 30px rgba(227, 30, 37, 0.5), 0 0 60px rgba(227, 30, 37, 0.3)',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
