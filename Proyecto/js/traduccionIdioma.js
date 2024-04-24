


//declaracion de constantes usando el metodo querySelector

//permite guardar el enlace el selecto <a> del html
const link = document.querySelectorAll('a');


const langEl = document.querySelector('.langWrap');



const pages = document.querySelector('.pages');
const ht = document.querySelector('.ht');
const ht1 = document.querySelector('.ht1');
const ht2 = document.querySelector('.ht2');
const ht3 = document.querySelector('.ht3');
const ht5 = document.querySelector('.ht5');
const ht6 = document.querySelector('.ht6');
const ht7 = document.querySelector('.ht7');
const ht8 = document.querySelector('.ht8');
const ht9 = document.querySelector('.ht9');
const ht10 = document.querySelector('.ht10');
const ht11 = document.querySelector('.ht11');
const ht12 = document.querySelector('.ht12');
const ht13 = document.querySelector('.ht13');
const ht14 = document.querySelector('.ht14');
const ht15 = document.querySelector('.ht15');
const ht16 = document.querySelector('.ht16');
const ht17 = document.querySelector('.ht17');
const ht19 = document.querySelector('.ht19');
const ht20 = document.querySelector('.ht20');
const ht21 = document.querySelector('.ht21');
const ht22 = document.querySelector('.ht22');
const ht23 = document.querySelector('.ht23');
const ht24 = document.querySelector('.ht24');
const ht25 = document.querySelector('.ht25');
const ht26 = document.querySelector('.ht26');
const ht27 = document.querySelector('.ht27');
const ht28 = document.querySelector('.ht28');
const ht29 = document.querySelector('.ht29');



//recorrido del ciclo for-Each usando la funcion flecha
//link parece ser una colección de elementos HTML, obtenida mediante el uso de querySelectorAll.
/*El ciclo forEach se utiliza para aplicar en cada elemento en la colección .
Para cada elemento r, se agrega un event listener que espera un click (addEventListener('click', ...)).*/
/*dentro del addEeventListener, se obtiene el valor del atributo language del elemento actual mediante getAttribute('language') 
y se almacena en la constante attr.*/


link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        //permite acceder a un objeto changeLanguage con diferentes traducciones
        //usando la const de attr, el código accede a las propiedades logoText, tp2 y menuHome del objeto changeLanguage y asi sucesivamente...
        //textContent permite actualizar los contenidos de los elementos HTML        
        pages.textContent = changeLanguage[attr].pages;
        ht.textContent = changeLanguage[attr].ht;
        ht1.textContent = changeLanguage[attr].ht1;
        ht2.textContent = changeLanguage[attr].ht2;
        ht3.textContent = changeLanguage[attr].ht3;
        ht5.textContent = changeLanguage[attr].ht5;
        ht6.textContent = changeLanguage[attr].ht6;
        ht7.textContent = changeLanguage[attr].ht7;
        ht8.textContent = changeLanguage[attr].ht8;
        ht9.textContent = changeLanguage[attr].ht9;
        ht10.textContent = changeLanguage[attr].ht10;
        ht11.textContent = changeLanguage[attr].ht11;
        ht12.textContent = changeLanguage[attr].ht12;
        ht13.textContent = changeLanguage[attr].ht13;
        ht14.textContent = changeLanguage[attr].ht14;
        ht15.textContent = changeLanguage[attr].ht15;
        ht16.textContent = changeLanguage[attr].ht16;
        ht17.textContent = changeLanguage[attr].ht17;
        ht19.textContent = changeLanguage[attr].ht19;
        ht20.textContent = changeLanguage[attr].ht20;
        ht21.textContent = changeLanguage[attr].ht21;
        ht22.textContent = changeLanguage[attr].ht22;
        ht23.textContent = changeLanguage[attr].ht23;
        ht24.textContent = changeLanguage[attr].ht24;
        ht25.textContent = changeLanguage[attr].ht25;
        ht26.textContent = changeLanguage[attr].ht26;
        ht27.textContent = changeLanguage[attr].ht27;
        ht28.textContent = changeLanguage[attr].ht28;
        ht29.textContent = changeLanguage[attr].ht29;

    });
});


