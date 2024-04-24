'use strict';


//la función searchStores() realiza una búsqueda de tiendas según la entrada del usuario y muestra los resultados utilizando las imágenes asociadas a las tiendas encontradas.

function searchClothes() {
    //Obtiene el valor del input de búsqueda del elemento con el id "searchInput" y lo convierte a minúsculas para hacer la búsqueda insensible a mayúsculas y minúsculas.
    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    //definir arreglos de tiendas para tres ubicaciones diferentes: San José, Santa Ana y Heredia, respectivamente.

    // arreglo de tiendas para tiendas o lugares
    let ropaFemenina = ["Vestido Corto", "Estampado", "Vestido Gala", "Blusa Mujer", "Vestido Playa", "Top Bikini", "Vestido Ejecutivo", "Mini Falda" ];

    // arreglo de tiendas para Santa Ana
    let ropaMasculina = ["Camisa Polo", "Camisa Lisa", "Camisa Botones", "Camisa Playa", "Camisa Deportiva", "Jogger", "Camisa Formal", "Pantalon Corto"];

    // arreglo de tiendas para Heredia
    let calzado = ["Zapato Tacon", "Tenis Altas", "Botas", "Sandalias Hombre", "Sandalias Plataforma", "Nautica", "Tenis", "Tenis Verdes"];


    //crea un objeto storeImages que asocia el nombre de cada tienda con su imagen correspondiente.
    let storeImages = {
        "vestido corto": "imagenes/vestidoCorto1-min.jpeg",
        "estampado": "imagenes/faldaLargaMujer.jpeg",
        "vestido gala": "imagenes/vestidoGala1-min.jpeg",
        "blusa mujer": "imagenes/blusaMujer.jpeg",
        "vestido playa": "imagenes/vestidoPlaya1-min.jpeg",
        "top bikini": "imagenes/topbikiniMujer.jpeg",
        "vestido ejecutivo": "imagenes/vestidoEjecutivo1-min.jpeg",
        "mini falda": "imagenes/minifaldaMujer.jpeg",
        "camisa polo": "imagenes/camisaPolo-min.jpeg",
        "camisa lisa": "imagenes/camisaLisaHombre.jpeg",
        "camisa botones": "imagenes/camisaBotones1-min.jpeg",
        "camisa playa": "imagenes/camisaPlayaHombre.jpeg",
        "camisa deportiva": "imagenes/camisaDeportiva-min.jpeg",
        "jogger": "imagenes/joggerHombre.jpeg",
        "camisa formal": "imagenes/camisaFormal-min.jpeg",
        "pantalon corto": "imagenes/pantalonCortoHombro.jpeg",
        "zapato tacon": "imagenes/zapatoTacon1-min.jpeg",
        "tenis altas": "imagenes/tenisAltasHombre.jpeg",
        "botas": "imagenes/botas1-min.jpeg",
        "sandalias hombre": "imagenes/sandaliaHombre.jpeg",
        "sandalias plataforma": "imagenes/sandaliaPlataforma-min.jpeg",
        "nautica": "imagenes/nauticaHombre.jpeg",
        "tenis": "imagenes/tenis1-min.jpeg",
        "tenis verdes": "imagenes/tenisVerdeHombre.jpeg",
        "": "",

    };

    //crear un arreglo vacío llamado filteredStores que contendrá las tiendas filtradas según la búsqueda del usuario.
    let filteredStores = [];

    //permite ombinar todas las tiendas de las tres ubicaciones en un solo arreglo llamado allStores.
    let allStores = [...ropaFemenina, ...ropaMasculina, ...calzado];

    //verificar si el campo de búsqueda está vacío, si es así, muestra una alerta indicando al usuario que debe completar el campo y termina la ejecución de la función.
    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Por favor ingrese una búsqueda",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#0063be",
        });
        //alert("Debe completar el campo...")
        return;
    }


    //inicia un ciclo que recorre todas las tiendas combinadas en allStores    
    //permite verificar si el nombre de la tienda actual (en minúsculas) contiene la cadena de búsqueda (también en minúsculas). 
    //si hay una coincidencia, asigna la tienda actual al arreglo filteredStores y termina el ciclo para evitar seguir buscando.
    for (let i = 0; i < allStores.length; i++) {
        if (allStores[i].toLowerCase().includes(searchInput)) {
            // si hay coincidencia, asigna la tienda actual al arreglo filteredStores
            filteredStores = [allStores[i]];
            // termina el bucle, ya que se encontró una coincidencia para que no siga iterando y consumiendo memoria
            break;
        }
    }

    //si no se encontró una coincidencia específica, buscar por ubicación general
    //San José, Santa Ana o Heredia) y asigna las tiendas correspondientes a filteredStores.

    if (filteredStores.length === 0) {
        if (searchInput === "ropa femenina") {
            filteredStores = ropaFemenina;
        } else if (searchInput === "ropa masculina") {
            filteredStores = ropaMasculina;
        } else if (searchInput === "calzado") {
            filteredStores = calzado;
        }
    }

    //cargar la función displayResults() pasando como argumentos el arreglo de tiendas filtradas(filteredStores) y el objeto storeImages que contiene las imágenes correspondientes a las tiendas.
    displayResults(filteredStores, storeImages);
}


