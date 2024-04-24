'use extrict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === '') {
            alerta.textContent = 'Asegurate de colocar tu email en el campo';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Correo Electronico invalido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Suscripcion Exitosa. Revisa tu correo para mas informacion.';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');

            //service ID/template ID/ID form/public key cuenta
            //el id del formulario es #form
            //emailjs.sendForm('service_x5asf6h', 'template_hsp11hl', '#inscription', 'wptpEuD87H_TTMDE8');
            emailjs.sendForm('service_793cta5', 'template_puaeb7f', '#formSuscripcion', '-crCrCwZRCO1mJWz7');
            cleanInputs();
        }

    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }
}