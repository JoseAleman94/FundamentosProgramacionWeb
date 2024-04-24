'use extrict';

window.addEventListener('load', init, false);

function init() {
    let cierreSesion = document.getElementById('cierreSesionTxt');

    cierreSesion.onclick = function() {
        cierreSesion = cierreSesionTxt.value;

        Swal.fire({
            icon: 'warning',
            title: '¿Estas seguro que deseas cerrar sesión?',
            text: 'Sera redirigido a la pagina de Inicio de Sesion.',
                footer:
                    '<a href="../opciHospedajes/opciHospedajes.html">Ver mas reservas</a>',
                showConfirmButton: 'true',
                confirmButtonColor: '#FF0000',
                confirmButtonText: 'Click para confirmar!',
            })
                .then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'login.html';
            }
        })
        .catch((err) => {
        console.log(err);
        });
    }
}