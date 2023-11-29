function isValidEmail(email) {
  // symbols to check if the email is valid
  let good = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return good.test(email);
}
let signupContainer = document.querySelector(".signup-container");
let submitButton = document.getElementById("subscribe");
let emailInput = document.getElementById("email");
let validEmailSpan = document.getElementById("validEmail");
let success = document.getElementById("success-page");
let generatedEmail = document.getElementById("generated-email");
// let emailValue = emailInput.value;

submitButton.addEventListener("click", () => {
  if (!isValidEmail(emailInput.value)) {
    //show the error message
    validEmailSpan.style.display = "block";
  } else {
    //hide the error message
    validEmailSpan.style.display = "none";
    //hide the signup container
    signupContainer.style.display = "none";
    // Show the success page here
    success.style.display = "block";
    generatedEmail.innerHTML = emailInput.value;
  }
});



let dismissButton = document.getElementById("dismiss-btn");

dismissButton.addEventListener ( "click", () => {
    location.reload();
})
// Check if the email is valid
//show the error message
//hide the error message
//hide the signup container
// Show the success page here
//set dismissbutton to reload page
