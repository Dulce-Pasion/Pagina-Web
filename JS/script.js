/*const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach((cadapunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i
        let operacion = posicion * -25
        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadapunto, i) => {
            punto[i].classList.remove('active')
        })
        punto[i].classList.add('active')
    })
})*/

const grande = document.querySelector('.grande');
const imgContainers = document.querySelectorAll('.img-container');
const numImagenes = imgContainers.length;
let indexActual = 0;

// Ajusta el ancho de .grande según el número de imágenes
grande.style.width = `${numImagenes * 100}%`;

function moverCarrusel() {
    indexActual = (indexActual + 1) % numImagenes;
    const transformValue = indexActual * -100 / numImagenes;
    grande.style.transform = `translateX(${transformValue}%)`;
}

// Mueve el carrusel cada 3 segundos
setInterval(moverCarrusel, 3000);

