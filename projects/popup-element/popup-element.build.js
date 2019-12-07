const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/popup-element/runtime-es5.js',
    './dist/popup-element/polyfills-es5.js',
    './dist/popup-element/scripts.js',
    './dist/popup-element/main-es5.js'
  ];

  // console.log(await fs.ensureDir('popup-element'));
  await concat(files, './dist/popup-element/popup-element.js');
  // await fs.copyFile(
  //   './dist/elements/styles.css',
  //   'elements/styles.css'
  // );
})();
