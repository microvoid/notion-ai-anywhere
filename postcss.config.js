// const convertRemToPixel = require("postcss-convert-rem-to-pixel")

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-convert-rem-to-pixel": {
      baseValue: 16
    }
  }

  // plugins: [
  //   require("postcss-convert-rem-to-pixel"),
  //   // new convertRemToPixel({
  //   //   baseValue: 16
  //   // }),
  //   require("tailwindcss"),
  //   require("autoprefixer")
  // ]
}
