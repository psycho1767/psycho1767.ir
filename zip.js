const { ZipArchive } = require('archiver');
const fs = require('fs');
const path = require('path');

const output = fs.createWriteStream(path.join(__dirname, 'out.zip'));
const archive = new ZipArchive('zip', { zlib: { level: 9 } });

output.on('close', () => {
  const size = archive.pointer();
  const mb = (size / 1024 / 1024).toFixed(2);
  console.log(`✓ out.zip created (${mb} MB)`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add out folder
archive.directory('out/', false);

archive.finalize();
