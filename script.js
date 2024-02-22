// NODO RAIZ
const DOM = document;

/**
 * BAKCGROUND
 */

// Crear el estilo global
const globalStyle = `
    body {
        background-color: #6096B4;
        margin: 0; /* Elimina el margen predeterminado del body */
        padding: 0; /* Elimina el relleno predeterminado del body */
    }
`;

// Crear un elemento de estilo y agregarlo al head
const styleElement = document.createElement('style');
styleElement.textContent = globalStyle;
document.head.appendChild(styleElement);

// Crear el div global
let globalDiv = document.createElement('div');
globalDiv.id = 'global';
globalDiv.className = 'global';
document.body.appendChild(globalDiv);


/**
 * Primera columna 
 */

// Estilo para la columna izquierda
const column1style = `
    #left {
        background-color: white;
        width: 22.5vw; /* Ancho deseado */
        height: 100vh; /* Altura igual a la altura de la página */
        position: fixed; /* Para fijar la columna incluso al hacer scroll */
        left: 0; /* Alineado a la izquierda */
    }
`;

// Crear un elemento de estilo y agregarlo al head
const styleColumn1 = document.createElement('style');
styleColumn1.textContent = column1style;
document.head.appendChild(styleColumn1);

// Crear la columna izquierda
let divLeft = document.createElement('div');
divLeft.id = 'left';
divLeft.className = 'left'; // Puedes agregar una clase si lo prefieres
document.body.appendChild(divLeft);


/**
 * Primera fila 
 */

// Estilo para la fila inferior izquierda
const row1style = `
    #leftBottom {
        background-color: black;
        width: 22.5vw; /* Ancho deseado */
        height: 12.5vh; /* Altura deseada */
        position: fixed; /* Para fijar la fila incluso al hacer scroll */
        bottom: 0; /* Alineado en la parte inferior */
        left: 0; /* Alineado a la izquierda */
    }
`;

// Crear un elemento de estilo y agregarlo al head
const stylerow1 = document.createElement('style');
stylerow1.textContent = row1style;
document.head.appendChild(stylerow1);

// Crear la fila inferior izquierda
let divLeftBottom = document.createElement('div');
divLeftBottom.id = 'leftBottom';
divLeftBottom.className = 'leftBottom'; // Puedes agregar una clase si lo prefieres
document.body.appendChild(divLeftBottom);


/**
 * Primera fila 
 */

// Estilo para la fila inferior derecha
const row2style = `
    #RightBottom {
        background-color: orange;
        width: 77.5vw; /* Ancho deseado */
        height: 12.5vh; /* Altura deseada */
        position: fixed; /* Para fijar la fila incluso al hacer scroll */
        bottom: 0; /* Alineado en la parte inferior */
        right: 0; /* Alineado a la derecha */
    }
`;

// Crear un elemento de estilo y agregarlo al head
const stylerow2 = document.createElement('style');
stylerow2.textContent = row2style;
document.head.appendChild(stylerow2);

// Crear la fila inferior derecha
let divRightBottom = document.createElement('div');
divRightBottom.id = 'RightBottom';
divRightBottom.className = 'RightBottom'; // Corregir el nombre de la clase aquí
document.body.appendChild(divRightBottom);


/**
 * Crear imagen
 */
const imageStyle = `
    #image {
        border-radius: 50%;
        left: 1vw;
        top: 50%;
        transform: translateY(-50%);
        width: 5vw;
        position: relative;
    }
`;
const styleImage = document.createElement('style');
styleImage.textContent = imageStyle;
document.head.appendChild(styleImage);

let imageProfile = document.createElement('img');
imageProfile.id = 'image';
imageProfile.className = 'image';
imageProfile.src = 'https://i.pinimg.com/564x/9e/09/36/9e0936526da3f3c29d8ecf250cffed1d.jpg';

divLeftBottom.appendChild(imageProfile);

/**
 * Crear nombre
 */


const nameStyle

