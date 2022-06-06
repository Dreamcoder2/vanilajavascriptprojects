const empty = "",
  ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lcase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbols = "!@#$%^&*()_+";

const passwordlength = document.getElementById("p-length");
const uppercase = document.getElementById("p-uppercase");
const lowercase = document.getElementById("p-lowercase");
const numbers = document.getElementById("p-number");
const symbol = document.getElementById("p-symbol");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const copy = document.getElementById("copy");

submit.addEventListener("click", () => {
  let intialpassword = empty;

  // ADD PASSWORD IF OPTION CHECKED
  uppercase.checked ? (intialpassword += ucase) : "";
  lowercase.checked ? (intialpassword += lcase) : "";
  symbol.checked ? (intialpassword += symbols) : "";
  numbers.checked ? (intialpassword += number) : "";

  //SET THE PASSWORD
  password.value = generatepassword(passwordlength.value, intialpassword);
});

function generatepassword(l, intialpassword) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += intialpassword.charAt(
      Math.floor(Math.random() * intialpassword.length)
    );
  }
  return pass;
}

//copy function
copy.addEventListener("click", () => {
  if (password.value == "") {
    alert("no value to copy");
  } else {
    password.select();
    document.execCommand("copy");
    alert("text copied");
  }
});
