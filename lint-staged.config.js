// lint-staged.config.js
module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '*.js': () => 'npm run lint:fix git add',
}
