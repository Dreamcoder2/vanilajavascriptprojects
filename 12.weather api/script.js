const api = {
  key: "c06415168e6770edda8ea53be2233825",
  base: "https://api.openweathermap.org/data/2.5/",
};

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getInput);

function getInput(event) {
  event.preventDefault();
  if (event.type == "click") {
    getdata(search.value);
    console.log(search.value);
  }
}
function getdata(city) {
  fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
    .then((res) => {
      return res.json();
    })
    .then(displaydata);
}

function displaydata(res) {
  if (res.cod === "404") {
    const error = document.querySelector(".error");
    error.textContent = "please enter a valid city";
    search.value = "";
  } else {
    const city = document.querySelector(".city");
    city.textContent = `${res.name}, ${res.sys.country}`;

    const today = new Date();
    const date = document.querySelector(".date");
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const hours = today.getHours();
    const minitues = today.getMinutes();
    date.textContent = `${day}/${month}/${year} ( ${hours}: ${minitues})`;

    //ENTER TEMPRATURE
    const temp = document.querySelector(".temp");
    temp.innerHTML = `Temp : ${Math.round(res.main.temp)} <span>&#8451;</span>`;

    const weather = document.querySelector(".weather");
    weather.textContent = `Weather : ${res.weather[0].main}`;

    const temprange = document.querySelector(".temp-range");
    temprange.textContent = `Temp Range: ${Math.round(
      res.main.temp_min
    )} / ${Math.round(res.main.temp_max)} `;

    //ADDING ICON
    const icon = document.querySelector(".weather-icon");
    const url = "http://openweathermap.org/img/w/";
    icon.src = url + res.weather[0].icon + ".png";
  }
}
