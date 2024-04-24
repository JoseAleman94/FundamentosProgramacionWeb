document.getElementById ('menuOpciones').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    //trabajamos con la variable opciones que representa el menu
    switch (opciones) {
        //filtros de categorias
        case "verano":
            document.querySelector('.galeriaVerano').style.display = 'block';
            document.querySelector('.galeriaPrimavera').style.display = 'none';
            document.querySelector('.galeriaOtono').style.display = 'none';
            document.querySelector('.galeriaInvierno').style.display = 'none';
            break;
        case "primavera":
            document.querySelector('.galeriaVerano').style.display = 'none';
            document.querySelector('.galeriaPrimavera').style.display = 'block';
            document.querySelector('.galeriaOtono').style.display = 'none';
            document.querySelector('.galeriaInvierno').style.display = 'none';
            break;
        case "otono":
            document.querySelector('.galeriaVerano').style.display = 'none';
            document.querySelector('.galeriaPrimavera').style.display = 'none';
            document.querySelector('.galeriaOtono').style.display = 'block';
            document.querySelector('.galeriaInvierno').style.display = 'none';
            break;
        case "invierno":
            document.querySelector('.galeriaVerano').style.display = 'none';
            document.querySelector('.galeriaPrimavera').style.display = 'none';
            document.querySelector('.galeriaOtono').style.display = 'none';
            document.querySelector('.galeriaInvierno').style.display = 'block';
            break;
        default:
            document.querySelector('.galeriaVerano').style.display = 'none';
            document.querySelector('.galeriaPrimavera').style.display = 'none';
            document.querySelector('.galeriaOtono').style.display = 'none';
            document.querySelector('.galeriaInvierno').style.display = 'none';
    }
}