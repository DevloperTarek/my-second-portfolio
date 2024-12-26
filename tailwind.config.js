/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      santoshi: ['Santoshi', 'sans-serif'],
      Integral:['Integral CF', 'sans-serif'],
    },
    screens:{
      'sm':'320px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1260px'
    },
    container:{
      center:true,
      padding:{
        DEFAULT: '10px',
        sm: '10px',
        lg: '10px',
        xl: '10px',
      },
    },
    extend: {
      colors:{
        'transparent':'transparent',
        'black-60':'rgba(0,0,0,0.6)',
        'black-40':'rgba(0,0,0,0.4)',
        'black-10':'rgba(0,0,0,0.1)',
        'black':'#000',
        'white':'#fff',
        'search-bar-bg':'#F0F0F0',
        'banner-bg':'#F2F0F1',
        'arrival-product-bg':'#F0EEED',
        'star-icon-color':'#FFC633',
        'arrival-offer-text':'rgba(255, 51, 51, 0.1)'
      },
      backgroundImage:{
        'custom-bg-img':"url('../img/arrivals/t-shirt-2.webp')",
      }
    },
  },
  plugins: [],
}

