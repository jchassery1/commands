#!/usr/bin/env node

const imageToAscii = require("image-to-ascii");
imageToAscii("https://octodex.github.com/images/octofez.png", (err, converted) => {
  console.log(err || converted);
});
