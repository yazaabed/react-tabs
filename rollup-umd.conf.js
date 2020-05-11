import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'dist/esm5/index.js',
    output: {
        file: 'dist/bundles/tabs.umd.js',
        name: 'Tabs',
        format: 'umd',
        sourcemap: true,
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'prop-types': 'PropTypes'
        }
    },
    external: [
        'react',
        'react-dom',
        'prop-types'
    ],
    plugins: [
        resolve({
            browser: true,
            dedupe: ['tslib']
        })
    ]
};