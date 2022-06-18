const main = document.querySelector(".main");
const alertbox = document.querySelector(".alert");
const exclamationicon = document.querySelector(".fa-exclamation-circle");
const msg = document.querySelector(".msg");
const closeicon = document.querySelector(".fa-times");

//show alert class
class Showalert {
  constructor(state, bordercolor, color) {
    this.state = state;
    this.bordercolor = bordercolor;
    this.color = color;
  }
  trigger(message) {
    alertbox.style.background = this.state;
    alertbox.style.borderColor = this.bordercolor;
    msg.textContent = message;
    msg.style.color = this.color;
    exclamationicon.style.color = this.color;
    closeicon.style.color = this.color;
    alertbox.classList.add("show");
    alertbox.classList.remove("hide");
    setTimeout(() => {
      alertbox.classList.remove("show");
      alertbox.classList.add("hide");
    }, 5000);
    start();
    closeicon.addEventListener("click", () => {
      alertbox.classList.remove("show");
      alertbox.classList.add("hide");
    });
  }
}

const warning = new Showalert("#ffdb9b", "#ffa502", "#ce8500");
const danger = new Showalert("#f8d7da", "#d1281f", "#721c24");

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    danger.trigger("Alert:Please check your sync");
  }
  if (e.target.classList.contains("btn-warning")) {
    warning.trigger("Alert:Please check your sync");
  }
});

// Aalert timeline
function start() {
  const progress = document.querySelector(".progress");
  let width = 0;
  const timeinterval = setInterval(fill, 50);
  function fill() {
    if (width >= 100) {
      clearInterval(timeinterval);
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }
}
