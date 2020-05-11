import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'dist/esm5/index.js',
    output: {
        file: 'dist/bundles/tabs.umd.min.js',
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
        }),
        terser({
            output: {
                comments: false,
            },
            compress: {
                ecma: 5,
                pure_getters: true,
                passes: 3,
            }
        })
    ]
};