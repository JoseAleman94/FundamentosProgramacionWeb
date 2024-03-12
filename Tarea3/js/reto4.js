// evento que carga la funcion automaticamente...
window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='imagenes/suiza.jpg' class='img-fluid rounded' alt='suiza'>";

    //evento que permite cambiar el objecto onchange 
    document.getElementById("ciudades").onchange = function(e) {
        // destino del valor seleccionado por el usuario
        let n = e.target.value;

        //expresiones que guardan las imagenes de las ciudades y la informacion de cada uno...
        let imagen = "<img src='imagenes/combosReto4/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='ciudad'/>";
           
        //arreglo que guarda la informacion de cada ciudad...
        let text = [
            "Ciudad: Lucerna - Podrás disfrutar del placer de recorrer cada uno de los rincones de la ciudad, así como vivir la experiencia de atravesar el Puente de la Capilla, uno de los puentes de madera más antiguos de Europa. Paseando por el puente tendrás la oportunidad de apreciar las pinturas en su techo que guardan relación con la historia de la ciudad.",
            "Ciudad: Zurich - considerada como otra de las ciudades más bonitas de Suiza. Esta localidad goza de una arquitectura de estilo medieval, cuyas edificaciones se levantan en torno al río Limatt.",
            "Ciudad: Berna - Con un casco antiguo increíble, la ciudad cuenta con calles rodeadas de estatuas, fuentes o torres de reloj. Gracias a su ambiente ordenado y relajado, la ciudad alpina ha logrado ser catalogada como Patrimonio de la Humanidad.",
            "Ciudad: Zermatt - situado en los Alpes, y que representa una parada obligatoria si decidimos viajar al país alpino. La ciudad cuenta con numerosas opciones para recorrer y visitar, siendo una de ellas el Monte Cervino, el cual podemos apreciar desde el mirador de Gornergrat.",
            "Ciudad: Interlaken - Esta metrópoli se encuentra entre los lagos Thun y Brienz, cuya tonalidad turquesa de sus aguas cautiva a todos sus visitantes."
        ];

        //salida de las imagenes y los textos informativos...
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text [n -1];
    };
};

//funcion del boton Reiniciar
document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML = "<img src='imagenes/suiza.jpg' class='img-fluid rounded' alt='suiza'>";
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("ciudad").value = "";
};

