// recibe el controlador y el ID de cada contenido 
function opciones (evt, info) {

    //* declaracion de variables
    //i controla el for 
    //tabcontent es el contenido de los TABS
    //tablinks controla los enlances de los TABS
    var i, tabcontent, tablinks;

    //obtener todos los elementos con class = "tabcontent" y ocultarlos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Apunta a todos los elementos con class = "tablinks" y elimina la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Apunta a todos los elementos con class = "tablinks" y elimina la clase "active".
    //Muestra la pestana actual y agrega una clase "active" al boton que abrio la pestana.
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}