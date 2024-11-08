

let btt = document.getElementById("button");
btt.addEventListener("click", function (event) {
  event.preventDefault();
  let cont = document.getElementById("dropcont");
  if (cont.style.display === "none") {
    cont.style.display = "block";
  } else {
    cont.style.display = "none";
  }
});

// script.js
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

