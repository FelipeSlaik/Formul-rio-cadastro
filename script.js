const emailInput = document.getElementById('email');
const erroEmail = document.getElementById('erro-email');
const formSubmit = document.getElementById('formulario');

const nameInput = document.getElementById('email');
const erroName = document.getElementById('erro-nome')

   formSubmit.addEventListener('submit', function(e){
    e.preventDefault();
    const emailValue = emailInput.value;
    const emailValid = emailValidate(emailValue);
    const nameValue = nameInput.value;
    const nameValid = nameValidate(nameValue)

    if(emailValid){
        erroEmail.textContent =  "";
    }else{
        erroEmail.textContent = "E-mail inválido"
    }

    if(nameValid){
        erroName.textContent = "";
    }else {
        erroName.textContent = "Nome inválido"
    }

    });

    const emailValidate = (emailInput) =>{
        const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
        return regex.test(emailInput);
    }

    const nameValidate = (nameInput) =>{
        return nameInput.trim().length > 2;
    }



    

