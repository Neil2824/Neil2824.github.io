document.addEventListener("DOMContentLoaded", () => {
  // Reveal sections on scroll
  const sections = document.querySelectorAll("section");

  const reveal = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();

  // Theme toggle (SAFE)
  const button = document.getElementById("toggle-theme");

  if (button) {
    button.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
});
