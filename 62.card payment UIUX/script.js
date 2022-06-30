const cardnumber = document.querySelector("#numbor");
const cardvalidity = document.querySelector("#valid");
const cardcvv = document.querySelector("#cvv");

cardnumber.addEventListener("input", formatcardnumber);
cardvalidity.addEventListener("input", formartcardvalidity);
cardcvv.addEventListener("input", cardcvv);

function formatcardnumber(e) {
  cardnumber.maxLength = "19";
  cardnumber.value = cardnumber.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  if (cardnumber.value.length === 19) {
    formartcardvalidity();
  }
}

// format validity
function formartcardvalidity(e) {
  cardvalidity.focus();
  cardvalidity.maxLength = "5";
  if (cardvalidity.value.length < 5) {
    cardvalidity.value = cardvalidity.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/[^\da-z]/g, "")
      .replace(/(.{2})/g, "$1/")
      .trim();
  }
  if (cardvalidity.value.length == 5) {
    formatcvv();
  }
}

//formarcvv
function formatcvv() {
  cardcvv.focus();
  cardcvv.maxLength = "3";
  cardcvv.value = cardcvv.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .trim();
}
