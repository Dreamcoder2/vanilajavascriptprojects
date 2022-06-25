const galleryfilter = document.querySelector(".gallery-filter");
const galleryimages = document.querySelectorAll(".image");

galleryfilter.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-gallery")) {
    galleryfilter.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const filter = e.target.dataset.filter;
    galleryimages.forEach((image) => {
      if (filter === "all") {
        image.style.display = "block";
      } else if (image.classList.contains(filter)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }
});
