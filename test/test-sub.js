const popup = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");

document.getElementById("open-popup").addEventListener("click", function () {
  popup.style.display = "block";
  overlay.style.display = "block";
  //console.log("Button clicked!");
});
document.querySelector(".close").addEventListener("click", function () {
  popup.style.display = "none";
  overlay.style.display = "none";
  console.log("Button clicked!");
});
document.addEventListener("click", function (e) {
  if (popup.contains(e.target)) {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
});

// Optional: Close the form when clicking outside of it
// window.addEventListener("click", function (event) {
//   if (event.target == document.querySelector(".pop-up")) {
//     document.querySelector(".pop-up").style.display = "none";
//     document.querySelector(".overlay").style.display = "none";
//   }
// });
//toggle active
// const navmain = document.querySelector(".nav-main");
// const menu = document.getElementById("menu");
// document.addEventListener("click", function (e) {
//   if (!menu.contains(e.target) && !navmain.contains(e.target)) {
//     navmain.classList.remove("active");
//   }
// });
