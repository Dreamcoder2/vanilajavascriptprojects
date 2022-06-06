let time = 100;
let promotime = time * 60;

let counting = document.querySelector(".countdown");

function startcountdown() {
  let promotimer = setInterval(() => {
    if (promotime <= 0) {
      clearInterval(promotimer);
      counting.textContent = "offer ended";
    } else {
      promotime--;
      const days = Math.floor(promotime / 3600 / 24);
      const hours = Math.floor(promotime / 3600) % 24;
      const minutes = Math.floor(promotime / 60) % 60;
      const seconds = Math.floor(promotime) % 60;
      counting.textContent = `Time: ${format(hours)}hr : ${format(
        minutes
      )}min : ${format(seconds)}Sec`;
    }
  }, 1000);
}

function format(t) {
  if (t) {
    return t < 10 ? `0${t}` : t;
  }
  if (t == 0) {
    return "";
  }
}
startcountdown();
