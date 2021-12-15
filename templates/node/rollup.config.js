import ts from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import path from 'path';

const getPlugins = (type) => [
  ts({
    // could generate types inside the each output,
    // but I decide to use tsc to generate single types files outside
    // declarationDir: path.dirname(pkg[type]),
    // declaration: true,
  }),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.ts'],
  }),
];

const config = [
  //umd
  {
    input: 'lib/index.ts',
    output: {
      dir: 'dist',
      format: 'umd',
      name: 'myLib',
    },
    plugins: getPlugins('unpkg'),
  },
  //cjs
  {
    input: 'lib/index.ts',
    output: {
      dir: 'cjs',
      format: 'cjs',
      exports: 'auto',
    },
    plugins: getPlugins('main'),
  },
  //es
  {
    input: 'lib/index.ts',
    output: {
      dir: 'es',
      format: 'es',
    },
    plugins: getPlugins('module'),
  },
];

export default config;
