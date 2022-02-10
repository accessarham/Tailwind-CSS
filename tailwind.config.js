module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'tint': '#1C1E53',
        'blue': '#2405F2',
        'dblue': '#2405F2',
        'yellow': '#FCD980',
        'grey': '#F4F6FC',
        'accent': '#EEF4FA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: { 
        'bg-primary': "url('src/assets/bg1.png')", 
        'bg-secondary': "url('src/assets/bg1.png')",
        'bg-third': "url('src/assets/bg1.png')",
        'profile': "url('src/assets/profile.png')",
        'contact': "url('src/assets/contact.png')",
        'blog1': "url('src/assets/blog1.png')",
        'blog2': "url('src/assets/blog2.png')",
        'blog3': "url('src/assets/blog3.png')",
        'fb': "url('src/assets/fb.png')",
        'twitter': "url('src/assets/twitter.png')",
        'instagram': "url('src/assets/instagram.png')",
        'linkedin': "url('src/assets/linkedin.png')",
      }
    },
  },
  plugins: [],
}
