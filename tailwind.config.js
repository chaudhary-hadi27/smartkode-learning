module.exports = {
  plugins: [require('@tailwindcss/typography')],
  extend: {
    animation: {
      fadeIn: 'fadeIn 0.3s ease-out',
      slideUp: 'slideUp 0.3s ease-out',
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideUp: {
        from: { transform: 'translateY(20px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
      },
    },
  },
}
