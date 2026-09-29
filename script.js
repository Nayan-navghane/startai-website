/* ==============================
   STARTAI JAVASCRIPT
   ============================== */

// Mobile menu
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuButton.textContent = "✕";
  } else {
    menuButton.textContent = "☰";
  }
});


// Close mobile menu after clicking a link
const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuButton.textContent = "☰";
  });
});


// Automatically update copyright year
document.getElementById("year").textContent = new Date().getFullYear();


// Simple reveal animation
const revealElements = document.querySelectorAll(
  ".learning-card, .school-content, .school-visual, .about, .philosophy"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
