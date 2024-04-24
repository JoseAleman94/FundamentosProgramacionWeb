// obtener el modal 
var modal = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
// obtener la imagen y agregarla dentro del modal -
// Usar el texto alternativo "alt" como subtitulo

//imagen 
var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
// contenido 
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");

// titulo 
var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption2");

// al dar clic a la foto en pequeno
img.onclick = function(){
    // desplegar la foto
    modal.style.display = "block";
    // apunta el contenido modal 
    modalImg.src = this.src;
    // asigna el ALT debajo de la imagen
    captionText.innerHTML = this.alt;
}

// al dar clic a la foto en pequeno
img2.onclick = function(){
    // desplegar la foto
    modal2.style.display = "block";
    // apunta el contenido modal 
    modalImg2.src = this.src;
    // asigna el ALT debajo de la imagen
    captionText2.innerHTML = this.alt;
}

// Obtenga el elemento <span> que cierra el modal
var cerrar = document.getElementsByClassName("close")[0]; 
var cerrar2 = document.getElementsByClassName("close2")[0]; 


// cuando el usuario hace clic en <span> (x), cierre el modal
cerrar.onclick = function() { 
    modal.style.display = "none";
}

cerrar2.onclick = function() { 
    modal2.style.display = "none";

}


////////////////////////
// MODAL 2 //
///////////////////////

// obtener el modal 
// //var modal = document.getElementById('modal2');
// obtener la imagen y agregarla dentro del modal -
// Usar el texto alternativo "alt" como subtitulo

//imagen 
//var img = document.getElementById('myImg2');
// contenido 
//var modalImg = document.getElementById("img02");
// titulo 
//var captionText = document.getElementById("caption");

// al dar clic a la foto en pequeno
//img.onclick = function(){
    // desplegar la foto
    //modal.style.display = "block";
    // apunta el contenido modal 
    //modalImg.src = this.src;
    // asigna el ALT debajo de la imagen
    //captionText.innerHTML = this.alt;
//}

// Obtenga el elemento <span> que cierra el modal
//var cerrar = document.getElementsByClassName("close")[0]; 

// cuando el usuario hace clic en <span> (x), cierre el modal
//cerrar.onclick = function() { 
//    modal.style.display = "none";
//}