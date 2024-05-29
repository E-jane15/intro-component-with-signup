const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const warning = document.querySelector(".warning");
const eye = document.querySelector("i");
console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  const firstNameError = document.querySelector(".firstnameerror");
  const lastNameError = document.querySelector(".lastnameerror");
  const emailError = document.querySelector(".emailerror");
  const passwordError = document.querySelector(".passworderror");
  

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    firstNameError.innerHTML= "First Name cannot be empty";
    warning.style.display = 'flex';
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    lastNameError.innerHTML= "Last Name cannot be empty";
    warning.style.display = 'flex';
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailError.innerHTML= "Looks like this is not an email";
    warning.style.display = 'block';
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    passwordError.innerHTML= "Password cannot be empty";
    eye.style.visibility='visible';
  } else {
    password.classList.remove('error');
  }

  


});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
