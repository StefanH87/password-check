import { init, checkData } from "./lib.js";

const form = document.querySelector("#form-wrapper");
form.addEventListener("click", checkData);

init();
