//http://api.icndb.com/jokes/random?firstName=John&lastName=Doe

const jokes = document.querySelector("h2");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random?firstName=John&lastName=Do";

btn.addEventListener("click", getjoke);

// function getjoke() {
//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       jokes.innerHTML = data.value.joke;
//     });
// }

// USING ASYNC AWAIT
async function getjoke() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    jokes.innerHTML = data.value.joke;
  } catch (error) {
    jokes.innerHTML = error.message;
  }
}
