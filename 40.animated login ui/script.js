const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const forgot = document.querySelector(".forgot-link");
const loginsection = document.querySelector(".login");
const registersection = document.querySelector(".register");
const forgotsection = document.querySelector(".forgot");
const close = document.querySelector(".close");

register.addEventListener("click", (e) => {
  loginsection.style.display = "none";
  registersection.style.display = "flex";
});
login.addEventListener("click", (e) => {
  registersection.style.display = "none";
  loginsection.style.display = "flex";
});
forgot.addEventListener("click", (e) => {
  loginsection.style.display = "none";
  forgotsection.style.display = "flex";
});

close.addEventListener("click", () => {
  forgotsection.style.display = "none";
  loginsection.style.display = "flex";
});
