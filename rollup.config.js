import cleanup from 'rollup-plugin-cleanup'
export default {
  input: 'dist/index',
  output: {
    file: 'dist/bundle/es/invest.js',
    format: 'esm',
    name: 'invest',
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
