document.addEventListener("DOMContentLoaded", () => {
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
  reveal(); // run once on load

  const button = document.getElementById("toggle-theme");
  button.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});
