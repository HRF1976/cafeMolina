// La funcion mira el valor de el scroll en Y, si es mayor a 0 le agrega al header la clase header2, sino se la saca

let encabezado = document.getElementById('encabezado');
window.addEventListener('scroll', function () {
    let posicion = this.scrollY;
    console.log(posicion);
    if (posicion > 0) {
        encabezado.classList.add('header2')
    } else encabezado.classList.remove('header2')
})