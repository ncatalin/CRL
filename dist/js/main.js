// Menu
const getToggle = document.querySelector(".nav-toggle");
const getMenu = document.querySelector(".nav");

getToggle.addEventListener("click", () => {
  getMenu.classList.toggle("nav-visible");
});
