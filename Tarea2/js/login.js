/* Conexion con HTML usando el id btn-login y cargando la funcion llamada login */
document.getElementById("btn-login").addEventListener("click", login);


/*  funcion que valida el login */
function validation_alert(ptext) {
    swal.fire ({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/9331f2d2-28ec-470b-9320-332273d43c7d/MDdUa533aL.json"></iframe> <br><p>' + ptext + '</p>',
    });
}

// funcion login 
function login () {
    let user_input = document.getElementById ("email").value;
    let pass_input = document.getElementById ("password").value;
    // declaracion de los datos usuario y password respectivamente 
    let username = "cenfo";
    let password = "123";
    // identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["email", "password"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        // si estan vacios los campos de entrada
        if (input[i] === "") {
            // este es el texto que lleva el parametro de la funcion validacion_alert
            text = "Los campos requeridos NO puede estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
    }
}

// validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            swal.fire({
                //icon : "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                //milisegundos equivalen a 5seg
                timer: 5000,
                html: '<iframe width="500" height="400" src="https://lottie.host/embed/8a23aaee-c400-4bc3-89b4-e727267e86a4/Gfy4I9evKs.json"></iframe><br><br><p>Un momento!</p>',
                
            }).then (() => {
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}