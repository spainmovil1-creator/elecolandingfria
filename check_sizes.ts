import fs from 'fs';
['./public/elena2.jpg', './public/diagnostico.jpg', './public/mimapa.jpg'].forEach(file => {
  try {
    const stats = fs.statSync(file);
    console.log(`${file}: ${stats.size} bytes`);
  } catch (e) {
    console.error(`Error with ${file}:`, e.message);
  }
});
