const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const hideerror = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
};

const calctax = () => {
  const bill = document.querySelector(".bill").value;
  const tax = document.querySelector(".rate").value;

  if (bill === "" || tax == "") {
    error.style.display = "block";
    hideerror();
  } else if (isNaN(bill)) {
    error.textContent = "Enter a valid number";
    error.style.display = "block";
    hideerror();
  } else {
    let billamount = bill * tax;
    billamount = Math.floor(billamount);
    tip.innerHTML = ` Tax:$ ${billamount}`;

    let totalamount = Number(bill) + billamount;
    total.innerHTML = `Total Amount: $ ${totalamount}`;
  }
};
btn.addEventListener("click", calctax);
