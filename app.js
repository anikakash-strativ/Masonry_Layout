const accessKey = '-ro7zEYlBBAPYBhdhv46Z3XTs9ujvgJr7U6NZlYdPjc'; // Replace with your Unsplash API access key

const gallery = document.getElementById('gallery');
const perPage = 30; 
let page = 1; 

async function fetchImages() {
    const query = 'anime';
    const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${query}&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayImages(data.results);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages(images) {
    images.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        const img = document.createElement('img');
        img.src = image.urls.regular;
        img.alt = image.alt_description;
        imageItem.appendChild(img);
        gallery.appendChild(imageItem);
    });
}


fetchImages();

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        page++;
        fetchImages();
    }
});
