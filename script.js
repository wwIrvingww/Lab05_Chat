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

const styleElement = document.createElement('style');
styleElement.textContent = globalStyle;
document.head.appendChild(styleElement);

let globalDiv = document.createElement('div');
globalDiv.id = 'global';
globalDiv.className = 'global';
document.body.appendChild(globalDiv);


/**
 * Primera columna 
 */

const column1style = `
    #left {
        background-color: white;
        width: 22.5vw; /* Ancho deseado */
        height: 100vh; /* Altura igual a la altura de la página */
        position: fixed; /* Para fijar la columna incluso al hacer scroll */
        left: 0; /* Alineado a la izquierda */
    }
`;


const styleColumn1 = document.createElement('style');
styleColumn1.textContent = column1style;
document.head.appendChild(styleColumn1);

let divLeft = document.createElement('div');
divLeft.id = 'left';
divLeft.className = 'left'; 
document.body.appendChild(divLeft);


/**
 * Primera fila 
 */

const row1style = `
    #leftBottom {
        background-color: black;
        width: 22.5vw; 
        height: 12.5vh; 
        position: fixed; 
        bottom: 0; 
        left: 0; 
    }
`;


const stylerow1 = document.createElement('style');
stylerow1.textContent = row1style;
document.head.appendChild(stylerow1);


let divLeftBottom = document.createElement('div');
divLeftBottom.id = 'leftBottom';
divLeftBottom.className = 'leftBottom'; 
document.body.appendChild(divLeftBottom);


/**
 * Primera fila 
 */

const row2style = `
    #RightBottom {
        background-color: orange;
        width: 77.5vw; 
        height: 12.5vh; 
        position: fixed; 
        bottom: 0; 
        right: 0; 
    }
`;

const stylerow2 = document.createElement('style');
stylerow2.textContent = row2style;
document.head.appendChild(stylerow2);

let divRightBottom = document.createElement('div');
divRightBottom.id = 'RightBottom';
divRightBottom.className = 'RightBottom'; 
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

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const nameStyle = `
    #name {
        position: absolute;
        right: 20%; 
        top: 50%;
        transform: translateY(-50%);
        font-size: 4vw; 
        color: white;
        font-family: 'Manrope', sans-serif;
    }
`;
let styleName = document.createElement('style');
styleName.textContent = nameStyle;
document.head.appendChild(styleName);

let nameProfile = document.createElement('text');
nameProfile.id = 'name';
nameProfile.className = 'name';
nameProfile.textContent = 'Irving'

divLeftBottom.appendChild(nameProfile);

/**
 * Crear campo de texto
 */

// Estilo para el campo de texto
const fieldTextStyle = `
    #fieldMessage {
        position: relative;
        width: 90%; 
        height: 100%;
        font-size: 2vw;
        background-color: transparent; 
        border: none; 
        color: white;
        resize: none; 
        outline: none; 
        overflow-y: scroll;
    }
    .fieldMessage::-webkit-scrollbar {
        display: none;
    }

    #fieldMessage::placeholder {
        color: rgba(255, 255, 255, 0.5); 
    }
`;

let styleFieldText = document.createElement('style');
styleFieldText.textContent = fieldTextStyle;
document.head.appendChild(styleFieldText);

let fieldMessage = document.createElement('textarea');
fieldMessage.id = 'fieldMessage';
fieldMessage.className = 'fieldMessage';
fieldMessage.placeholder = 'Type a message'; 

divRightBottom.appendChild(fieldMessage);


/**
 * Crear boton para enviar men
 */
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
fontAwesomeLink.rel = 'stylesheet';
document.head.appendChild(fontAwesomeLink);

// Estilo para el botón de enviar
const sendButtonStyle = `
    #sendButton {
        position: absolute;
        width: 10%;
        height: 100%;
        right: 0;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 2vw; 
    }
`;

let styleSendButton = document.createElement('style');
styleSendButton.textContent = sendButtonStyle;
document.head.appendChild(styleSendButton);

let sendButton = document.createElement('button');
sendButton.id = 'sendButton';
sendButton.className = 'sendButton';

sendButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
divRightBottom.appendChild(sendButton);

//EVENTO
sendButton.addEventListener('click', function() {
    // accion dummie
    console.log('Botón de enviar clickeado');
});





