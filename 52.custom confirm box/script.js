const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const confirmEl = document.querySelector(".confirm");
const closeEl = document.querySelector(".close");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const btnok = document.querySelector(".btn-ok");
const btncancel = document.querySelector(".btn-cancel");

// btn1.addEventListener("click", () => {
//   console.log("clicking");
//   changebg("#9c36b5");
// });

// btn2.addEventListener("click", () => {
//   console.log("clicking");
//   changebg("#74c0fc");
// });

// function changebg(color) {
//   let x = confirm("Change background to " + color);
//   if (x == true) {
//     document.body.style.backgroundColor = color;
//   }
// }

//CUSTOM CONFIRM BOX

class ShowConfirm {
  constructor(title, content, ok, cancel) {
    this.title = title;
    this.content = content;
    this.ok = ok;
    this.cancel = cancel;
  }
  trigger(callbackfn) {
    title.textContent = this.title;
    content.textContent = this.content;
    btnok.innerText = this.ok;
    btncancel.innerText = this.cancel;

    confirmEl.classList.remove("close-modal");

    closeEl.addEventListener("click", this.closeModal);
    btncancel.addEventListener("click", this.closeModal);

    btnok.addEventListener("click", () => {
      callbackfn();
      this.closeModal();
    });
  }
  closeModal() {
    confirmEl.classList.add("close-modal");
  }
}

// Btn event listner
btn1.addEventListener("click", () => {
  changebg("#9c36b5");
});

btn2.addEventListener("click", () => {
  changebg("#74c0fc");
});

const changebgc = new ShowConfirm(
  "Change Background",
  "Are You sure want to change Your Background",
  "Change",
  "Don't change"
);

function changebg(color) {
  changebgc.trigger(setBg);
  function setBg() {
    document.body.style.backgroundColor = color;
  }
}
