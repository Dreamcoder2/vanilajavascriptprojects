const input = document.querySelector("textarea");
const btn = document.querySelector(".btn");
const limit = document.querySelector(".limit");
let max = 50;

const updatelimit = () => {
  limit.textContent = max;
  input.addEventListener("input", () => {
    let inputlength = input.value.length;
    limit.textContent = max - inputlength;
    if (inputlength > max) {
      btn.disabled = true;
      limit.style.color = "red";
    } else {
      btn.disabled = false;
      limit.style.color = "black";
    }
  });
};
updatelimit();

// tweet function
btn.addEventListener("click", (e) => {
  e.preventDefault();
  tweet();
});
const tweet = () => {
  const tweetInput = "https://twitter.com/intent/tweet?text=";
  window.open(`${tweetInput}${input.value}`);
};
