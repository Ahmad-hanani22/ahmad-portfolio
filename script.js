// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Reveal Animation Fix (Works on Mobile)
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  reveals.forEach((item) => {
    observer.observe(item);
  });

  // Important fix for mobile: show all elements if observer fails
  setTimeout(() => {
    reveals.forEach((item) => {
      item.classList.add("show");
    });
  }, 500);
});