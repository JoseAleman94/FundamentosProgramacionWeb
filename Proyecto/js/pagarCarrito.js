'use extrict';

window.addEventListener('load', init, false);

function init() {
    let pagoCarrito = document.getElementById('pagar-carrito');

    pagoCarrito.onclick = function() {
        Swal.fire({
            title: "Quieres proceder con esta compra?",
            text: "Estas a solo unos pasos de completar tu compra.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Completamente seguro!"
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    timer: 4000 ,
                    title: "Redireccionando!",
                    text: "Entrando al carrito de compras.",
                    icon: "success",
                  });
                window.location.href = 'metodoPago.html';
            }
          });
        }
    }