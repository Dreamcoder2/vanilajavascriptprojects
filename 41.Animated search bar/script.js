const search = document.querySelector(".fa-search");
const closeicon = document.querySelector(".fa-times");
const searchel = document.querySelector(".search");
const searchinput = document.querySelector(".search input");

search.addEventListener("click", () => {
  search.style.transform = "translateY(-200%)";
  closeicon.style.transform = "translateY(0)";
  searchel.style.transform = "translateY(0)";
  showfull();
});
closeicon.addEventListener("click", () => {
  search.style.transform = "translateY(0)";
  closeicon.style.transform = "translateY(-200%)";
  searchel.style.transform = "translateY(-200%)";
});

function showfull() {
  setTimeout(() => {
    searchinput.style.width = "240px";
  }, 1500);
}
