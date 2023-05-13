const pwInput1 = document.querySelector("#left-pw");
const pwInput2 = document.querySelector("#right-pw");
const btn = document.querySelector(".pw__btn");
const form = document.querySelector("#form-wrapper");
const check = document.querySelector(".test");
const passwordFields = document.querySelectorAll(".input__field");

form.addEventListener("submit", checkData);

function checkData(event) {
  event.preventDefault();

  // check.classList.add("test");

  passwordFields.forEach((field) => {
    if (!validCheck(field)) {
      check.classList.remove("symbol__true");
      check.classList.add("symbol__false");
      field.style.border = "3px solid red";
      field.style.color = "red";
      return;
    } else {
      check.classList.remove("symbol__false");
      check.classList.add("symbol__true");
      field.style.border = "3px solid green";
      field.style.color = "green";
    }
  });
}

function validCheck(field) {
  if (field.value.length === 0) {
    return false;
  } else if (pwInput1.value === "" && pwInput2.value === "") {
    return false;
  } else if (field.value.length <= 5) {
    return false;
  } else if (field.value === field.value) {
    return true;
  } else {
    return true;
  }
}
