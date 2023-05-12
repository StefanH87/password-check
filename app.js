const pwInput1 = document.querySelector("#left-pw");
const pwInput2 = document.querySelector("#right-pw");
const btn = document.querySelector(".pw__btn");
const check = document.querySelector(".test");
const inputEl = document.querySelectorAll(".input__field");

function checkPasswords() {
  if (pwInput1.value === "" && pwInput2.value === "") {
    check.classList.add("test");
    check.classList.remove("symbol__false");
    check.classList.remove("symbol__true");
  } else if (pwInput1.value === pwInput2.value) {
    check.classList.remove("test");
    check.classList.remove("symbol__false");
    check.classList.add("symbol__true");
  } else {
    check.classList.remove("test");
    check.classList.remove("symbol__true");
    check.classList.add("symbol__false");
  }
  s;
}

btn.addEventListener("click", checkPasswords);

// txtInput = function () {
//   if (pwInput1.value.length >= 5) {
//     pwInput1.classList.remove("invalid");
//     pwInput1.classList.add("valid");
//   } else {
//     pwInput1.classList.add("invalid");
//   }
// };

inputEl.addEventListener("click", (event) => {
  console.log(event);

  //   if (EventTarget.value.length >= 5) {
  //     event.classList.remove("invalid");
  //     event.classList.add("valid");
  //   } else {
  //     event.classList.add("invalid");
  //   }
});
