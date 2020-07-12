const fs = require('fs-extra');
const concat = require('concat');

const target = process.argv.slice(2) || 'es2015';

(async function build() {

  console.info(`Building elements for ${target}...`);

  const files = [
    `./dist/elements-build/polyfills-${target}.js`,
    `./dist/elements-build/runtime-${target}.js`,
    `./dist/elements-build/main-${target}.js`
  ]

  await fs.ensureDir('./dist/elements')

  await concat(files, './dist/elements/chat-widget.js')

  await fs.copy('./demo.html', './dist/elements/index.html')
  await fs.copy('./angular-elements-logo.png', './dist/elements/angular-elements-logo.png')

  console.info('Elements created successfully!')

})()
