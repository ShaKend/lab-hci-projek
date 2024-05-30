//toggle active
const navmain = document.querySelector(".nav-main");
const menu = document.getElementById("menu");
const popup = document.querySelector("#open-popup");
const form = document.querySelector(".pop-up");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const submitSubs = document.querySelector(".submit-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const birth = document.querySelector("#birth");
const terms = document.querySelector("#terms");

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

// console.log(name.value);
// console.log(email.value);
// console.log(gender);
// submitSubs.addEventListener("click", (e) => {
//   console.log(name.value);
//   console.log(email.value);
//   console.log(gender.value);
// });
function test() {
  const nameErr = document.querySelector(".name-error");
  const emailErr = document.querySelector(".email-error");
  const passErr = document.querySelector(".pass-error");
  const confirmErr = document.querySelector(".confirm-error");
  const gender = document.querySelector('input[name="gender"]:checked');
  const errorField = document.querySelector(".error-msg");

  if (name.value == "" || email.value == "" || gender == null || birth.value == null || !terms.checked) {
    errorField.style.display = "block";
    console.log("ada yg null");
  }

  if (name.value.length < 3) {
    console.log("nama kurang dari 3");
    nameErr.textContent = "Name must be at least 3 letters!";
  }

  if (!email.value.includes("@gmail.com")) {
    console.log("no @gmail.com");
    emailErr.textContent = "Email must contain @gmail.com";
  }
}
