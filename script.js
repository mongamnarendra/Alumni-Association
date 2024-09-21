// JavaScript for the Success Story Carousel

let currentSlide = 0;  // Keep track of the current slide
const slides = document.querySelectorAll('.slide');  // Select all slides
const totalSlides = slides.length;  // Get the total number of slides

// Function to update the carousel based on the current slide index
function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
}

// Initialize the carousel on load
updateCarousel();

// Event listener for the "Next" button
document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;  // Move to the next slide, loop back to the start if it's the last slide
  updateCarousel();
});

// Event listener for the "Previous" button (if you add one)
document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Move to the previous slide, loop back to the end if it's the first slide
  updateCarousel();
});
