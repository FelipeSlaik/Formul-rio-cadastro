const emailInput = document.getElementById("email");
const erroEmail = document.getElementById("erro-email");
const formSubmit = document.getElementById("formulario");

const nameInput = document.getElementById("nome");
const erroName = document.getElementById("erro-nome");
const minLength = 10;
const maxLength = 30;

const passwordInput = document.getElementById("password").value;
const erroPassword = document.getElementById("erro-password");
const confirmPassword = document.getElementById("confirm-password").value;
const erroConfirmPassword = document.getElementById("erro-confirmacao");


nameInput.addEventListener("keyup", function () {
  //Validação Nome
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
 //Validação Email
const emailValidate = (emailInput) => {
  const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
  return regex.test(emailInput);
};

//VALIDAÇÃO DE SENHA E CONFIRMAÇÃO DE SENHA




//SUBMIT
formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailValid = emailValidate(emailValue);
  const nameValue = nameInput.value;

   let formValid = true;

    //EMAIL
  if (!emailValue) {
    erroEmail.textContent = "O campo não pode ser vazio!";
    formValid = false;
  } else if (!emailValid){
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

  //PASSWORD

  
  








  if(formValid){
    const userData = {
        name: nameValue,
        email: emailValue,
    };
  }
});
