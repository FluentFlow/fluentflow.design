/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'b2b-tailoring': "url('/assets/images/no text.jpg')",
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      }
    },
    screens: {
      'mobile': '320px',
      'laptop': '1024px',
      'desktop': '1900px'
    },
    container: {
      padding: '2rem',
      screens: {
        'mobile': '640px',
        'laptop': '1024px',
        'desktop': '1900px'
      }
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#000000",
          "secondary": "#FFFFFF",
          "accent": "#9DF5DB",
          "neutral": "#363635",
          "base-100": "#FFFFFF",
          "info": "#7D7AFF",
          "success": "#48EAC2",
          "warning": "#FCC742",
          "error": "#D70015",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
};
