
export default {
    input: 'dist/esm2015/index.js',
    output: {
        file: 'dist/fesm2015/tabs.js',
        format: 'es',
        sourcemap: true,
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'tslib': 'tslib'
        }
    },
    external: [
        'react',
        'tslib',
        'react-dom',
        'react-proptypes'
    ]
};