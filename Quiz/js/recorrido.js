// variables controladoras
var panorama, viewer, container, infospot;

// obtener una referencia al contenedor donde se mostrara la escena 3D
container = document.querySelector('#container_principal');

// cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/winter.jpg');

// El valor 50 es el radio del infospot. El infospot es un marcador interativo que aparece en la escena y puede mostrar informacion o contenido adicional cuando el usuario interactua con el (por ejemplo, al hacer click o pasar el raton por encima).
// El radio del infospot determina el area de interaccion con el usuario. 
//  Crea y agrega el primer infospot

// ZONA1
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
var infospot1 = new PANOLENS.Infospot(50, 'imagenes/sky.png');
infospot1.position.set(-294 ,220 , -500);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('En Suiza se encuentra una gran parte de los famosos Alpes Europeos.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(255, 99, 71, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">En Suiza predomina un clima manso con frio, calor y humedad que no experimentan demasiadas diferencias. Entre julio y agosto, la temperatura oscila entre 18 y 28°C, entre enero y febrero alrededor de 2°C hasta 7°C. En primavera y otoño la temperatura varía cotidianamente entre los 8 y los 15°C.</div>';
panorama.add(infospot1);

//ZONA2
// Crea y agrega el segundo infospot
var infospot2 = new PANOLENS.Infospot(23, PANOLENS.DataImage.Info);
var infospot2 = new PANOLENS.Infospot(50, 'imagenes/hiking.png');
infospot2.position.set(500 ,-142 , -319);
infospot2.addHoverText('Una impresora es un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner).', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(255, 196, 71, 0.5); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">El alpinismo es el arte de escalar cumbres y paredes en terrenos rocosos o helados de alta montaña, en cualquier estación del año. Su práctica exige poseer una serie de capacidades físicas, prácticas e intelectuales, así como saber utilizar técnicas, equipos y materiales como piolets y crampones.</div>';
panorama.add(infospot2);


//ZONA3
// Crea y agrega el tercer infospot
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot3 = new PANOLENS.Infospot(90, 'imagenes/youtube.png');
infospot3.position.set(-250 ,295 , 500);
infospot3.addHoverText('La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', -60);
//insertar el reproductor de video de YouTube en el Infospot
//agregar el parametro para pantalla completa allowfullscreen
infospot3.element.innerHTML = `
    <div class="" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/xGeHpXkJ4GA?si=MSI98D9mVCvShLQV"></iframe>        
    </div>
`;
panorama.add(infospot3);

//ZONA4
// Crea y agrega el cuarto infospot
var infospot4 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
// Crea y agrega el cuarto infospot con un ícono personalizado
var infospot4 = new PANOLENS.Infospot(400, 'imagenes/info.png');
infospot4.position.set(-500 ,32 , -4017);
//evento hover
infospot4.addHoverText('Una máquina que obedece órdenes para efectuar cálculos y operaciones lógicas en poco tiempo. Es un dispositivo que puede recibir, almacenar, procesar información y generar resultados o respuestas.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(85, 190, 133, 0.7); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Los Alpes se encuentran situados a lo largo de la frontera occidental de Suiza. Esta cordillera es considerada la más larga de Europa y pasa por Austria, Francia, Alemania, Mónaco, Suiza, Eslovenia, Italia y Liechtenstein.</div>';
panorama.add(infospot4);

//ZONA5
// Crea y agrega el quinto infospot
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
var infospot5 = new PANOLENS.Infospot(50, 'imagenes/senderos.png');
infospot5.position.set(265, 30, 800);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot5.addHoverText('Estas son algunas montanas donde puedes practicar senderismo en Suiza: <br> Matterhorn 3991. <br> Gornegrat 5238. <br> Mt Rigi 2503. <br> Titlis 3284. <br> Harder Klum 2467. <br> Monte Salvatore. 1329. ', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(127, 17, 224, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> Estas son algunas montanas donde puedes practicar senderismo en Suiza: <br> Matterhorn 3991. <br> Gornegrat 5238. <br> Mt Rigi 2503. <br> Titlis 3284. <br> Harder Klum 2467. <br> Monte Salvatore. 1329. </div>';
panorama.add(infospot5);


//ZONA6
// Crea y agrega el sexto infospot
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
var infospot6 = new PANOLENS.Infospot(30, 'imagenes/mountain.png');
infospot6.position.set(500 ,66 , 25);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot6.addHoverText('Un audio MP3 multimedial...', -80);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/alpes.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot6);


//ZONA7
// Crea y agrega el cuarto infospot
var infospot7 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
// Crea y agrega el cuarto infospot con un ícono personalizado
var infospot7 = new PANOLENS.Infospot(60, 'imagenes/mountains.png');
infospot7.position.set(-500 ,148 , 104);
//evento hover
infospot7.addHoverText('Una caja que contiene lapices de color para los ninos. ', -60);
infospot7.element.innerHTML = '<div style="background-color: rgba(255, 0, 0, 0.7); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Este es el tope de la montana. Probablemente se encuentre a unos -5 grados centrigrados entre los meses de Mayo a Septiembre. </div>';
panorama.add(infospot7);

//ZONA8
// Crea y agrega el cuarto infospot
var infospot8 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
// Crea y agrega el cuarto infospot con un ícono personalizado
var infospot8 = new PANOLENS.Infospot(60, 'imagenes/lupa.png');
infospot8.position.set(-249 ,-204 , 500);
//evento hover
infospot8.addHoverText('Mi sombra ', -60);
infospot8.element.innerHTML = '<div style="background-color: rgba(255, 0, 0, 0.7); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Este quisiera ser yo en el tope de ladera de esta montana. Fui a Suiza en Diciembre del 2023 y no he encontrado mejores vistas en el mundo. Deseo volver muy pronto. </div>';
panorama.add(infospot8);


// Agrega la panoramica al visor
viewer = new PANOLENS.Viewer({ container: container });
// carga la imagen 360
viewer.add(panorama);