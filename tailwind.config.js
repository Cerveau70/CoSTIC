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
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'bounce-glow': 'bounce-glow 2s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bounce-glow': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)'
          },
        },
        'sparkle': {
          '0%, 100%': {
            opacity: '0',
            transform: 'scale(0.5)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'pulse-ring': {
          '0%': {
            transform: 'scale(0.33)',
            opacity: '1',
          },
          '80%, 100%': {
            transform: 'scale(2.4)',
            opacity: '0',
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


