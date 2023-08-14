/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
            protocol: 'https',
            domains: ['www.preetheme.com'],
          }
}

module.exports = nextConfig
const webpack = require('webpack');

module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Add the webpack configuration here
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    );

    return config;
  }
};
