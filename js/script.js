//toggle active
const navmain = document.querySelector(".nav-main");
const menu = document.getElementById("menu");
const popup = document.querySelector("#open-popup");
const form = document.querySelector(".pop-up");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  navmain.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navmain.contains(e.target)) {
    navmain.classList.remove("active");
  }
});
popup.addEventListener("click", () => {
  form.style.display = "block";
  overlay.style.display = "block";
});
// document.getElementById("open-popup").addEventListener("click", function () {
//   popup.style.display = "block";
//   overlay.style.display = "block";
//   //console.log("Button clicked!");
// });
// document.querySelector(".close").addEventListener("click", function () {
//   popup.style.display = "none";
//   overlay.style.display = "none";
//   console.log("Button clicked!");
// });
document.addEventListener("click", function (e) {
  if (overlay.contains(e.target) || close.contains(e.target)) {
    form.style.display = "none";
    overlay.style.display = "none";
  }
});
