const acc = document.querySelectorAll(".accordian");
const desc = document.querySelectorAll(".desc");
const activeacc = document.getElementsByClassName("accordian active");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    const desc = this.nextElementSibling;
    if (desc.style.maxHeight) {
      desc.style.maxheight = "0";
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  });
}
