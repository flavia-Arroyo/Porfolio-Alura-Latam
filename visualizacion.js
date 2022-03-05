

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


const menuOpciones = document.querySelectorAll('.menu nav li a');
const elCheck = document.getElementById('check-menu');
menuOpciones.forEach((m) => {
    m.addEventListener('click', () => elCheck.checked = false);
});

