module.exports = () => ({
  plugins: {
    autoprefixer: {
      flexbox: true,
      browsers: [
        //
        // Derived from Booststrap support policy:
        // https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
        'Chrome >= 45', // Exact version number here is kinda arbitrary
        'Firefox ESR',
        'Edge >= 12',
        'Explorer >= 10',
        'iOS >= 9',
        'Safari >= 9',
        'Android >= 4.4',
        'Opera >= 30'
      ]
    }
  }
})
