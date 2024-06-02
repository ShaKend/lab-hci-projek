//navbar
const navmain = document.querySelector(".nav-main");
const menu = document.getElementById("menu");

//form subs
const popup = document.querySelector("#open-popup");
const form = document.querySelector(".pop-up");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const submitSubs = document.querySelector(".submit-form");

//input form
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const confirm = document.querySelector("#confirm");
const birth = document.querySelector("#birth");
const terms = document.querySelector("#terms");

//msg eror for form
const nameErr = document.querySelector(".name-error");
const emailErr = document.querySelector(".email-error");
const passErr = document.querySelector(".pass-error");
const confirmErr = document.querySelector(".confirm-error");
const errorField = document.querySelector(".error-msg");

//success
const notice = document.querySelector("form");
const success = document.querySelector(".success");

menu.addEventListener("click", () => {
  navmain.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navmain.contains(e.target)) {
    navmain.classList.remove("active");
  }
});
popup.addEventListener("click", () => {
  notice.reset();
  notice.style.display = "block";
  success.style.display = "none";
  form.style.display = "block";
  overlay.style.display = "block";
});

document.addEventListener("click", function (e) {
  if (overlay.contains(e.target) || close.contains(e.target)) {
    form.style.display = "none";
    overlay.style.display = "none";
  }
});

function name_validate() {
  if (name.value.length < 3) {
    console.log("nama kurang dari 3");
    nameErr.textContent = "Name must be at least 3 letters!";
  } else {
    nameErr.textContent = "";
  }
  return name.value.length > 3;
}

function email_validate() {
  if (!email.value.includes("@gmail.com")) {
    console.log("no @gmail.com");
    emailErr.textContent = "Email must contain @gmail.com";
  } else {
    emailErr.textContent = "";
  }

  return email.value.includes("@gmail.com");
}

function pass_validate() {
  let capital = 0;
  let nums = false;

  for (let i = 0; i < pass.value.length; i++) {
    if ("A" <= pass.value[i] && pass.value[i] <= "Z") {
      capital++;
    }
    if ("0" <= pass.value[i] && pass.value[i] <= "9") {
      nums = true;
    }
  }

  if (capital < 2 || !nums) {
    console.log(pass.value);
    passErr.textContent =
      "Password must contain at least 2 capital and a number!";
  } else {
    passErr.textContent = "";
  }

  return {
    capital: capital > 1,
    nums: nums,
  };
}

function confirm_validate() {
  if (confirm.value != pass.value) {
    console.log("confirm tidak sama");
    confirmErr.textContent = "Confirm password is not same with password";
  } else {
    confirmErr.textContent = "";
  }

  return confirm.value == pass.value;
}

if (!terms.checked) {
  submitSubs.disabled = true;
  submitSubs.style.backgroundColor = "#f2657a";
}
terms.addEventListener("change", (e) => {
  submitSubs.disabled = !terms.checked;
  if (submitSubs.disabled) {
    submitSubs.style.backgroundColor = "#f2657a";
  } else {
    submitSubs.style.backgroundColor = "#fc2947";
  }
  console.log("changed");
});

function form_validate() {
  //const pass_validate = pass_validation(pass.value);
  const gender = document.querySelector('input[name="gender"]:checked');

  if (
    name.value == "" ||
    email.value == "" ||
    pass.value == "" ||
    confirm.value == "" ||
    gender == null ||
    birth.value == null ||
    !terms.checked
  ) {
    errorField.style.display = "block";
    console.log("ada yg null");
    return;
  } else {
    errorField.style.display = "none";
  }

  if (
    name_validate() &&
    email_validate() &&
    pass_validate().capital &&
    pass_validate().nums &&
    confirm_validate()
  ) {
    notice.style.display = "none";
    success.style.display = "block";
    console.log("smua input benar!");
  } else {
    console.log("ada yg slh");
  }
}
