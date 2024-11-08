

document.getElementById('scrollLink').addEventListener('click', function(event) {
  event.preventDefault();  // Prevent the default link behavior
  document.getElementById('ourprices').scrollIntoView({
      behavior: 'smooth'  // Enable smooth scrolling
  });
});


document.getElementById('home').addEventListener('click', function() {
  window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
  });
});




// script.js
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down and more than 100px from the top
        navbar.style.top = '0'; // Show the navbar
        navbar.classList.add('scrolled'); // Add background color
        logo.style.opacity = '1';  // Show the logo
    } else if (scrollTop <= 100) {
        // Near the top of the page
        navbar.style.top = '0'; // Show the navbar
        navbar.classList.remove('scrolled'); // Remove background color
        logo.style.opacity = '1';  // Show the logo
    } else {
        // Scrolling up
        navbar.style.top = '-60px'; // Hide the navbar
        navbar.classList.remove('scrolled'); // Remove background color
        logo.style.opacity = '0';  // Hide the logo
    }
    lastScrollTop = scrollTop;
});













function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.style.right = '0';
  overlay.style.display = 'block';
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.style.right = '-250px';
  overlay.style.display = 'none';
}




document.getElementById('quarterlyLink').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.prices').style.display = 'flex';
  document.querySelector('.prices2').style.display = 'none';
});

document.getElementById('annualLink').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.prices').style.display = 'none';
  document.querySelector('.prices2').style.display = 'flex';
});

// Set default view to Quarterly
document.querySelector('.prices').style.display = 'flex';
document.querySelector('.prices2').style.display = 'none';




// Toggle navbar and hamburger icon for mobile view
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');         // Toggle the navbar
  hamburger.classList.toggle('active');    // Toggle the icon between hamburger and X
});

hamburger.addEventListener('click', () => {
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');  // Change to fa-xmark for a different style
});



const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;
const totalSlides = slideImages.length;

// Initialize dots with Font Awesome icons
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('i');
  dot.classList.add('dot', 'fa-solid', i === currentIndex ? 'fa-circle-dot' : 'fa-circle');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

// Update dot styles and icons based on active slide
function updateDots() {
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('fa-circle-dot', index === currentIndex);
    dot.classList.toggle('fa-circle', index !== currentIndex);
  });
}

// Function to update slide position
function updateSlidePosition() {
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
  updateDots();
}

// Go to a specific slide
function goToSlide(index) {
  currentIndex = index;
  updateSlidePosition();
}

// Show next and previous slides with looping
function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

// Swipe detection for mobile
let startY, endX;
slides.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

slides.addEventListener('touchend', (event) => {
  endX = event.changedTouches[0].clientX;
  if (startX > endX + 30) showNextSlide();
  else if (startX < endX - 30) showPrevSlide();
});














const quarterlyPrices = document.querySelector('#quarterlyPrices .pricing-slider');
const annualPrices = document.querySelector('#annualPrices .pricing-slider');
const pricesContainer = document.querySelector('.prices');
const prices2Container = document.querySelector('.prices2');
let currentQuarterlyIndex = 0;
let currentAnnualIndex = 0;
const totalQuarterlySlides = quarterlyPrices.children.length;
const totalAnnualSlides = annualPrices.children.length;

// Show Quarterly and hide Annual by default
document.getElementById('quarterlyLink').addEventListener('click', function (event) {
  event.preventDefault();
  pricesContainer.style.display = 'flex';
  prices2Container.style.display = 'none';
  currentQuarterlyIndex = 0;
  updateQuarterlyPosition();
});

document.getElementById('annualLink').addEventListener('click', function (event) {
  event.preventDefault();
  pricesContainer.style.display = 'none';
  prices2Container.style.display = 'flex';
  currentAnnualIndex = 0;
  updateAnnualPosition();
});

// Update positions for Quarterly and Annual sliders
function updateQuarterlyPosition() {
  quarterlyPrices.style.transform = `translateX(${-currentQuarterlyIndex * 100}%)`;
}

function updateAnnualPosition() {
  annualPrices.style.transform = `translateX(${-currentAnnualIndex * 100}%)`;
}

// Swipe handling for Quarterly Pricing
quarterlyPrices.addEventListener('touchstart', (e) => startSwipe(e, 'quarterly'));
quarterlyPrices.addEventListener('touchend', (e) => endSwipe(e, 'quarterly'));

// Swipe handling for Annual Pricing
annualPrices.addEventListener('touchstart', (e) => startSwipe(e, 'annual'));
annualPrices.addEventListener('touchend', (e) => endSwipe(e, 'annual'));

// Swipe detection variables
let startX;

function startSwipe(event, type) {
  startX = event.touches[0].clientX;
}

function endSwipe(event, type) {
  const endX = event.changedTouches[0].clientX;
  if (startX > endX + 30) {
    // Swipe left (Next Slide)
    if (type === 'quarterly') {
      currentQuarterlyIndex = (currentQuarterlyIndex + 1) % totalQuarterlySlides;
      updateQuarterlyPosition();
    } else {
      currentAnnualIndex = (currentAnnualIndex + 1) % totalAnnualSlides;
      updateAnnualPosition();
    }
  } else if (startX < endX - 30) {
    // Swipe right (Previous Slide)
    if (type === 'quarterly') {
      currentQuarterlyIndex = (currentQuarterlyIndex - 1 + totalQuarterlySlides) % totalQuarterlySlides;
      updateQuarterlyPosition();
    } else {
      currentAnnualIndex = (currentAnnualIndex - 1 + totalAnnualSlides) % totalAnnualSlides;
      updateAnnualPosition();
    }
  }
}

