import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageUrl = 'https://thekenyatimescdn-ese7d3e7ghdnbfa9.z01.azurefd.net/prodimages/uploads/2025/07/A-collage-of-Cabinet-Secretary-Hassan-Joho-right-and-Simba-Cement-gate-left.-PHOTOJoho.png';
const outputPath = path.join(__dirname, '..', 'public', 'hero-image.png');

const file = fs.createWriteStream(outputPath);

https.get(imageUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to get '${imageUrl}' (${response.statusCode})`);
    return;
  }

  response.pipe(file);

  file.on('finish', () => {
    file.close(() => {
      console.log('Image downloaded and saved to', outputPath);
    });
  });
}).on('error', (err) => {
  fs.unlink(outputPath, (unlinkErr) => {
    if (unlinkErr) console.error('Error deleting file:', unlinkErr);
  });
  console.error('Error downloading image:', err.message);
});

