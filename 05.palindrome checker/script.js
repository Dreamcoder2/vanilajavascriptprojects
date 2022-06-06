const text = document.querySelector(".input-text");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");

button.addEventListener("click", palidrome);

function palidrome() {
  const inputs = text.value;
  const length = inputs.length;
  const first = inputs.substring(0, Math.floor(length / 2));
  const last = inputs.substring(length - Math.floor(length / 2));
  const rev = last.split("").reverse().join("");
  if (first == rev) {
    result.textContent = ` ${inputs} is a palindrome`;
  } else {
    result.textContent = ` ${inputs} is a Not palindrome`;
  }
}
