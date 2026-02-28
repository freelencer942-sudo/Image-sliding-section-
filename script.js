document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    // 1. Dynamically set the wrapper and slide widths based on the number of images
    // For 5 images, wrapper becomes 500% wide, each slide becomes 20% wide.
    wrapper.style.width = `${totalSlides * 100}%`;
    slides.forEach(slide => {slide.style.width = `${100 / totalSlides}%`;});
    // 2. Function to handle the auto-sliding logic
    function slideNext() {
        // Increment index, loop back to 0 if we hit the end
        currentIndex = (currentIndex + 1) % totalSlides;
        // Calculate how far to shift the wrapper to the left
        const shiftPercentage = (100 / totalSlides) * currentIndex;
        // Apply the transform
        wrapper.style.transform = `translateX(-${shiftPercentage}%)`;
    }
    // 3. Set the interval for auto-sliding (3500ms = 3.5 seconds)
    setInterval(slideNext, 3500);
});
