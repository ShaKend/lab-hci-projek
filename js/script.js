//toggle active
const navmain = document.querySelector(".nav-main");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  navmain.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navmain.contains(e.target)) {
    navmain.classList.remove("active");
  }
});
