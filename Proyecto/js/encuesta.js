function evaluarEncuesta() {

    //Preguntas 1  y 2.
    var pregunta1 = document.getElementById("r1").value
    var pregunta2 = document.getElementById("r2").value
    

    //Codigo para saber la opcion escogida en el input radio de la pregunta 3.
    var respuesta3 = ""
    document.getElementsByName("eleccion")
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
                respuesta3 = radio.value
            }
        });

    //Codigo para saber la opcion escogida en el input radio de la pregunta 4.
    var respuesta4 = ""
    document.getElementsByName("elecciones2")
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
                respuesta4 = radio.value
            }
        });

    //Validacion de los datos ingresados
    if (pregunta1 == "" || pregunta2 == "" || respuesta3 == "" || respuesta4 == "") {
        swal.fire({
            title: "Atención usuario",
            text: "No deje campos vacios!",
            icon: "warning",
        })
    } else {

        //condicionales que determinan las opciones seleccionadas por el cliente.
        var mensaje1 = "";
        if (document.formulario.atencion.checked == true && document.formulario.calidad.checked == true && document.formulario.servicio.checked == true) {
            mensaje1 = "¡Agradecemos su calificacion y saber que ha sido placentero comprar con nosotros!";
        } else if (document.formulario.atencion.checked == false || document.formulario.calidad.checked == false || document.formulario.servicio.checked == false) {
            mensaje1 = "Gracias por tomar el tiempo de evaluarnos, tomaremos en cuenta sus respuestas para mejorar nuestro servicio.";
        } else if (document.formulario.atencion.checked == false && document.formulario.calidad.checked == false && document.formulario.servicio.checked == false) {
            mensaje1 = "Lamentamos escuchar que no fue una experiencia positive pero nos ocuparemos de mejorar.";
        }

        var mensaje3 = "";
        if (respuesta4 == "Buena") {
            mensaje3 = "Tu opinion es super importante para nosotros y apreciamos haber brindado tus palabras..";
        } else if (respuesta4 == "Regular") {
            mensaje3 = "Sabemos que existen areas de mejora y nos encargaremos de que la proxima vez sea una mejor experiencia para ti.";
        } else {
            mensaje3 = "Toda esta informacion es revisada a detalle para verificar como podemos generar una mejor experiencia a nuestros cliente. Gracias por tu tiempo.";
        }

        var mensaje2 = "";
        if (respuesta3 == "Si") {
            mensaje2 = "Nos complace saber que desearias volver a visitarnos.";
        } else {
            mensaje2 = "Estamos en constante crecimiento y deseamos que la proxima vez te sientas mucho mejor comprando con nostros.";
        }

        //desplegable aparecera cuando el cliente da clic al boton Enviar
        swal.fire({
            title: "Hemos enviado tus respuestas a nuestro equipo",
            text: "Gracias por realizar nuestra encuesta",
            //icon: "success",
            html: "<iframe src='https://lottie.host/embed/1c1563c5-8cab-43c1-a395-5c9a33c420b8/BNEphq3rz8.json' width='440' height='380' > < /iframe>"
        })
        //resultado de la encuesta
        document.getElementById("res0").innerHTML = "¡Muchas gracias por tomar el tiempo y evaluar la experiencia!";
        document.getElementById("res1").innerHTML = mensaje2
        document.getElementById("res2").innerHTML = mensaje3
        document.getElementById("res3").innerHTML = mensaje1
    }
}

function limpiarFormulario() {
    document.getElementById("r1").value = "";
    document.getElementById("r2").value = "";

    var opcionesRadio3 = document.getElementsByName("eleccion");
    opcionesRadio3.forEach(radio => (radio.checked = false));

    var opcionesRadio4 = document.getElementsByName("elecciones2");
    opcionesRadio4.forEach(radio => (radio.checked = false));

    document.getElementById("calidad").checked = false;
    document.getElementById("atencion").checked = false;
    document.getElementById("servicio").checked = false;
    document.getElementById("radio").checked = false;
    document.getElementById("youtube").checked = false;
    document.getElementById("facebook").checked = false;
    document.getElementById("television").checked = false;
    document.getElementById("otro").checked = false;

    document.getElementById("res0").innerHTML = "";
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("res3").innerHTML = "";

}