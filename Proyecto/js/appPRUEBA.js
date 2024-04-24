// constantes
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-productos tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const verCarritoBtn = document.querySelector('#ver-carrito');
const pagarCarritoBtn = document.querySelector('#proceder-compra-carrito');
const carritoSubTotal = document.querySelector('#subtotal');
const calcularSubtotal = document.querySelector('#calcular-subtotal');



//articulosCarrito es un arreglo vacio el cual se puede agregar, modificar o eliminar elementos del arreglo.
let articulosCarrito = [];


//3 funciones variadas del carrito de compras
cargarEventListeners();

function cargarEventListeners() {
    // agregar cursos al carrito de compras
    //id listaCursos en e container de los cursos
    listaProductos.addEventListener('click', agregarCurso);

    // eliminar un curso del carrito de cursos
    //id pantalla del carrito
    carrito.addEventListener('click', eliminarCurso);

    // limpia el carrito de compras
    //id del boton vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // calcular el subtotal del carrito
    //id del boton pagar carrito
    calcularSubtotal.addEventListener('click', actualizarSubtotal);








    // el evento DOMContentLoaded permite asegurar que el código dentro de la función se ejecute una vez 
    //que el contenido del DOM (Document Object Model) haya sido completamente cargado.
    // contenido cargado usando JSON y el almacenamiento de localstorage
    document.addEventListener('DOMContentLoaded', () => {

        //articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];:
        //al cargar la pagina web del carrito de compras
        //permite recuperar información almacenada en el localStorage del navegador bajo la clave 'carrito'.localStorage
        //Si hay datos almacenados bajo la clave 'carrito', se utiliza la función JSON.parse() 
        //para convertir el contenido en un objeto o arreglo JavaScript (ya que localStorage solo puede almacenar cadenas de texto). 
        //Si no se encuentra nada almacenado con la clave 'carrito', se asigna un arreglo vacío [] al arreglo articulosCarrito.
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        //permite crear el resultado del carrito de compras con la funcion
        carritoHTML();
    });
}



// Función que añade el curso al carrito
function agregarCurso(e) {
    //prevenir el comportamiento predeterminado del evento e. 
    //En este caso, previene que el enlace( < a > ) realice la acción por defecto, que podría ser redirigir a otra página, 
    //evitando que el navegador realice cualquier acción inesperada al hacer clic en el enlace.
    e.preventDefault();

    //verificar si el elemento del evento e.target tiene la clase CSS 'agregar-carrito'. 
    //esto se hace para asegurarse de que el evento haya sido disparado por el enlace que tiene la clase 'agregar-carrito'.
    if (e.target.classList.contains('agregar-carrito')) {
        //si el enlace (<a>) que fue clicado tiene la clase 'agregar-carrito', se accede al elemento padre (parentElement) dos veces 
        //para llegar al elemento que contiene toda la información del curso (<div> o <tr> dependiendo del diseño de la aplicacion web). 
        //esto se hace para obtener una referencia al curso completo que se quiere agregar al carrito.
        const curso = e.target.parentElement.parentElement;
        //se invoca la funcion y se pasa el parametro curso. 
        //esta función probablemente tiene la tarea de extraer y leer la información relevante del curso (como título, precio, imagen, etc.) del elemento curso //
        //y agregarlo al carrito de compras, actualizando el arreglo articulosCarrito.        
        leerDatosCurso(curso);
    }
}



