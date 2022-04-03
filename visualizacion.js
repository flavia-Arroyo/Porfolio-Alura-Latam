


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


function validarMensaje(e){
    e.preventDefault();
    const form= document.getElementById('form')
     
    
    if(form.mensaje.value.length >50){
        alert('Debe tener como maximo 50 caracteres el mensaje')
        form.mensaje.focus()
    }
    
   

}

document.querySelector('form').addEventListener("submit", validarMensaje)



