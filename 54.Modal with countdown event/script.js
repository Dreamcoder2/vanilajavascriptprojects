const modal = document.querySelector("#modal");
const input = document.querySelector("#link");
const btn = document.querySelector("#btn");
const close = document.querySelector(".close");

btn.addEventListener("click", openpopup);
close.addEventListener("click", closepopup);

// open popup
function openpopup(e) {
  e.preventDefault();
  modal.style.display = "block";
  startcountdown();
}

// close popup
function closepopup(e) {
  // e.preventDefault();
  modal.style.display = "none";
}

// closing in windoiw
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

//counter function
let reversecounter = 10;
let progressbar = document.getElementById("pbar");
let counting = document.getElementById("counting");

function startcountdown() {
  let downloadtimer = setInterval(() => {
    progressbar.value = 10 - --reversecounter;
    if (reversecounter <= -1) {
      clearInterval(downloadtimer);
      closepopup();
      window.open(input.value, "_blank");
    }
    counting.innerHTML = reversecounter;
  }, 1000);
}
reversecounter = 10;
