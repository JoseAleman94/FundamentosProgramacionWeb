'use extrict';

window.addEventListener('load', init, false);

function init() {
    let tacones = document.getElementById('taconColores');

    tacones.onclick = function() {
        tacones = taconColores.value;
        Swal.fire({
            icon: 'success',
            title: 'Mira la variedad de colores que tenemos para vos!',
            text: 'Redirigiendo a la sección de colores disponibles...',
                showConfirmButton: 'true',
                confirmButtonColor: '#1DD75B',
                confirmButtonText: 'Llevame alla!',
            })
                .then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'zapatoTaconColores.html';
            }
        })
        .catch((err) => {
            console.log(err);
            });
    }
}