//se encarga de leer los datos de un curso específico y lo pasa al carrito de compras (articulosCarrito). 
//También se encarga de manejar el incremento de la cantidad de un curso si ya está presente en el carrito.
function leerDatosCurso(curso) {
    //crear un objeto llamado infoCurso que almacenará la información del curso que se va a agregar al carrito. 
    const infoCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        //verificar si el curso que se desea agregar al carrito ya existe en articulosCarrito, 
        //utilizando el método some() del arreglo. Esto se hace comparando el id del curso actual con el id de cada curso ya presente en el carrito.
    if (articulosCarrito.some(curso => curso.id === infoCurso.id)) {
        //Si el curso ya existe en el carrito:
        //Se utiliza el método map() en articulosCarrito para crear un nuevo arreglo llamado cursos que representará el contenido actualizado del carrito.
        //Se itera sobre cada curso en articulosCarrito utilizando map().
        //Si el id del curso en la iteración actual es igual al id del curso que se desea agregar(infoCurso.id), se incrementa la cantidad de ese curso en 1.
        //Si el id del curso no coincide con el id del curso que se desea agregar, se mantiene el curso sin cambios.
        //Al final, el arreglo cursos contendrá la actualización de la cantidad del curso específico que ya estaba en el carrito.
        const cursos = articulosCarrito.map(curso => {
                if (curso.id === infoCurso.id) {
                    let cantidad = parseInt(curso.cantidad);
                    cantidad++
                    curso.cantidad = cantidad;
                    return curso;
                } else {
                    return curso;
                }
            })
            //si el curso ya estaba en el carrito y se actualizó su cantidad, se actualiza articulosCarrito con el contenido de cursos para reflejar los cambios.
        articulosCarrito = [...cursos];
    } else {
        //Si el curso no existe en el carrito:
        //Se agrega el objeto infoCurso al arreglo articulosCarrito utilizando la sintaxis del spread operator(...), 
        //que crea una copia del arreglo actual y agrega infoCurso al final.
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    //luego de agregar o actualizar el curso en el arreglo articulosCarrito, 
    //se llama a la función carritoHTML() para actualizar la vista del carrito en la aplicación web para reflejar los cambios realizados en el carrito.
    carritoHTML();
}




//permite eliminar un curso específico del carrito de compras cuando el usuario hace clic en el enlace (etiqueta <a>) con la clase CSS 'borrar-curso'. 
//se utiliza el evento e para identificar el elemento que fue clicado y luego busca y elimina el curso correspondiente del arreglo articulosCarrito.
function eliminarCurso(e) {
    //previene que el enlace (<a>) realice la acción por defecto, que podría ser redirigir a otra página, 
    //evitando que el navegador realice cualquier acción inesperada al hacer clic en el enlace.
    e.preventDefault();
    //verifica si el elemento del evento e.target tiene la clase CSS 'borrar-curso'. 
    //Esto se hace para asegurarse de que el evento haya sido disparado por el enlace que tiene la clase 'borrar-curso'.
    if (e.target.classList.contains('borrar-curso')) {
        //Si el enlace( < a > ) que fue clicado tiene la clase 'borrar-curso', se accede al elemento padre(parentElement)
        // dos veces para llegar al elemento que contiene toda la fila del curso( < tr > ).
        //esto se hace para obtener una referencia al curso completo que se quiere eliminar del carrito.
        const curso = e.target.parentElement.parentElement;
        //se usa querySelector para encontrar el enlace dentro del elemento curso y luego se accede al atributo personalizado data-id del enlace.
        //este atributo debería contener el id del curso que se desea eliminar.
        const cursoId = curso.querySelector('a').getAttribute('data-id');
        //se usa el método filter() en el arreglo articulosCarrito para crear un nuevo arreglo que excluya el curso con el id especificado (cursoId).
        //elimina el curso del arreglo articulosCarrito.
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}



// mostrar en el carrito los cursos seleccionados por parte del usuario
function carritoHTML() {
    //limpia el carrito
    vaciarCarrito();


    //recorrer cada elemento del arreglo articulosCarrito y, por cada elemento, crea una fila en una tabla HTML 
    //para mostrar los detalles del curso agregado al carrito.
    articulosCarrito.forEach(curso => {
        //crea un elemento de fila de la tablba
        const row = document.createElement('tr');
        
        //row.innerHTML se establece el contenido HTML de la fila recién creada. Aquí se están insertando varias celdas (<td>) con diferentes detalles de los cursos.
        //almacena los datos en cada celda respectiva
        // Se crea una celda que contiene un enlace (<a>) con una etiqueta 'X', que se utilizará para eliminar el curso del carrito. 
        //El atributo data - id = "${curso.id}"
        //almacena el id del curso en el atributo personalizado data - id, lo que puede ser útil para identificar qué curso se debe eliminar.
        ////<a href="#" class="borrar-curso" data-id="${curso.id}">X</a> </td>
        row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>               
               <td>                    
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
        //agregar una fila cada curso que ingresa
        //appendchild es un método que agrega un nodo (elemento fila)
        //agregar la fila row, que representa un curso, como un elemento hijo del elemento con el identificador contenedorCarrito que es lo mismo a lista-carrito la variable.
        contenedorCarrito.appendChild(row);
    });

    // permite agregar el curso al carrito con la funcion 
    sincronizarStorage();
    actualizarSubtotal();


}


function actualizarSubtotal() {
    let total = 0;
    var precio = 0;
    var cantidad = 0;

    articulosCarrito.forEach(curso => {
        precio = parseFloat(curso.precio.replace('₡', '').trim());
        cantidad = parseInt(curso.cantidad);
        total += precio * cantidad;
    });

    calcularSubtotal.textContent = total.toFixed(0);


    actualizarSubtotal();
    sincronizarStorage();

}


//usando localStorage envia los cursos al carrito de compras 
function sincronizarStorage() {
    //JSON.stringify(articulosCarrito): El método JSON.stringify() convierte un objeto JavaScript (o un arreglo) en una cadena de texto JSON. 
    //En este caso, el objeto articulosCarrito es convertido a una cadena JSON que representa su contenido.    
    //localStorage.setItem('carrito', ...): El localStorage es una característica del navegador que permite almacenar datos de manera persistente en el dispositivo del usuario
    //El método setItem() se utiliza para almacenar datos en el localStorage.
    //'carrito' es la clave o ID bajo la cual se almacenará la cadena JSON en el localStorage. 
    //Esta clave se puede utilizar posteriormente para recuperar los datos almacenados.

    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}




//Se encarga de eliminar todos los elementos hijos (nodos) que se encuentren dentro del elemento con el identificador contenedorCarrito,
//lo que en efecto vaciará el contenido del carrito de compras en la página web.
//el carrito de compras se vacia directamente en la pagina web
function vaciarCarrito() {
    //Se ejecuta siempre que exista al menos un nodo hijo dentro del elemento contenedorCarrito. 
    //El bucle seguirá ejecutándose mientras el contenedorCarrito tenga elementos dentro de él.
    while (contenedorCarrito.firstChild) {
        //Dentro del bucle while, se utiliza el método removeChild() del DOM para eliminar el primer hijo del contenedorCarrito. 
        //En cada iteración del bucle, se eliminará el primer hijo, y el bucle continuará hasta que ya no queden más hijos dentro del contenedorCarrito.
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}


