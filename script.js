const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
    index++;
    
    // Reset to first slide if we reach the end
    if (index >= slides.length) {
        index = 0;
    }
    
    // Move the track based on the current index
    const amountToMove = -index * 100;
    track.style.transform = `translateX(${amountToMove}%)`;
}

// Set the interval for auto-sliding (3000ms = 3 seconds)
setInterval(nextSlide, 3000);
