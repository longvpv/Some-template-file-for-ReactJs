const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const getLocalIdent = require('css-loader/lib/getLocalIdent');
module.exports = {
  compress: false,
  ...withImages(),
  ...withCSS({
    webpack: function (config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {

          }
        }
      })
      return config
    }
  })
};

