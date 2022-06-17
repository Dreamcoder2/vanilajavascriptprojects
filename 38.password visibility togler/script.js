const password = document.querySelector("#password");
const eye = document.querySelector("#eye");

eye.addEventListener("click", () => {
  if (eye.classList.contains("fa-eye")) {
    password.setAttribute("type", "text");
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }
});
