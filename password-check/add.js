import { checkData } from "./lib.js";
import { helpMenue } from "./lib.js";
import { validCheck } from "./lib.js";
import { resetInput } from "./lib.js";

// function everLoad(event) {
//   event.preventDefault();
// }
// const helpBtn = document.querySelector(".help__btn");
// helpBtn.addEventListener("click", helpMenue);

const form = document.querySelector("#form-wrapper");

form.addEventListener("click", checkData);

checkData();
validCheck();
helpMenue();
resetInput();

// everLoad(checkdata);
