export default {
    input: 'dist/esm5/index.js',
    output: {
        file: 'dist/fesm5/tabs.js',
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