

// INICIO NUEVA SECCION //

function calcularFactura() {
    var nombre = document.getElementById("nombre").value;
    var articulo = document.getElementById("articulo").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var precio = parseFloat(document.getElementById("precio").value);

    var subtotal = cantidad * precio;
    var iva = subtotal * 0.13;
    var servicio = subtotal * 0.05;
    var totalPagar = subtotal + iva + servicio;

    // Mostrar resultados en la tabla

    if (nombre === '' || articulo === '' || isNaN(cantidad) || isNaN(precio)) {

        Swal.fire({
            icon: "error",
            title: "Asegurate de llenar todos los campos y que la cantidad y precio sean numeros.",
            showClass: {
                popup: `
                animate__animated
                animate__fadeIn
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOut
                `
            }
        });
    } else {

    var resultadosTabla = document.getElementById("resultados");
    resultadosTabla.innerHTML = `
      <tr>
        <td> ${nombre}</td>
        <td> ${articulo}</td>
        <td> ${cantidad}</td>
        <td> ${precio}</td>
        <td> ${subtotal}</td>
      </tr>
    `;

    // Mostrar resultados en el total
    document.getElementById("iva").innerText = iva.toFixed(2);
    document.getElementById("servicio").innerText = servicio.toFixed(2);
    document.getElementById("totalPagar").innerText = totalPagar.toFixed(2);

    Swal.fire({
        icon: "success",
        title: " Se ha generado la factura correctamente",
        showClass: {
            popup: `
            animate__animated
            animate__fadeIn
            `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOut
            `
        }
    });
  }
}

  function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('articulo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('resultados').innerHTML = '';
    document.getElementById('iva').innerText = '';
    document.getElementById('servicio').innerText = '';
    document.getElementById('totalPagar').innerText = '';
}

// FINAL NUEVA SECCION // 