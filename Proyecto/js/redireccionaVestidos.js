'use extrict';

window.addEventListener('load', init, false);

function init() {
    let vestidos = document.getElementById('vestidoColores');

    vestidos.onclick = function() {
        vestidos = vestidoColores.value;
        Swal.fire({
            icon: 'success',
            title: 'Te enamoraras de los colores!',
            text: 'Redirigiendo a la sección de vestidos cortos en colores...',
                showConfirmButton: 'true',
                confirmButtonColor: '#1DD75B',
                confirmButtonText: 'Llevame alla!',
            })
                .then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'vestidoCortoColores.html';
            }
        })
        .catch((err) => {
            console.log(err);
            });
    }
}