function cliente1() {
    Swal.fire({
        title: 'Botas negras altas',
        icon: 'success',
        iconColor: '#3a7aa5',
        text: 'Botas para mujer',
        text: '$40 USD',
        imageUrl: "botas.jpg",
        imageWidth: 256,
        imageHeight: 256,
        imageAlt: 'Cliente1 de la empresa',
        confirmButtonText: "Aceptar",
    })
}



function cliente2() {
    Swal.fire({
        title: 'Camisa Manga Larga',
        icon: 'success',
        iconColor: '#3a7aa5',
        text: 'Prenda para Hombre',
        text: '$35 USD',
        imageUrl: "mangaLarga.jpg",
        imageWidth: 256,
        imageHeight: 256,
        imageAlt: 'Cliente2 de la empresa',
        confirmButtonText: "Aceptar",
    })
}



function cliente3() {
    Swal.fire({
        title: 'Pantalón Skinny',
        icon: 'success',
        iconColor: '#3a7aa5',
        text: 'Prenda para mujer',
        text: '$50 USD',
        imageUrl: "skinny.jpg",
        imageWidth: 256,
        imageHeight: 256,
        imageAlt: 'Cliente3 de la empresa',
        confirmButtonText: "Aceptar",
    })
}




function cliente4() {
    Swal.fire({
        title: 'Pantalon Playero',
        icon: 'success',
        iconColor: '#3a7aa5',
        text: 'Prenda de Playa',
        text: '$25 USD',
        imageUrl: "playero.jpg",
        imageWidth: 256,
        imageHeight: 256,
        imageAlt: 'Cliente4 de la empresa',
        confirmButtonText: "Aceptar",
    })
}



function cliente5() {
    Swal.fire({
        title: 'playa y sol',
        icon: 'success',
        iconColor: '#3a7aa5',
        text: 'Camisa de playa',
        text: '$20 USD',
        imageUrl: "playa.jpg",
        imageWidth: 256,
        imageHeight: 256,
        imageAlt: 'Cliente5 de la empresa',
        confirmButtonText: "Aceptar",
    })
}




function limpiar() {
    //desmarcar radios
    document.getElementById('radio1').checked = false;
    document.getElementById('radio2').checked = false;
    document.getElementById('radio3').checked = false;
    document.getElementById('radio4').checked = false;
    document.getElementById('radio5').checked = false;
}

///////////////////////// RETO 9 /////////////////////////

function mostrar () {
    //checked es una propiedad que significa opcion seleccionada. 
    if (document.getElementById('radio1').checked) {
        cliente1 ();
    }
    if (document.getElementById('radio2').checked) {
        cliente2 ();
    }
    if (document.getElementById('radio3').checked) {
        cliente3 ();
    }
    if (document.getElementById('radio4').checked) {
        cliente4 ();
    }
    if (document.getElementById('radio5').checked) {
        cliente5 ();
    }
}

