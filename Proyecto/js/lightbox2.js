/*SOLUCION BLOQUE #1*/
/*Función ejecutar(div, video_id): 
Esta función se utiliza para revelar un lightbox y agregar la reproducción automática de un video de YouTube. 
Recibe dos parámetros: div y video_id.
Se obtiene la URL del video de YouTube utilizando el ID del video proporcionado.
Luego, se agrega el parámetro autoplay=1 a la URL del video para habilitar la reproducción automática.
Después, se muestra el elemento HTML con el ID especificado por div, lo que revela el lightbox y muestra el video. */

// Funcion para revelar lightbox y agregar reproduccion automatica de video de YouTube
function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    // adicionar el autoplay URL
    document.getElementById(video_id).src = video + "&autoplay=0";
    document.getElementById(div).style.display = "block";
}


/*Función ocultar(div, video_id):
Esta función se utiliza para ocultar el lightbox y detener la reproducción automática del video de YouTube.
También recibe dos parámetros: div y video_id.
Al igual que en la función anterior, se obtiene la URL del video de YouTube utilizando el ID del video.
Luego, se elimina el parámetro autoplay = 1 de la URL del video para detener la reproducción automática.
A continuación, se oculta el elemento HTML con el ID especificado por div, lo que oculta el lightbox y
detiene la reproducción del video.
*/

// Ocultar la caja y eliminar la reproduccion automatica del video de YouTube
function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    // remover el autoplay URL
    var cleaned = video.replace("&autoplay=0", "");
    document.getElementById(video_id).src = cleaned
    document.getElementById(div).style.display = "none";
}


/*SOLUCION BLOQUE #2*/
/*Función ejecutar(div, video_id): 
Esta función se utiliza para revelar un lightbox y agregar la reproducción automática de un video de YouTube. 
Recibe dos parámetros: div y video_id.
Se obtiene la URL del video de YouTube utilizando el ID del video proporcionado.
Luego, se agrega el parámetro autoplay=1 a la URL del video para habilitar la reproducción automática.
Después, se muestra el elemento HTML con el ID especificado por div, lo que revela el lightbox y muestra el video. */

// Funcion para revelar lightbox y agregar reproduccion automatica de video de YouTube
function ejecutar2(div2, video_id2) {
    var video2 = document.getElementById(video_id2).src;
    // adicionar el autoplay URL
    document.getElementById(video_id2).src = video2 + "&autoplay=0";
    document.getElementById(div2).style.display = "block";
}


/*Función ocultar(div, video_id):
Esta función se utiliza para ocultar el lightbox y detener la reproducción automática del video de YouTube.
También recibe dos parámetros: div y video_id.
Al igual que en la función anterior, se obtiene la URL del video de YouTube utilizando el ID del video.
Luego, se elimina el parámetro autoplay = 1 de la URL del video para detener la reproducción automática.
A continuación, se oculta el elemento HTML con el ID especificado por div, lo que oculta el lightbox y
detiene la reproducción del video.
*/

// Ocultar la caja y eliminar la reproduccion automatica del video de YouTube
function ocultar2(div2, video_id2) {
    var video = document.getElementById(video_id2).src;
    // remover el autoplay URL
    var cleaned = video2.replace("&autoplay=0", "");
    document.getElementById(video_id2).src = cleaned
    document.getElementById(div2).style.display = "none";
}