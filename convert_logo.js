import sharp from 'sharp';

// Convert SVG to high-res PNG
sharp('Privacy_Film_Ottawa_Exact.svg')
    .resize(3000) // Set width to 3000px, height maintains aspect ratio
    .png({ quality: 100 })
    .toFile('Privacy_Film_Ottawa_Logo_Official.png')
    .then(info => {
        console.log('Success! Logo saved as Privacy_Film_Ottawa_Logo_Official.png');
        console.log(info);
    })
    .catch(err => {
        console.error('Error converting SVG to PNG:', err);
    });
