const emailInput = document.getElementById("email");
const erroEmail = document.getElementById("erro-email");
const formSubmit = document.getElementById("formulario");

const nameInput = document.getElementById("nome");
const erroName = document.getElementById("erro-nome");
const minLength = 10;
const maxLength = 30;

nameInput.addEventListener("keyup", function () {
  const nameValue = nameInput.value.trim();

  if (!nameValue){
    erroName.textContent = "O campo não pode estar vazio!"
  } else if (nameValue.length < minLength) {
    erroName.textContent = `O nome deve ter pelo menos ${minLength} caracteres`;
  } else if (nameValue.length > maxLength) {
    erroName.textContent = `O nome deve ter no máximo ${maxLength} caracteres`;
  } else {
    erroName.textContent = "";
  }
});

const emailValidate = (emailInput) => {
  const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
  return regex.test(emailInput);
};

//Submit
formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value;
  const emailValid = emailValidate(emailValue);
  const nameValue = nameInput.value.trim();

   let formValid = true;

    //EMAIL
  if (!emailValid) {
    erroEmail.textContent = "O campo não pode ser vazio!";
    formValid = false;
  } else if (!emailValue){
    erroEmail.textContent = "E-mail inválido!";
    formValid = false;
  } else {
    erroEmail.textContent = "";
  }
    //NAME
  if (!nameValue){
    erroName.textContent = "O campo não pode ser vazio!";
    formValid = false;
  } else if(nameValue.length < minLength) {
    erroName.textContent = `O nome deve ter pelo menos ${minLength} caracteres.`;
    formValid = false;
  } else if(nameValue.length > maxLength){
    erroName.textContent = `O nome deve ter no máximo ${maxLength} caracteres.`;
  } else {
    erroName.textContent = "";
  }









  if(formValid){
    const userData = {
        name: nameValue,
        email: emailValue,
    };
  }
});
