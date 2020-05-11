module.exports = {
    addons: ['@storybook/addon-storysource'],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.md$/,
            use: [
                {
                    loader: 'markdown-loader',
                }
            ]
        });

        // Return the altered config
        return config;
    },
};