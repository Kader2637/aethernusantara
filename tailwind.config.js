/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f9ff', 100: '#e0f2fe', 400: '#38bdf8', 500: '#0ea5e9',
          600: '#0284c7', 900: '#0c4a6e', dark: '#0f172a', darker: '#020617'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 80s linear infinite',
        'marquee-reverse-slow': 'marquee-reverse 80s linear infinite',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
        // FIX: Pakai -50% supaya looping teksnya nggak putus/ada jeda kosong
        marquee: { 
          '0%': { transform: 'translateX(0)' }, 
          '100%': { transform: 'translateX(-50%)' } 
        },
        'marquee-reverse': { 
          '0%': { transform: 'translateX(-50%)' }, 
          '100%': { transform: 'translateX(0)' } 
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.4)' },
          '50%': { opacity: .8, transform: 'scale(1.02)', boxShadow: '0 0 20px 10px rgba(14, 165, 233, 0.1)' },
        }
      }
    }
  },
  plugins: [],
}