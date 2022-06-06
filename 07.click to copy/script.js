const coupen = document.querySelector(".copy-text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", copytext);

function copytext() {
  //   coupen.select();
  //   coupen.setSelectionRange(0, 99);
  //   document.execCommand("copy");

  //   btn.textContent = "copied!";
  //   setTimeout(() => {
  //     btn.textContent = "copy";
  //   }, 3000);
  navigator.clipboard.writeText(coupen.value).then(() => {
    btn.textContent = "copied!";
    setTimeout(() => {
      btn.textContent = "copy";
    }, 3000);
  });
}
