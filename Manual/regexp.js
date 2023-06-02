const search = document.getElementById("search");
const helpMessage = document.querySelector("#help-message");

search.addEventListener("focusout", () => {
  let regexp;
  let message;

//   regexp = /(?=.*[a-zA-Z])/;  // return a true, a nothing.... if it is followed..
//   message = "Must contain at least one letter";

//   regexp = /(?=.*[a-zA-Z])(?=.*\d)/;
//   message = "Must contain at least one letter and one digit";

// not in order --> test the string for each () independently
//   regexp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
//   message = 'Must contain at least one uppercase, one lowercase letter and one number'

//   regexp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;;
//   message = 'Must contain at least one uppercase, one lowercase letter, one number and one special character'

  regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  message = 'Must be a valid email address';



  if (regexp.test(search.value)) {
    helpMessage.innerHTML = "Success";
    helpMessage.className = "text-success";
  } else {
    helpMessage.innerHTML = message;
    helpMessage.className = "text-danger";
  }
});
