document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-theme");

  button.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});
