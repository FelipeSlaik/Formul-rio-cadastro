const formulario = document.getElementById('form');

formulario.addEventListener("submit", function (event){
    let formValido = true;

    const nome = document.getElementById('nome');
    const erroNome = document.getElementById('erroNome')
    if(nome.value.trim () === ''){
        erroNome.textContent = 'Insira seu nome completo.';
        formValido = false;
    } else {
        erroNome.textContent = '';
    }


})