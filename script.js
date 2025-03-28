// JavaScript to animate the numbers in the stats section
const counters = document.querySelectorAll('.number');
const speed = 200; // Change animation speed as needed

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// Slider for course cards
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const totalCards = document.querySelectorAll('.course-card').length;
const visibleCards = 3; // Only 3 cards visible at a time

// Function to move the slider to the next set of cards
function slideToNext() {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the start
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 320}px)`; // Adjust based on card width + gap
}

// Automatic sliding every 3 seconds
const autoSlide = setInterval(slideToNext, 3000); // Change slides every 3 seconds

// Manual sliding functionality
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the start
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 320}px)`; // Adjust based on card width + gap
    resetAutoSlide(); // Reset auto-slide timer after manual control
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - visibleCards; // Loop back to the last set
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 320}px)`; // Adjust based on card width + gap
    resetAutoSlide(); // Reset auto-slide timer after manual control
});

// Reset auto-slide timer when manually controlled
function resetAutoSlide() {
    clearInterval(autoSlide);
    setInterval(slideToNext, 3000);
}

// JavaScript for toggling the menu
const toggleMenu = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});
