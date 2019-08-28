import cleanup from 'rollup-plugin-cleanup'
export default {
  input: 'dist/sample-ts.js',
  output: {
    file: 'dist/bundle/cjs/index.ts',
    format: 'cjs',
    name: 'main',
    banner:
      '/**\n' +
      ' * Copyright (c) Phillip Henslee. All Rights Reserved.\n' +
      ' *\n' +
      ' * This source code is licensed under the MIT license found in the\n' +
      ' * LICENSE file in the root directory of this source tree.\n' +
      ' *\n' +
      ' */',
  },
  plugins: [cleanup()],
}
