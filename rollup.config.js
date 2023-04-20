const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'main.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs(),
  ],
};