import { emailLength, emailSpecialChar, is_EPGE } from "./validator.js";

const submitBtn = document.getElementById("submitBtn");
const email = document.getElementById("email_input");
const messager = document.getElementById("msg")

submitBtn.addEventListener("click", () => {
  
  if(!emailLength(email)){
    messager.innerHTML = "[ERROR] email muito grande ou muito pequeno"
    email.value = " ";
  }
  messager.innerHTML = " ";
  if (!emailSpecialChar(email.value.trim())) {
    messager.innerHTML = "[ERROR] Caracteres inválidos";
    email.value = "";
  }

 /*is_EPGE(email)
 ?alert("Im true")
 :alert("IM false")
*/
});


document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", toggleTheme);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".Logo");

  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      softReload();
    });
  }
});