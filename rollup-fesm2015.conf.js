
export default {
    input: 'dist/esm2015/index.js',
    output: {
        file: 'dist/fesm2015/tabs.js',
        format: 'es',
        sourcemap: true,
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'tslib': 'tslib',
            'prop-types': 'PropTypes'
        }
    },
    external: [
        'react',
        'tslib',
        'react-dom',
        'prop-types'
    ]
};