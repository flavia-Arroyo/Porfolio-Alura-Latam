
let diplomaActivo = "";
function activarDiploma(name){
    if(diplomaActivo != ""){ 
        if(diplomaActivo.id != name){
            diplomaActivo.classList.add('displayNone');
        }
    }
    diplomaActivo = document.getElementById(name);
    diplomaActivo.classList.toggle('displayNone');
}


const menu = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});


const menuOpciones = enlaces.querySelectorAll('li a');

menuOpciones.forEach((li) => {
    li.addEventListener('click', ()=>
        enlaces.classList.remove('activado'));
})





