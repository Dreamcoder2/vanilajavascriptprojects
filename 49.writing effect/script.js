const typedword = document.querySelector(".typed-word");
const cursor = document.querySelector(".cursor");

const wordarray = [
  "MERN Stack Developer.",
  " UI Designer.",
  "Creative Programmer.",
];
let wordarrayIndex = 0;
let letterIndex = 0;

const typingdelay = 200;
const erasingdelay = 100;
const newworddelay = 2000;

//typing function
function type() {
  if (letterIndex < wordarray[wordarrayIndex].length) {
    typedword.textContent += wordarray[wordarrayIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingdelay);
  } else {
    setTimeout(erase, newworddelay);
  }
}
// Erase function
function erase() {
  if (letterIndex > 0) {
    typedword.textContent = wordarray[wordarrayIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, erasingdelay);
  } else {
    wordarrayIndex++;
    if (wordarrayIndex >= wordarray.length) {
      wordarrayIndex = 0;
    }
    setTimeout(type, typingdelay);
  }
}

type();
