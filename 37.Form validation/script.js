const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//FORM EVENT LISTNER
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkrequired([username, email, password, password2]);
  checklength(username, 5, 16);
  checklength(password, 8, 16);
  checkemail(email);
  matchpassword(password, password2);
});

//CHECK ALL THE FIELDS
function checkrequired(inputall) {
  inputall.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showsuccess(input);
    }
  });
}

//CHECK INPUT LENGTH
function checklength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} Must be atleat ${min} charecters`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} Must be less than ${max} charecters`
    );
  } else {
    showsuccess(input);
  }
}
//VALIDATE EMAIL
function checkemail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showsuccess(input);
  } else {
    showError(input, "email is invalid");
  }
}
// CHECK PASSWORD MATCH
function matchpassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

//SHOW ERROR MESSAGE
function showError(input, message) {
  const formcontrol = input.parentElement;
  formcontrol.className = " form-control error";
  const small = formcontrol.querySelector("small");
  small.innerText = message;
}

//SHOW SUCCESS MESSAGE
function showsuccess(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = " form-control success";
}

// GET FIELD NAME
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
