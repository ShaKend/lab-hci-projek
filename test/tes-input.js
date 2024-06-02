const pass = document.querySelector("#password");
const conf = document.querySelector("#confirm");
const terms = document.querySelector("#terms");
const button = document.querySelector("button");

function validate(e) {
  let capital = 0;
  let nums = false;
  let count = 0;

  for (let i = 0; i < e.length; i++) {
    if ("A" <= e[i] && e[i] <= "Z") {
      capital++;
    }
    if ("0" <= e[i] && e[i] <= "9") {
      nums = true;
    }
  }

  return {
    capital: capital,
    nums: nums,
  };
}

terms.addEventListener("change", (e) => {
  button.disabled = !terms.checked;
});

function tes() {
  let validation = validate(pass.value);

  if (validation.capital <= 2 || !validation.nums) {
    console.log("Input salah!");
  } else {
    console.log("Input benar");
  }
  validate(pass.value);
}
