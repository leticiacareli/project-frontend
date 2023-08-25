const mobileMenuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fechar o menu quando clicar fora
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!navbar.contains(target)) {
        navList.classList.remove('active');
    }
});


const openGalleryButtons = document.querySelectorAll('.open-gallery-button');
const galleryModal = document.querySelector('.gallery-modal');
const closeButtonContainer = document.querySelector('.close-button-container');
const gallerySlider = document.querySelector('.gallery-slider');

openGalleryButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        openGallery(index);
    });
});

closeButtonContainer.addEventListener('click', closeGallery);

function openGallery(startIndex) {
    galleryModal.style.display = 'flex';
    showImage(startIndex);
}

function closeGallery() {
    galleryModal.style.display = 'none';
}

let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.gallery-slider img');
    if (index >= 0 && index < images.length) {
        currentIndex = index;
        const translateX = -currentIndex * 100;
        gallerySlider.style.transform = `translateX(${translateX}%)`;
    }
}
