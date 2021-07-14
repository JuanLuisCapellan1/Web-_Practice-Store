/*Algoritmo para crear transicion, cuando el user scrolee en la pagina aparecera un background*/


const height = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
    let anchofondo = (window.pageYOffset / height) * 500;
    if(anchofondo <= 100){
        fondo.style.width = anchofondo + '%';
    }
}