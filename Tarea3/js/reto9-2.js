function contenido1 (){
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');

    if (dato1.checked) {
        conte1.style.display = 'block';
        conte2.style.display = 'none';
        conte3.style.display = 'none';
        conte4.style.display = 'none';
    }
}

function contenido2 (){
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');

    if (dato2.checked) {
        conte1.style.display = 'none';
        conte2.style.display = 'block';
        conte3.style.display = 'none';
        conte4.style.display = 'none';
    }
}

function contenido3 (){
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');

    if (dato3.checked) {
        conte1.style.display = 'none';
        conte2.style.display = 'none';
        conte3.style.display = 'block';
        conte4.style.display = 'none';
    }
}

function contenido4 (){
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');

    if (dato4.checked) {
        conte1.style.display = 'none';
        conte2.style.display = 'none';
        conte3.style.display = 'none';
        conte4.style.display = 'block';
    }
}

// Checkbox 

function comprobar () {
    //form1 es el nombre del formulario
    //los que se llaman c1, c2, c3 son los name del HTML 
    if (document.form1.c3.checked == true) {
        if (document.form1.c1.checked == true & document.form1.c2.checked == false) {
            // alert("Falta el requisito #2");
            Swal.fire({
                title: 'Falta seleccionar "He Leido la Informacion Correspondiente',
                icon: 'error',
                iconColor: '#231955',
                text: 'Por favor asegurese de haber marcado la casilla.',
                imageWidth: 400,
                imageHeight: 200,
            })
        }
        if (document.form1.c2.checked == true & document.form1.c1.checked == false) {
            // alert("Falta el requisito #1");
            Swal.fire({
                title: 'Falta seleccionar "Acepto Terminos y Condiciones',
                icon: 'error',
                iconColor: '#231955',
                text: 'Por favor asegurese de haber marcado la casilla',
                imageWidth: 400,
                imageHeight: 200,
            })
        }
        // valida que esten marcando los 2 checks iniciales llamados c1 y c2 declarados con name 
        if (document.form1.c1.checked == true & document.form1.c2.checked == true) {
            Swal.fire({
                title: '¡Muchas gracias!',
                icon: 'success',
                iconColor: '#231955',
                text: 'Agradecemos por su interes en nuestros productos. Pronto le enviaremos la confirmacion a su correo electronico.',
                imageWidth: 400,
                imageHeight: 200,
            })
            // resultado en pagina web
            document.getElementById('demo').innerHTML = "<strong> En breve le enviaremos la confirmacion a su correo electronico.  </strong>";
            document.getElementById('ima1').style.display = '<img src="logos.png" alt="logos>"';
            document.getElementById('ima1').style.display = 'block';
            document.form1.c3.checked == false;
            document.form1.c2.checked == false;
            document.form1.c1.checked == false;
        }
    }
    document.form1.c3.checked == false;
    document.form1.c2.checked == false;
    document.form1.c1.checked == false;
}