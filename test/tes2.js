document
  .getElementById("openFormButton")
  .addEventListener("click", function () {
    document.getElementById("popUpForm").style.display = "block";
  });

document
  .getElementById("closeFormButton")
  .addEventListener("click", function () {
    document.getElementById("popUpForm").style.display = "none";
  });

// Optional: Close the form when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target != document.getElementById("popUpForm")) {
    document.getElementById("popUpForm").style.display = "none";
  }
});

// Form submission handling
document
  .getElementById("popupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const terms = document.getElementById("terms").checked;

    // Validate form data if needed (example: check if terms are agreed)
    if (!terms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Process form data (example: send to server or log to console)
    console.log({
      name: name,
      email: email,
      dob: dob,
      gender: gender,
      terms: terms,
    });

    // Close the form after submission
    document.getElementById("popUpForm").style.display = "none";

    // Optionally, reset the form
    document.getElementById("popupForm").reset();
  });
