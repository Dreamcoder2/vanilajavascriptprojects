const date = document.querySelector(".date");
const time = document.querySelector(".time");
let now = new Date();

// const day = today.getDay();
// const date = today.getDate();
// const month = today.getMonth();
// const year = today.getFullYear();

const hours = `${now.getHours()}`.padStart(2, 0);
const minitues = now.getMinutes();
const session = hours < 12 ? "AM " : "PM";

time.textContent = `${hours - 12}:${minitues}  ${session}`;

const options = {
  day: "numeric",
  month: "1digit",
  year: "numeric",
  weekday: "long",
};

const locate = navigator.language;

date.textContent = new Intl.DateTimeFormat(locate, options).format(now);
