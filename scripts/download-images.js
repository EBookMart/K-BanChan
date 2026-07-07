const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  {
    url: 'https://www.genspark.ai/api/files/s/Wp7JJaWG?cache_control=3600',
    dest: 'public/images/ai/home-hero.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/GU34hvvc?cache_control=3600',
    dest: 'public/images/ai/articles/yaksik-dongwon.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/BkRh0Emg?cache_control=3600',
    dest: 'public/images/ai/articles/yukmi.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/K7fi99Pz?cache_control=3600',
    dest: 'public/images/ai/articles/obangsaek.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/wCSesYUk?cache_control=3600',
    dest: 'public/images/ai/articles/nanum.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/m2vp099q?cache_control=3600',
    dest: 'public/images/ai/articles/ingredients-terroir.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/LYGBem6R?cache_control=3600',
    dest: 'public/images/ai/hot/hot8-hero.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/jE19dBuA?cache_control=3600',
    dest: 'public/images/ai/hot/seasonal-curation.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/1A3kc24T?cache_control=3600',
    dest: 'public/images/ai/hot/media-linked-curation.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/upvyPmGr?cache_control=3600',
    dest: 'public/images/ai/banchan/kimchi.webp'
  },
  {
    url: 'https://www.genspark.ai/api/files/s/Hmp4BuYl?cache_control=3600',
    dest: 'public/images/ai/banchan/japchae.webp'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    // Ensure directory exists
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(dest);
    const parsedUrl = new URL(url);
    
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };
    
    https.get(options, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: HTTP Status ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete local file on error
      reject(err);
    });
  });
}

async function run() {
  console.log('Starting image downloads with User-Agent...');
  for (const img of images) {
    try {
      await download(img.url, img.dest);
    } catch (error) {
      console.error(`Error downloading ${img.url}:`, error.message);
    }
  }
  console.log('All downloads completed!');
}

run();
