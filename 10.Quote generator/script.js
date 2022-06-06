const button = document.querySelector(".get-quotes");
const number = document.querySelector("#number");

button.addEventListener("click", getquotes);

function getquotes(e) {
  e.preventDefault();
  if (number.value == 0) {
    alert("please enter the value");
  } else {
    const http = new XMLHttpRequest();
    http.open("GET", "https://type.fit/api/quotes", true);
    http.onload = function () {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);

        let input = "";

        for (let i = 0; i < response.length; i++) {
          if (i == number.value) {
            break;
          }
          input += `
          <li>Quote: ${response[i].text} </li>
          <li class='design'>Author: ${response[i].author}</li>
          <hr>
          `;
        }
        document.querySelector(".quotes").innerHTML = input;
      }
    };
    http.send();
  }
}
