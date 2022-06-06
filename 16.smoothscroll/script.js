const links = document.querySelectorAll(".nav-list li a");
console.log(links);

links.forEach((test) => {
  console.log(test);
  test.addEventListener("click", smoothscroll);
});

function smoothscroll(e) {
  e.preventDefault();
  const hre = this.getAttribute("href");
  console.log(hre);

  document.querySelector(hre).scrollIntoView({
    behavior: "smooth",
  });
}