//la función displayResults() toma las tiendas filtradas y las imágenes asociadas a esas tiendas, y las presenta en forma de tarjetas en el contenedor de resultados en la página web.
//crear tarjetas validando si estan o no estan

function displayResults(stores, storeImages) {
    //obtiene el contenedor de resultadosdel documento HTML con el id "pResult" y lo almacena en la variable resultsContainer.
    let resultsContainer = document.getElementById("pResult");
    //limpia el contenido actual del contenedor estableciendo su propiedad innerHTML como una cadena vacía.
    resultsContainer.innerHTML = "";

    //verificar si el arreglo de tiendas stores está vacío. Si no se encontraron tiendas para la ubicación especificada, se establece el contenido del contenedor 
    //resultsContainer con un mensaje indicando que no se encontraron tiendas para esa ubicación.
    if (stores.length === 0) {
        resultsContainer.innerHTML = "<p>NO se encontro ningun producto con ese nombre. Por favor reintente con otro producto.</p>";
        // sino 
    } else {
        // recorre sobre las tiendas y crea tarjetas para cada una
        //si se encontraron tiendas, la función recorre el arreglo de tiendas stores utilizando un ciclo for y crea una tarjeta (card) para cada tienda.
        for (let i = 0; i < stores.length; i++) {
            // obtiene la ruta de la imagen correspondiente al local actual
            let imageSrc = storeImages[stores[i].toLowerCase()] || "ruta_por_defecto.jpg";

            // crea una tarjeta (card) para la tienda actual
            let card = document.createElement("div");
            // clase de Bootstrap para tarjetas con margen inferior
            card.className = "card mb-3";
            // establece el ancho maximo de la tarjeta al 100%
            card.style.maxWidth = "100%";

            //crear dinámicamente la estructura de la tarjeta (card) utilizando HTML y la propiedad innerHTML. 
            //la tarjeta incluye la imagen de la tienda, el nombre de la tienda, una descripción breve y la fecha de la última actualización.
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt=" ${stores[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"> ${stores[i]}</h5>
                            <p class="card-text">En Boutique Rocio Designs siempre encontrarás las últimas tendencias de moda para mujeres y hombres.!
                            </p>
                            <p class="card-text"><small class="text-body-secondary">Última actualización 23 de Abril 2024</small></p>
                        </div>
                    </div>
                </div>
            `;

            //añade cada tarjeta creada al contenedor de resultados resultsContainer utilizando appendChild().
            resultsContainer.appendChild(card);
        }
    }
}