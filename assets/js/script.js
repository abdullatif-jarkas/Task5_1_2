// Giving left value to slides
let slides = document.querySelectorAll(".slide");
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Generate Indicators
let indicators = document.querySelector(".indicators");
for (let i = 1; i <= slides.length; i++) {
  indicators.innerHTML += `<span class="indicator bg-dark" data-index="${i}"></span>`;
}

// Get Slider Items
let sliderItems = Array.from(
  document.querySelectorAll(".slider-container .slide")
);

// Set Current Slide
let currentSlide = 1;

// Prev and Next Buttons
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

// Handle click on Prev, Next Buttons 
counter = 0;
let sliders = document.querySelector('.sliders');
prevBtn.addEventListener("click", () => {
  if (counter <0) {
    counter += 100;
    sliders.style.left = `${counter}%`;
  }

  if(counter == 0) {
    prevBtn.classList.add('disabled')
  }
  if (counter != (sliderItems.length-1) * -100){
    nextBtn.classList.remove('disabled');
  }
});
nextBtn.addEventListener("click", () => {
  if(counter > ((sliderItems.length-1) * -100)){
    counter -= 100;
    sliders.style.left = `${counter}%`;
  } 
  if(counter == (sliderItems.length-1) * -100) {
    nextBtn.classList.add('disabled');
  } 
  if (counter != (sliderItems.length-1) * -100){
    nextBtn.classList.remove('disabled');
  }
  if (counter < 0) {
    prevBtn.classList.remove('disabled')
  }
});

// Handle Click on Indicators
let indicatorArr = document.querySelectorAll('.indicator');
indicatorArr.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    sliders.style.left = `-${index * 100}%`
  })
})