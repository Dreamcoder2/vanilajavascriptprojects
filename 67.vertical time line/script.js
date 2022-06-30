(function () {
  const item = document.querySelectorAll(".timeline li");
  function idelementinviewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function slidein() {
    for (let i = 0; i < item.length; i++) {
      if (idelementinviewport(item[i])) {
        item[i].classList.add("slide-in");
      } else {
        item[i].classList.remove("slide-in");
      }
    }
  }
  window.addEventListener("load", slidein);
  window.addEventListener("scroll", slidein);
  window.addEventListener("resize", slidein);
})();
