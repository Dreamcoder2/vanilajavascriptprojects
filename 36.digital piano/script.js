const keys = document.querySelectorAll(".key");
const notes = document.querySelector(".key-pressed");

window.addEventListener("keydown", playnotes);

function playnotes(e) {
  console.log("playing");
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  const keynotes = key.dataset.note;
  key.classList.add("playing");
  notes.innerHTML = keynotes;
  audio.currenttime = 2;
  audio.play();
}

keys.forEach((key) => {
  key.addEventListener("transitionend", removetransaction);
});

function removetransaction(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
