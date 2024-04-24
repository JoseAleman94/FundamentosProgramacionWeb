function fireMixin(icono, msj) {
  const mixin = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  mixin.fire({
    icon: icono,
    title: msj,
  });
}

function checkForm() {
  console.clear();

  // Corre todas las funciones para ver que toda la info este bien
  const pasaCVV = checkCVV();
  const pasaVencimiento = checkVencimiento();
  const pasaTarjeta = checkNumTarjeta();
  const pasaNombre = checkNombre();

  // Si toda la info esta correcta, manda el go para subir a base de datos
  if (pasaNombre && pasaTarjeta && pasaVencimiento && pasaCVV) {
    return true;
  }
}

function checkNombre() {
  const inputNombre = document.getElementById('nombre');
  const nombre = inputNombre.value;

  // quita el borde de error y esconde el mensaje en caso que haya uno onfocus
  if (nombre != '') {
    // valido, nombre escrito
    return true;
  } else {
    // no valido, no hay info en el campo
    // agrega borde al campo para denotar error
    fireMixin(
      'error',
      'Por favor escriba el nombre del titular de la tarjeta.'
    );
    return false;
  }
}

function checkNumTarjeta() {
  const inputTarjeta = document.getElementById('numero');
  const numero = inputTarjeta.value;

  if (numero == '' || numero == NaN || numero < 0) {
    // no valido, no es numero o no hay info
    fireMixin('error', 'Por favor escriba un numero de tarjeta válido.');
    return false;
  } else {
    if (numero.toString().length == 16) {
      // valor es un numero, y es del largo correcto
      return true;
    } else {
      // no valido, muy grande o pequenno
      fireMixin('error', 'Por favor escriba un numero de tarjeta válido.');
      return false;
    }
  }
}

function checkVencimiento() {
  const vencimiento = document.getElementById('fecha');
  const fecha = vencimiento.value; // returns string

  // hace la fecha un array de numeros para poder comparar [año, mes]
  // da los meses en un array entonces van de 0 a 11
  let valorFecha = fecha.split('-');

  // Convierte el array en numeros para comparar con fecha actual
  valorFecha = valorFecha.map(function (str) {
    return parseInt(str);
  });

  // mes y anno de la fecha actual para comparar
  const mesActual = new Date().getMonth();
  const annoActual = new Date().getFullYear().toString();

  // revisa que el mes sea en el futuro del actual
  let pasaMes;
  if (mesActual + 1 < valorFecha[1]) {
    pasaMes = true;
  }

  // revisa que el anno sea el actual o siguientes
  let pasaAnno;
  if (annoActual <= valorFecha[0]) {
    pasaAnno = true;
  }

  if (pasaMes && pasaAnno) {
    // fecha de expiracion valida
    return true;
  } else {
    fireMixin('error', 'Por favor escriba una fecha de expiración válida.');
    return false;
  }
}

function checkCVV() {
  const inputCVV = document.getElementById('codigo');
  const cvv = inputCVV.value;

  if (cvv.toString().length != 3 || cvv == '' || cvv < 0) {
    fireMixin('error', 'Por favor introduzca un código de seguridad válido.');
    return false;
  } else {
    return true;
  }
}



'use extrict';

window.addEventListener('load', init, false);

function init() {

    let nombre = document.getElementById('nombreTxt');
    let numero = document.getElementById('numeroTxt');
    let fecha = document.getElementById('fechaTxt');
    let codigo = document.getElementById('codigoTxt');
    let btnEnviar = document.getElementById('btnSend');
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        nombre = nombreTxt.value;
        numero = numeroTxt.value;
        fecha = fechaTxt.value;
        codigo = codigoTxt.value;
        

        if (nombre === '' && numero === '' && fecha === '' && codigo === '') {
          fireMixin(
            'error',
            'Por favor ingrese los datos solicitados en los campos correspondientes.'
          );
            alerta.textContent = 'Por favor completa todos los campos';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde'); 
        } else if (nombre === '') {
          fireMixin(
            'error',
            'Por favor ingrese el nombre del titular de la tarjeta.'
          );
            alerta.textContent = 'Asegurate de colocar tu nombre en el campo';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (numero === '') {
          fireMixin(
            'error',
            'Por favor ingrese el numero de la tarjeta.'
          );
            alerta.textContent = 'Agrega el numero de la tarjeta.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (fecha === '') {
          fireMixin(
            'error',
            'Por favor ingresa la fecha de vencimiento de la tarjeta.'
          );
            alerta.textContent = 'Agrega la fecha de vencimiento de la tarjeta.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (codigo === '') {
          fireMixin(
            'error',
            'Por favor ingrese el codigo de seguridad de la tarjeta.'
          );
          
            alerta.textContent = 'Agrega el codigo de seguridad de la tarjeta.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else {
        Swal.fire({
            icon: 'success',
            title: 'Su pago ha sido completado con exito!',
            text: 'Se le envio un correo de confirmación sobre su compra.',
                footer:
                    '<a href="../opciHospedajes/opciHospedajes.html">Ver mas reservas</a>',
                showConfirmButton: 'true',
                confirmButtonColor: '#1DD75B',
                confirmButtonText: 'Gracias por preferirnos!',
            })
                .then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'inicio.html';
            }
        })
        .catch((err) => {
        console.log(err);
        });
            alerta.textContent = 'Se ha completado la compra. Por favor revisa tu correo para mas informacion.';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');

            //service ID/template ID/ID form/public key cuenta
            //el id del formulario es #form
            emailjs.sendForm('service_o33nl5i', 'template_y0bs9sm', '#datosForm', 'wpLMKqJSzBcZmzIW1');
            cleanInputs() 
            vaciarCarrito()

        }
    }

    function cleanInputs() {
        nombreTxt.value = '';
        numeroTxt.value = '';
        fechaTxt.value = '';
        codigoTxt.value = '';
    }
}




