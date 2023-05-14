const pwInput1 = document.querySelector("#left-pw");
const pwInput2 = document.querySelector("#right-pw");
const btn = document.querySelector(".pw__btn");
const form = document.querySelector("#form-wrapper");
const check = document.querySelector(".test");
const passwordFields = document.querySelectorAll(".input__field");

// export function arePasswordEqual (pw1,pw2){}

export function checkData(event) {
  // event.preventDefault();

  passwordFields.forEach((field) => {
    if (pwInput1.value === "" && pwInput2.value === "") {
      field.style.border = "3px solid rgb(49, 49, 49)";
      field.style.color = "3px solid rgb(49, 49, 49)";
      check.classList.remove("symbol__true");

      check.classList.remove("symbol__false");
      check.classList.add(".test");
      return;
    }

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
      return;
    }
  });
}

export function validCheck(field) {
  if (pwInput1.value === 0 && pwInput2.value === 0) {
    return false;
  } else if (pwInput1.value === "" && pwInput2.value === "") {
    return false;
  } else if (pwInput1.value !== pwInput2.value) {
    return;
  } else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(field.value)) {
    return true;
  }
}

export function helpMenue() {
  const helpBtn = document.querySelector(".help__btn");
  const menueField = document.querySelector(".condition__wrapper");
  helpBtn.addEventListener("click", helpMenue);

  if (menueField.style.display === "none") {
    menueField.style.display = "block";
    helpBtn.style.backgroundColor = "rgb(41, 92, 105)";
    helpBtn.style.color = "rgb(36, 36, 36)";
  } else {
    menueField.style.display = "none";
    helpBtn.style.backgroundColor = "transparent";
    helpBtn.style.color = "rgb(41, 92, 105)";
  }
}
