/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées avec valeurs hexadécimales exactes
        primary: {
          DEFAULT: '#0D47A1', // Deep tech blue
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#1976D2', // Lighter blue
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          DEFAULT: '#4CAF50', // Emerald green for CTAs
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
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Couleurs des partenaires avec valeurs fixes
        'partner-blue': '#2563eb',
        'partner-blue-hover': '#1d4ed8',
        'partner-green': '#16a34a',
        'partner-green-hover': '#15803d',
        'partner-red': '#dc2626',
        'partner-red-hover': '#b91c1c',
        'partner-purple': '#9333ea',
        'partner-purple-hover': '#7c3aed',
        'partner-orange': '#ea580c',
        'partner-orange-hover': '#c2410c',
        'partner-indigo': '#4f46e5',
        'partner-indigo-hover': '#4338ca',
        'partner-emerald': '#059669',
        'partner-emerald-hover': '#047857',
        'partner-teal': '#0d9488',
        'partner-teal-hover': '#0f766e',
        'partner-rose': '#e11d48',
        'partner-rose-hover': '#be123c',
        'partner-violet': '#7c3aed',
        'partner-violet-hover': '#6d28d9',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'blob': 'blob 7s infinite',
        'gradient-pan': 'gradientPan 15s ease infinite',
        'slide-in-bottom': 'slideInBottom 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'pulse-slow': 'pulseSlow 3s infinite ease-in-out',
        'bounce-slow': 'bounceSlow 2s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-glow': 'bounceGlow 2s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'tech-glow': 'techGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        gradientPan: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        slideInBottom: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(25, 118, 210, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(25, 118, 210, 0.8)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(76, 175, 80, 0.5), 0 0 10px rgba(76, 175, 80, 0.3)' },
          '100%': { textShadow: '0 0 10px rgba(76, 175, 80, 0.8), 0 0 20px rgba(76, 175, 80, 0.5)' },
        },
        bounceGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
        techGlow: {
          '0%': {
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)',
            filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))'
          },
          '100%': {
            textShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5), 0 0 90px rgba(59, 130, 246, 0.2)',
            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))'
          },
        },
      },
    },
  },
  plugins: [],
  // Configuration pour garantir la cohérence entre navigateurs
  corePlugins: {
    preflight: true,
  },
  // Support pour les navigateurs plus anciens
  future: {
    hoverOnlyWhenSupported: true,
  },
}


