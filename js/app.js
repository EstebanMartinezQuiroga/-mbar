const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlace = document.querySelectorAll('.navegacion a');

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarMenu();
    cerrarMenu();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');

    });
}

function cerrarMenu(){
    enlace.forEach(enlace =>{
        enlace.addEventListener('click',(e) =>{
            
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}