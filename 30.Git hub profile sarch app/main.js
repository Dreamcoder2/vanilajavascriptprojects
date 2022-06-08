import * as v from "./js/variables.js";
import { getuser, errorMessage } from "./js/functions.js";

v.form.addEventListener("submit", (e) => {
  e.preventDefault();
  //let user = v.search.value.replace(/\s+/g,"");
  let user = v.search.value.split(" ").join("");
  if (user === "") {
    errorMessage("input cannot be empty");
  } else {
    getuser(user);
    v.search.value = "";
  }
});
