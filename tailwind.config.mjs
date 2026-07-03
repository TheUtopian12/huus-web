/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        huus: {
          dark: '#0A0A0A',       // Deep black
          light: '#FFFFFF',      // Pure white
          gray: '#171717',       // Graphite gray
          violet: '#6D28D9',     // Main violet
          thistle: '#bc00dd',    // Fuchsia / thistle accent
          magenta: '#D946EF',    // Accent magenta
          electric: '#0EA5E9',   // Electric blue
          bg: '#FAFAFA',         // Off-white / light gray page background
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        display: ['Geist', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-up': 'scaleUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'particle-slow': 'particleSlow 20s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { 'background-position': '200% center' },
          '100%': { 'background-position': '-200% center' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        particleSlow: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        borderSpin: {
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
