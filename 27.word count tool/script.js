const input = document.querySelector(".input");
const charecter = document.querySelector(".charecter");
const word = document.querySelector(".word");
const readingtime = document.querySelector(".reading-time");
const wordlimits = document.querySelector(".word-limit");

input.addEventListener("keyup", charectercount);
input.addEventListener("keyup", wordcounter);

function charectercount() {
  charecter.innerHTML = input.value.length.;
}

function wordcounter(e) {
  // google metacharecters in javcascript
  let words = input.value.match(/\b['?-?(\w+)?]+\b/gi);
  word.innerHTML = words.length;
  let wordsleft = 10;
  wordlimits.innerHTML = wordsleft - words.length;
}
