const thumbnail = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const nextbtn = document.getElementById("slide-right");
const prevbtn = document.getElementById("slide-left");

nextbtn.addEventListener("click", () => {
  scrollamount = 0;
  let slidetimer = setInterval(() => {
    slider.scrollLeft += 10;
    scrollamount += 10;
    if (scrollamount >= 100) {
      window.clearInterval(slidetimer);
    }
  }, 25);
});

prevbtn.addEventListener("click", () => {
  scrollamount = 0;
  let slidetimer = setInterval(() => {
    slider.scrollLeft -= 10;
    scrollamount += 10;
    if (scrollamount >= 100) {
      window.clearInterval(slidetimer);
    }
  }, 25);
});

//SLIDER WITH VALUES
// function sw() {
//   alert(slider.scrollWidth);
// }
// function sl() {
//   alert(slider.scrollLeft);
// }
// function cw() {
//   alert(slider.clientWidth);
// }
// function calc() {
//   alert(slider.scrollWidth - slider.clientWidth);
// }

// AUTO SCROLL FUNCTION
function autoplay() {
  if (slider.scrollLeft >= 1750) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1;
  }
}

let timer = setInterval(autoplay, 10);

// pause the scroll on mouse hover

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("mouseover", () => {
    clearInterval(timer);
  });
  thumbnail[i].addEventListener("mouseout", () => {
    return (timer = setInterval(autoplay, 10));
  });
}
