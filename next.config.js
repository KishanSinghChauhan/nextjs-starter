const webpack = require("webpack");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const path = require("path");

module.exports = withPlugins([withCSS, withSass], {
  webpack5: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    config.resolve.alias["components"] = path.join(__dirname, "components");
    return config;
  },
});
