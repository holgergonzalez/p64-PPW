document.getElementById('loadButton').addEventListener('click', function() {
    const images = ['image/h1.jpg', 'image/h2.jpg', 'image/h3.jpg'];  
    const imageContainer = document.getElementById('imageContainer');
    let currentIndex = parseInt(imageContainer.getAttribute('data-current-index')) || 0;

    imageContainer.innerHTML = '';  

    if (currentIndex < images.length) {
        const img = document.createElement('img');
        img.src = images[currentIndex];
        imageContainer.appendChild(img);

        currentIndex++;
        imageContainer.setAttribute('data-current-index', currentIndex);
    } else {
        const message = document.createElement('div');
        message.textContent = 'No hay más imágenes';
        imageContainer.appendChild(message);
    }
});

document.getElementById('deleteButton').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
    imageContainer.removeAttribute('data-current-index');
});
