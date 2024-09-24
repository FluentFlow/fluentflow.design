/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'b2b-tailoring': "url('/assets/images/no text.jpg')",
      }
    },
    screens: {
      'mobile': '320px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    container: {
      padding: '2rem',
      screens: {
        'mobile': '320px',
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
      },
      "cupcake"
    ],
  },
  plugins: [require("daisyui")],
};
