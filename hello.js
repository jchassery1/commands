#!/usr/bin/env node
// Typically, when executing NodeJS files, we tell the system to use the
// appropriate interpreter by prefixing node before the file. However, we
// want to be able to execute our CLI app globally from anywhere in the
// system, and without having to specify the node interpreter every time.
// Therefore, our first line is the shebang expression.

// pure javascript code after shebang expression
console.log(`HELLO ${process.argv[2]}`)


const imageToAscii = require("image-to-ascii");

if (process.argv[2] === 'dog') {
  imageToAscii("https://octodex.github.com/images/octofez.png", (err, converted) => {
    console.log(err || converted);
  });
} else if (process.argv[2] === 'cat') {
  imageToAscii("https://img.clipartfest.com/3527dc16299af741e07ed8c3b8671203_tag-cat-clipart-clipart-cat-clipart-png_2400-2362.png", (err, converted) => {
    console.log(err || converted);
  });
}
