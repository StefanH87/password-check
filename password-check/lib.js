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

export function resetInput() {
  const resetBtn = document.querySelector(".reset__btn");

  resetBtn.addEventListener("click", () => {
    pwInput1.value = "";
    pwInput2.value = "";
  });
}

//=======================================================//
//     test für refactoring                     //
//=======================================================//

// function setCircleTrue() {
//   check.classList.remove("symbol__false");
//   check.classList.add("symbol__true");
//   return;
// }
// function setCircleFalse() {
//   check.classList.remove("symbol__true");
//   check.classList.add("symbol__false");
//   return;
// }

// function setInputTrue() {
//   field.style.border = "3px solid green";
//   field.style.color = "green";
//   return;
// }

// function setInputFalse() {
//   field.style.border = "3px solid red";
//   field.style.color = "red";
//   return;
// }

// form.forEach((inputEl) => {
//   inputEl.addEventListener("input", (e) => {
//     const firstField = pwInput1.value;
//     const secondField = pwInput2.value;
//   });

//   if (isPasswordEqual(firstField, secondField)) {
//     //true
//     validCheckSingle(firstField, secondField);
//   } else {
//     //false
//   }
// });

// function validCheckSingle(firstField, secondField) {
//   if (oneNumberCheck(firstField, secondField)) {
//   }
//   if (oneNumberCheck(firstField, secondField)) {
//   }
//   if (bigLetterCheck(firstField, secondField)) {
//   }
//   if (smallLetterCheck(firstField, secondField)) {
//   }
//   if (numberCharsCheck(firstField, secondField)) {
//   }
// }

// //-------------Empty Check-----------------//
// function fieldOneEmpty(firstPw) {
//   if (firstField.value === "") {
//     return false;
//   } else {
//     return true;
//   }
//   function fieldOneEmpty(secondPw) {
//     if (secondField.value === "") {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// //-------------Equal Check-----------------//

// function isPasswordEqual(firstPw, secondPw) {
//   return firstField === secondField;
// }

// //-------------min. 1 Number Check-----------------//
// function oneNumberCheck(field) {
//   let oneNumber = /?=.*\d/.test(field);
//   return oneNumber;
// }

// //-------------min. 1 Big letter Check-----------------//
// function bigLetterCheck(field) {
//   let bigLetter = /?=.*[A-Z]/.test(field);
//   return bigLetter;
// }

// //-------------min. 1 small letter-----------------//
// function smallLetterCheck(field) {
//   let smallLetters = /?=.*[a-z]/.test(field);
//   return smallLetters;
// }

// //-------------min. 6 chars / max 20 chars letter Check-----------------//
// function numberCharsCheck(field) {
//   let numberChars = /{6,20}/.test(field);
//   return numberChars;
// }
