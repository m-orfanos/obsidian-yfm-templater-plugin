import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.ts',
  output: {
    dir: '.',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default'
  },
  external: ['obsidian', 'path'],
  plugins: [
    typescript(),
    nodeResolve({ browser: true }),
    commonjs(),
    commonjs({
      include: "node_modules/**",
    })
  ]
};
