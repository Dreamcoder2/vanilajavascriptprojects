const ham = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

ham.addEventListener("click", showmwnu);

function showmwnu() {
  navmenu.classList.toggle("active");
}
