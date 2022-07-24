let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active")
})

toggle.addEventListener("click", () => {
  menu.classList.toggle("active")
})