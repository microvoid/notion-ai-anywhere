module.exports = {
  // plugins: {
  //   tailwindcss: {},
  //   autoprefixer: {}
  // }

  plugins: [
    require("postcss-convert-rem-to-pixel"),
    require("tailwindcss"),
    require("autoprefixer")
  ]
}
