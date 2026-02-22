// Simple smooth scroll animation
// document.querySelectorAll("a").forEach(link => {
//   link.addEventListener("click", e => {
//     e.preventDefault();
//   });
// });

// js/script.js
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));
