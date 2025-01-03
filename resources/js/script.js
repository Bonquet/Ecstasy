

// Wait for the entire page to load
window.addEventListener("load", function() {
  const loadingScreen = document.getElementById("loadingScreen");
  
  // Add fade-out effect
  loadingScreen.classList.add("fade-out");

  // Remove the loading screen from the DOM after fade-out animation ends
  loadingScreen.addEventListener("transitionend", () => {
    loadingScreen.style.display = "none";
  });
});


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


