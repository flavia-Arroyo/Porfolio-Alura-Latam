


const menu = document.querySelector('.ham');
const enlaces = document.querySelector('.links');
menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
   
});


const menuOpciones = enlaces.querySelectorAll('li');

menuOpciones.forEach((li) => {
    li.addEventListener('click', ()=>
        enlaces.classList.remove('activado'));
        enlaces.classList.add('activo');
        
})







let diplomaActivo = "";
function activarDiploma(name){
    
    diplomaActivo = document.getElementById(name);
    diplomaActivo.classList.toggle('displayNone');
    
}


function validarMensaje(){
    if(document.form.mensaje.length > 50){
        alert('Debe contener maximo 50 caracteres');
        document.form.mensaje.focus();
    }

}

document.querySelector('form').addEventListener("submit", validarMensaje)



