module.exports = function (api) {
  api.cache(true);

  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === 'production') {
    return {
      "presets": ["@babel/preset-env"],
      "env": {
        "production": {
          "presets": ["minify"]
        }
      }
    }
  } else {
    return {
      "presets": ["@babel/preset-react"],
      "plugins": ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread"]
    }
  }
};