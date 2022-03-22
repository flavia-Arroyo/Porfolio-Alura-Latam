


const menu = document.querySelector('.ham');
const enlaces = document.querySelector('.links');
menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
   
});


const menuOpciones = enlaces.querySelectorAll('li');

menuOpciones.forEach((li) => {
    li.addEventListener('click', ()=>
        enlaces.classList.remove('activado'));
        
})






let diplomaActivo = "";
function activarDiploma(name){
    
    diplomaActivo = document.getElementById(name);
    diplomaActivo.classList.toggle('displayNone');
    
}



