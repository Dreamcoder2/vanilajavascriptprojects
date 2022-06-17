const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1input = document.querySelector(".cur-1-input");
const cur2input = document.querySelector(".cur-2-input");
const baserate = document.querySelector(".base");
const switchcur = document.querySelector(".switch-cur");
const countries = [
  {
    name: "EUR",
    flag: "https://www.worldometers.info/img/flags/cm-flag.gif",
  },
];

// api

const apiurl =
  "https://v6.exchangerate-api.com/v6/f0e8f47678e69fd73e4ffb04/latest/";
const key = "f0e8f47678e69fd73e4ffb04";

// GET EXCHANGE RATES
async function getexchangerates() {
  const cur1value = cur1.value;
  const cur2value = cur2.value;
  const response = await fetch(`${apiurl}${cur1value} `);
  const data = await response.json();
  console.log(data);

  const rate = data.conversion_rates[cur2value];
  baserate.textContent = `
  1 ${cur1value} = ${rate.toFixed(2)} ${cur2value}
  `;

  cur2input.value = (cur1input.value * rate).toFixed(2);
}
getexchangerates();

//addevent listners
cur1.addEventListener("change", () => {
  getexchangerates();
  getflag();
});
cur2.addEventListener("change", () => {
  getexchangerates();
  getflag();
});

cur1input.addEventListener("input", getexchangerates);
cur2input.addEventListener("input", getexchangerates);

//switch
switchcur.addEventListener("click", () => {
  const cur1val = cur1.value;
  cur1.value = cur2.value;
  cur2.value = cur1val;
  switchcur.classList.toggle("rotate");
  getexchangerates();
  getflag();
});

//get flg
function getflag() {
  countries.forEach((country) => {
    if (cur1.value == country.name) {
      const imgsrc = document.querySelector(".from img");
      imgsrc.setAttribute("src", country.flag);
    }
    if (cur2.value == country.name) {
      const imgsrc = document.querySelector(".to img");
      imgsrc.setAttribute("src", country.flag);
    }
  });
}
