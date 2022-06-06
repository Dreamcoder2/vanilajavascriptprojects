const text = document.querySelector(".input-text");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");

button.addEventListener("click", palidrome);

function palidrome() {
  let vowel = 0;
  let wordval = text.value.split("");
  wordval.forEach((el) => {
    if (el.match(/(['a','e','i','o','u'])/)) vowel++;
  });
  result.textContent = `${wordval.join("")} has ${vowel} of vowels`;
}
