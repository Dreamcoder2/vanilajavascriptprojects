const countto = "29 may 2027";

const c = setInterval(() => {
  const enddate = new Date(countto);
  const currentdate = new Date();
  const totalseconds = (enddate - currentdate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;
  const countdown = document.querySelector(".countdown");
  countdown.textContent = `${format(
    days
  )}${hours} Hrs : ${minutes} Min : ${seconds} Sec`;
});

function format(t) {
  return t < 10 ? `0${t}` : t;
}
function format(day) {
  if (day == 0) {
    return "";
  } else if (day < 10) {
    return `${day} Day`;
  } else {
    return `${day} Days `;
  }
}
