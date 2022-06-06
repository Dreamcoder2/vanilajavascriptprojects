const input = document.getElementById("search");

input.addEventListener("keyup", search);

function search() {
  let inputval = input.value;
  const sug = document.getElementsByTagName("li");
  console.log(sug);

  for (i = 0; i < sug.length; i++) {
    if (sug[i].textContent.toLowerCase().includes(inputval)) {
      sug[i].style.display = "";
    } else {
      sug[i].style.display = "none";
    }
  }
}
