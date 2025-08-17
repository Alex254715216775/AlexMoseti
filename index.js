const typing = document.getElementById("typing");
const words = [
  "Cybersecurity Enthusiast 🔒",
  "AI Innovator 🤖",
  "Full-Stack Developer 💻",
  "Creative Designer 🎨"
];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  let currentWord = words[i];
  typing.textContent = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 60);
  } else {
    // flip delete mode
    if (!isDeleting) {
      setTimeout(() => isDeleting = true, 800); // pause before deleting
    } else {
      isDeleting = false;
      i = (i + 1) % words.length; // move to next word
    }
    setTimeout(typeEffect, 200);
  }
}
typeEffect();



// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll Animation
const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));


const blogCards = document.querySelectorAll(".blog-card");

  const blogObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        blogObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  blogCards.forEach((card) => blogObserver.observe(card));

  const contactElements = document.querySelectorAll("#contact .hidden");

  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        contactObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  contactElements.forEach((el) => contactObserver.observe(el));

  const footerElements = document.querySelectorAll("#footer .hidden");

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        footerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  footerElements.forEach(el => footerObserver.observe(el));