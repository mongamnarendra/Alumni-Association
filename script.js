document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;  
    const slides = document.querySelectorAll('.slide');  
    const totalSlides = slides.length;  

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
        });
        updateIndicators(); // Update indicators on slide change
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;  
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  
        updateCarousel();
    });

    // Start the carousel
    updateCarousel();
});