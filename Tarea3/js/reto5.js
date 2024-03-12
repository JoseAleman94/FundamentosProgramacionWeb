window.onload = function() {
    //combo llamado modelo ID
    document.getElementById("modelo").onchange = function(e) {
            //destino del valor seleccionado combo1
            a = e.target.value;
            
            if (a == "Accent") {
                var imagen = "imagenes/accent.png";
            } else if (a == "Elantra") {
                var imagen = "imagenes/elantra.png";
            } else if (a == "Tucson") {
                var imagen = "imagenes/tucson.png";
            } else if (a == "Santa Fe") {
                var imagen = "imagenes/santafe.png";
            };
            // agrega la imagen del carro modelo
            document.getElementById('imagen').src = imagen;
        }
        //combo llamado version
    document.getElementById("version").onchange = function(es) {
        //destino del valor seleccionado combo2
        n = es.target.value;
    }
}

if (a === '' || n === '') {

    Swal.fire({
        icon: "error",
        title: "Asegurate de llenar todos los campos",
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


function calcular () {
    var montoCuota = 0;

    switch (a) {
        case "Accent":
            if (n == "4x2") montoCuota = 350;
            else 
                montoCuota = 600;
            break;
        case "Elantra":
            if (n == "4x2") montoCuota = 400;
            else 
                montoCuota = 600;
        case "Tucson":
            if (n == "4x2") montoCuota = 550;
            else 
                montoCuota = 650;
        case "Santa Fe":
            if (n == "4x2") montoCuota = 600;
            else 
                montoCuota = 750;
        default:
            break;
    }
    // busca en la carpeta imagenes la foto transparente PNG del carro
    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".png";

    // el resultado se muestra en un desplegable
    swal.fire ({
            // la variable se encarga de elegir la imagen del carro
        imageUrl: imagenDireccion,
        html: "<p> Mira la cuota mensual del " +  
            a +
            " " +
            n +
            "<br><br> <strong> Cuota mensual: </strong></p> " +
            "$" +
            montoCuota,
        imageWidth: 500,
        imageHeight: 250,
        imageAlt: "Vehiculo" + a, 
        });
    }
