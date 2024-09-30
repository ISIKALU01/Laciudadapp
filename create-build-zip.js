const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const buildDir = '.next';
const zipFilePath = 'my-nextjs-app.zip';

// Create the ZIP file
const output = fs.createWriteStream(zipFilePath);
const archive = archiver('zip', {
  zlib: { level: 9 }, // Sets the compression level
});

output.on('close', () => {
  console.log(`The '${zipFilePath}' file has been created.`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add the build directory to the ZIP file
archive.directory(buildDir, false);

// Finalize the ZIP file
archive.finalize();