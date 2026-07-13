document.addEventListener('DOMContentLoaded', () => {
    const slides = Array.from(document.querySelectorAll('.project-slide'));
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (!slides.length || !nextBtn || !prevBtn) return;

    let currentIndex = slides.findIndex(slide => slide.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;

    function updateCarousel(index) {
        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === index;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentIndex);
    });

    updateCarousel(currentIndex);
});