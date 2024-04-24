// querySelector permite elegir el selector llamado select del form 
let seleccionar = document.querySelector('select');
//addEventListener es un listado de eventos (biblioteca) que lista al avento CHANGE y carga la función llamada elegir
seleccionar.addEventListener('change', elegir);

function elegir() {
    /* variable que leva el valor seleccionad por el usuario en el combo*/ 
    let eleccion = seleccionar.value;
    /* condicional que controla si el valor seleccionado NO es una fruta limpia el espacio descripcion (parrafo) */
    if (eleccion == 0) {
        descripcion.innerHTML = '';

    }
    if (eleccion == 1) {
        descripcion.innerHTML = 'Los Heredianos tienen la posibilidad de poder visitar nuestra tienda en Paseo de Las Flores desde 2017.';

    } else if (eleccion == 2) {
        descripcion.innerHTML = 'En Mall Oxigeno podras encontrar una de nuestra sucursales mas nuevas, con el fin de que podas visitarnos en el momento que gustes.';

    } else if (eleccion == 3) {
        descripcion.innerHTML = 'Encontranos en la 3ra etapa de Multiplaza de Escazu. Estamos abiertos de Lunes a Domingo de 10am a 9pm.';

    } else if (eleccion == 4) {
        descripcion.innerHTML = 'Nuestra sucursal en Lincoln Plaza muestra es una de las tiendas mas grandes de la cadena. Veni a visitarnos!';
    }
}