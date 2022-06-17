function start() {
  const progress = document.querySelector(".progress");
  let width = 0;
  const timeinterval = setInterval(fill, 20);
  function fill() {
    if (width >= 80) {
      clearInterval(timeinterval);
    } else {
      width++;
      progress.style.width = width + "%";
      progress.innerHTML = width + "%";
    }
  }
}
start();