//objeto de json que asigna los valores a cada clase en español usando el atributo "espanish"
let changeLanguage = {

    "espanish":
    {
        "pages": "PAGINAS",
        "ht": "¿Quienes Somos?",
        "ht1": "Somos especialistas en moda y tendencias",
        "ht2": "Porque entendemos lo que te gusta",
        "ht3": "En Boutique Rocio Designs, nos especializamos en moda y tendencias, para que siempre estes a la vanguardia de la moda.",
        "ht5": "Estilo & Gusto",
        "ht6": "Moda",
        "ht7": "Clase",
        "ht8": "Estilo",
        "ht9": "REVISTA VOGUE",
        "ht10": "LA SEMANA DE LA MODA EN PARIS 2024",
        "ht11": "REVISTA FASHION",
        "ht12": "NUEVAS TENDENCIAS DE MODA",
        "ht13": "NUESTROS CLIENTES TE CUENTAN SU EXPERIENCIA",
        "ht14": "MARIA",
        "ht15": "Me encanta la variedad de prendas que tienen, siempre encuentro algo que me gusta",
        "ht16": "La calidad de las prendas es excelente, siempre compro en Boutique Rocio Designs",
        "ht17": "Los accesorios son mi debilidad, siempre encuentro algo que me gusta",
        "ht19": "GRAN VARIEDAD PARA HOMBRES Y MUJERES",
        "ht20": "CONOCER MAS",
        "ht21": "CONTACTO",
        "ht22": "PARA MAS INFORMACION SOBRE NUESTROS PRODUCTOS Y SERVICIOS",
        "ht23": "CONTACTO",
        "ht24": "REDES SOCIALES",
        "ht25": "QUE NO TE PERDAS DE NINGUN DETALLE",
        "ht26": "CONTACTO",
        "ht27": " Derechos Reservados @2024",
        "ht28": "Jose Aleman - Disenador Web",
        "ht29": "Suscríbete y consigue un 10% extra en tu próxima compra",


    },

  //objeto de json que asigna los valores a cada clase en ingles usando el atributo "english"
    "english":
    {
        "pages": "PAGES",
        "ht": "Who we are?",
        "ht1": "We are specialists in fashion and trends",
        "ht2": "Because we understand what you like",
        "ht3": "At Boutique Rocio Designs, we specialize in fashion and trends, so that you are always at the forefront of fashion.",
        "ht5": "Style & Class",
        "ht6": "Fashion",
        "ht7": "Class",
        "ht8": "Style",
        "ht9": "VOGUE MAGAZINE",
        "ht10": "PARIS FASHION WEEK 2024",
        "ht11": "FASHION MAGAZINE",
        "ht12": "NEW FASHION TRENDS",
        "ht13": "OUR CUSTOMERS TELL YOU THEIR EXPERIENCE",
        "ht14": "MARY",
        "ht15": "I love the variety of clothes they have, I always find something I like",
        "ht16": "The quality of the garments is excellent, I always buy at Boutique Rocio Designs",
        "ht17": "Accessories are my weakness, I always find something I like",
        "ht19": "GREAT VARIETY FOR MEN AND WOMEN",
        "ht20": "SEE MORE",
        "ht21": "CONTACT",
        "ht22": "FOR MORE INFORMATION ABOUT OUR PRODUCTS AND SERVICES",
        "ht23": "CONTACT",
        "ht24": "SOCIAL MEDIA",
        "ht25": "DON'T MISS ANY DETAILS",
        "ht26": "CONTACT",
        "ht27": "All Rights Reserved @2024",
        "ht28": "Jose Aleman - Web Designer",
        "ht29": "Subscribe and get an extra 10% on your next purchase",

    }
}