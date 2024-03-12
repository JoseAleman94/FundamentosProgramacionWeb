$("#r0").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Teclados',
        text: 'Los instrumentos de teclado son instrumentos de viento (órgano), cuerda (clavicordio), percusión (piano) o electrónicos (sintetizador) que son tocados utilizando un teclado, de forma que cada tecla genera uno o más sonidos.',
    });
});



$("#r1").click(function() {
    Swal.fire({
        title: 'Tema Guitarristico',
        textAlign: 'right',
        icon: 'question',
        iconColor: '#eea025',
        position: 'center',
        confirmButtonColor: '#eea025',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated bounceIn',
        },
        hideClass: {
            popup: 'animated bounceOut',
        },
        showCloseButton: true,
        html: '<strong> La guitarra es uno de los instrumentos mas utilizados a la hora de componer canciones. </strong> ' +
            '<br><br><br>' +
            '<p class=""> La Camisa Negra fue un tema con guitarra muy famoso </p>' +
            '<br>' +
            '<p class=""> La Flaca de Jarabe de Palo es un tema con una gran introduccion con guitarra. </p>' +
            '<br>' +
            '<p class=""> El Bolero muestra un gran desempeno a nivel musical, durante la epoca de los 40s. </p>'
    });
});



$("#r2").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Guitarras Electricas - Jimmy Hendrix',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        text: 'La primera guitarra eléctrica de Jimi Hendrix fue una Supro Ozark de 1957, la cual le compró su padre en Myers Music Shop en Seattle, por un precio de $89.',
        footer: '<a href="https://www.latercera.com/culto/2020/09/18/jimi-hendrix-una-linea-del-tiempo-con-sus-guitarras-electricas/#:~:text=La%20primera%20guitarra%20el%C3%A9ctrica%20de,por%20un%20precio%20de%20%2489." target="blank">Leer más</a>'
    });
});




$("#r3").click(function() {
    Swal.fire({
        title: 'Atención usuario',
        imageUrl: 'imagenes/logo.jpg',
        position: 'center',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated fadeInDown',
        },
        hideClass: {
            popup: 'animated fadeOutUp',
        },
        showCloseButton: true,
        html: '<strong> ¡Más tarjetas de crédito es sinónimo de más deudas! </strong> ' +
            '<br><br><br>' +
            '<p class="aliizq">- Es por eso que antes de adquirir una tarjeta de crédito en estos momentos, le aconsejamos analizar si realmente la requiere. </p>' +
            '<br>' +
            '<p class="aliizq">- La tarjeta de crédito puede ser un instrumento útil siempre y cuando se tenga claro cómo funciona y desde luego, pueda manejarla. </p>'
    });
});





$("#r4").click(function() {
    Swal.fire({
        title: 'Información',
        text: 'Framework CSS.',
        imageUrl: 'imagenes/logo1.png',
        imageWidth: 500,
        imageHeight: 400,
        imageAlt: 'Logo',
    });
});



$("#r5").click(function() {
    Swal.fire({
        title: 'Atención Amigo!',
        text: 'Esta ventana va a cerrarse en 3 segundos',
        icon: 'info',
        timer: 3000,
        onOpen: function() {
            swal.showLoading()
        }
    }).then(
        function() {},
        function(dismiss) {
            if (dismiss === 'timer') {
                console.log('Desplegable cerrada')
            }
        }
    )
});