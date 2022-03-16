
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

/*
const menuOpciones = document.querySelectorAll('.enlaces-menu li a');
const elCheck = document.getElementById('check-menu');
menuOpciones.forEach((m) => {
    m.addEventListener('click', () => elCheck.checked = false);
});
*/





