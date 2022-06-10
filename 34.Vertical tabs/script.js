const tablinks = document.querySelectorAll(".tab-link");
const allcontent = document.querySelectorAll(".tab-content ");

for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", function (e) {
    tablinks.forEach((act) => act.classList.remove("active"));
    this.classList.add("active");

    const filter = e.target.dataset.fliter;
    allcontent.forEach((e) => {
      if (e.classList.contains(filter)) {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    });
  });
}
