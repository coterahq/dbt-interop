import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'index.ts',
    output: [
      {
        file: 'dist/cjs/bundle.cjs',
        format: 'cjs', 
        sourcemap: true
      },
      {
        file: 'dist/esm/bundle.mjs',
        format: 'esm', 
        sourcemap: true
      }
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json'
      }),
      nodeResolve(),
      commonjs() // Convert CommonJS modules to ESM
    ]
  }
];