"strict";

const lists = document.querySelectorAll("li");
let subMenu = document.querySelector(".header--subMenu");

lists.forEach((item) => {
  item.addEventListener("click", () => {
    subMenu.classList.toggle("hidden");
  });
});
