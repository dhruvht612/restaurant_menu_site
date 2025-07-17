module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F1ED",
          100: "#E8DDD1",
          200: "#D4C2A3",
          300: "#C0A775",
          400: "#AC8C47",
          500: "#8B4513", // brown-600
          600: "#7A3C11",
          700: "#69330F",
          800: "#582A0D",
          900: "#47210B",
          DEFAULT: "#8B4513", // brown-600
        },
        secondary: {
          50: "#FDF6F0",
          100: "#FAEDE1",
          200: "#F4DBC3",
          300: "#EEC9A5",
          400: "#E8B787",
          500: "#D2691E", // chocolate
          600: "#BD5E1B",
          700: "#A85318",
          800: "#934815",
          900: "#7E3D12",
          DEFAULT: "#D2691E", // chocolate
        },
        accent: {
          50: "#FFF4F1",
          100: "#FFE9E3",
          200: "#FFD3C7",
          300: "#FFBDAB",
          400: "#FFA78F",
          500: "#FF6B35", // orange-red
          600: "#E6602F",
          700: "#CC5529",
          800: "#B34A23",
          900: "#993F1D",
          DEFAULT: "#FF6B35", // orange-red
        },
        background: "#FEFEFE", // near-white
        surface: "#F8F6F3", // warm-gray-50
        text: {
          primary: "#2C2C2C", // gray-800
          secondary: "#6B6B6B", // gray-500
        },
        success: {
          50: "#E8F5E8",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50", // green-500
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
          DEFAULT: "#4CAF50", // green-500
        },
        warning: {
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF9800", // orange-500
          600: "#FB8C00",
          700: "#F57C00",
          800: "#EF6C00",
          900: "#E65100",
          DEFAULT: "#FF9800", // orange-500
        },
        error: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336", // red-500
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
          DEFAULT: "#F44336", // red-500
        },
        border: {
          DEFAULT: "#E5E5E5", // gray-200
          light: "#F0F0F0", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        caption: ['Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'large': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      minHeight: {
        '44': '2.75rem', // 44px for touch targets
      },
      minWidth: {
        '44': '2.75rem', // 44px for touch targets
      },
    },
  },
  plugins: [],
}