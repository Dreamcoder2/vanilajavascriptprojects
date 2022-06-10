const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = "0";

  function updatecounter() {
    const target = +counter.dataset.target;
    const count = +counter.textContent;
    const increment = target / 200;

    if (count < target) {
      counter.textContent = `${Math.ceil(count + increment)}`;
      setTimeout(updatecounter, 10);
    } else {
      counter.innerText = target;
    }
  }
  //updatecounter();
  window.addEventListener("scroll", () => {
    const scrollheight = window.pageYOffset;
    const sectiontop = document.querySelector(".top");
    const sectiontopheight = sectiontop.clientHeight;
    if (scrollheight >= sectiontopheight) {
      updatecounter();
    }
  });
});
