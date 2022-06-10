const buttons = document.querySelectorAll(".btn");
const storeproducts = document.querySelectorAll(".store-product");
const search = document.getElementById("search");
const productname = document.querySelectorAll(".product-details h2");
const noresult = document.querySelector(".no-result");

//FLIP THE ACTIVE CLASS IN BUTTONS

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    buttons.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    //switch tab content
    const filter = e.target.dataset.filter;
    storeproducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "block";
      } else if (product.classList.contains(filter)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}

//SEARCH FILTER
search.addEventListener("keyup", filterproducts);

function filterproducts(e) {
  const text = e.target.value.toLowerCase();
  productname.forEach((p) => {
    const item = p.textContent;

    if (item.toLowerCase().includes(text)) {
      p.parentElement.parentElement.style.display = "block";
    } else {
      p.parentElement.parentElement.style.display = "none";
      noresult.style.display = "block";
    }
  });
}
