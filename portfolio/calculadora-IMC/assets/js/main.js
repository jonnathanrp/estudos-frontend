//Capturar evento do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit' , function (evento){
    evento.preventDefault();
    console.log('Evento previnido.');

});