window.onload = function() {
    //combo llamado modelo ID
    document.getElementById("perfumes").onchange = function(e) {
            //destino del valor seleccionado combo1
            a = e.target.value;
            
            if (a == "Versace") {
                var imagen = "imagenes/versace-min.png";
            } else if (a == "Clinique") {
                var imagen = "imagenes/clinique.png";
            } else if (a == "HugoBoss") {
                var imagen = "imagenes/hugoBoss-min.png";
            } else if (a == "Tous") {
                var imagen = "imagenes/tousLarge.png";
            }
            // agrega la imagen del perfume modelo
            document.getElementById('imagen').src = imagen;
        }
        //combo llamado tamano
    document.getElementById("tamano").onchange = function(es) {
        //destino del valor seleccionado combo2
        n = es.target.value;
    }
}

function calcular () {
    var montoCuota = 0;

    switch (a) {
        case "Versace":
            if (n == "90 ml") montoCuota = 45000;
            else 
                montoCuota = 62000;
            break;
        case "Clinique":
            if (n == "90 ml") montoCuota = 23500;
            else 
                montoCuota = 35000;
        case "HugoBoss":
            if (n == "90 ml") montoCuota = 30000;
            else 
                montoCuota = 45000;
        case "Tous":
            if (n == "90 ml") montoCuota = 25000;
            else 
                montoCuota = 40000;
        default:
            break;
    }
    // busca en la carpeta imagenes la foto transparente PNG del carro
    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".png";

    // el resultado se muestra en un desplegable
    swal.fire ({
            // la variable se encarga de elegir la imagen del carro
        imageUrl: imagenDireccion,
        html: "<p> El precio del " +  
            a +
            " " +
            n +
            "<br><br> es de:" +
            "₡" +
            montoCuota,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "articulo" + a, 
        });
    }
