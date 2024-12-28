// main.js

// 1) MOBILE MENU TOGGLE
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  // If there's no height set or it's 0px, we expand; otherwise, collapse
  if (navLinks.style.height === "0px" || !navLinks.style.height) {
    navLinks.style.height = "200px";
  } else {
    navLinks.style.height = "0px";
  }
}

// Expose the function if you're calling it inline in HTML (e.g., onclick="toggleMenu()")
window.toggleMenu = toggleMenu;


// 2) FADE-IN ANIMATIONS WITH INTERSECTION OBSERVER
// Grab all elements that have the "fade-in" class
const fadeInElements = document.querySelectorAll('.fade-in');

// Configure the observer
const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the "show" class to trigger the CSS transition
      entry.target.classList.add('show');
      // Stop observing once it's shown if you only want it to animate once
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each .fade-in element
fadeInElements.forEach(el => fadeInObserver.observe(el));
