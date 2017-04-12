#!/usr/bin/env node

const imageToAscii = require("image-to-ascii");

imageToAscii(process.argv[2], (err, converted) => {
  console.log(err || converted);
});
