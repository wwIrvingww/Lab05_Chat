// NODO RAIZ
const DOM = document;

//---------------------------------------//
//----------CONFIGURACION BODY-----------//
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.boxSizing = 'border-box'

//---------------------------------------------------//
//----------CONFIGURACION MAIN CONTAINER-------------//
const mainContainer = document.createElement('main');
mainContainer.style.height = '100dvh'
mainContainer.style.width = '100dvw'
mainContainer.style.display = 'flex'
mainContainer.style.flexDirection = 'column'
document.body.appendChild(mainContainer)


//---------------------------------------------------//
//----------CONFIGURACION PARTE DE ARRIBA-------------//
const upperContainer = document.createElement('div');
upperContainer.style.backgroundColor = 'blue'
upperContainer.style.display = 'flex'
upperContainer.style.flexGrow = '1'
upperContainer.style.flexBasis = '0'
upperContainer.style.flexDirection = 'row'
mainContainer.appendChild(upperContainer)

//---------------------------------------------------//
//----------CONFIGURACION CONTAINER PARTE DE ABAJO-------------//
const downContainer = document.createElement('div');
downContainer.style.backgroundColor = 'red'
downContainer.style.height = '100px'
downContainer.style.display = 'flex'
downContainer.style.flexDirection = 'row'
mainContainer.appendChild(downContainer)

//----------CONFIGURACION PERFIL AREA-------------//
const profile = document.createElement('div')
profile.style.backgroundColor = '#070F2B'
profile.style.display = 'flex'
profile.style.flexDirection = 'column'
profile.style.height = '100%'
profile.style.width = '300px'
profile.style.textAlign = 'right'
profile.style.justifyContent = 'center'

downContainer.appendChild(profile)

//NOMBRE DE PERFIL
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const nameStyle = `
    #name-container {
        float: right;
        height: 50px; /* Ajusta la altura según tus necesidades */
    }

    #name {
        float: right;
        margin-right: 3ch;
        margin-top: 2ch;
        font-size: 25px; 
        color: white;
        font-family: 'Manrope', sans-serif;
        // scroll: hide;
    }
`;
let styleName = document.createElement('style');
styleName.textContent = nameStyle;
document.head.appendChild(styleName);

let nameProfile = document.createElement('text');
nameProfile.id = 'name';
nameProfile.className = 'name';
nameProfile.textContent = 'Irving'
profile.appendChild(nameProfile)

//FOTO DE PERFIL 
/**
 * Crear imagen
 */
const imageStyle = `
    #image {
        width: 0;
        margin: auto;
        display: block;
        justify-content: left;
        align: center;
        width: 80px; 
        height: 100%;
        border-radius: 50%;     
    }
`;
const styleImage = document.createElement('style');
styleImage.textContent = imageStyle;
document.head.appendChild(styleImage);

let imageProfile = document.createElement('img');
imageProfile.id = 'image';
imageProfile.className = 'image';
imageProfile.src = 'https://i.pinimg.com/564x/9e/09/36/9e0936526da3f3c29d8ecf250cffed1d.jpg';
profile.appendChild(imageProfile)


//----------CONFIGURACION ESCRIBIR MENSAJE AREA-------------//
const fieldTextStyle = `
    #fieldMessage {
        width: 1500px; 
        height: auto;
        font-size: 24px;
        background-color: transparent; 
        border: none; 
        color: white;
        outline: none; 
        overflow-y: scroll;
        margin-right: 10;
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
fieldMessage.setAttribute("maxlength","140");
fieldMessage.style.marginLeft = '50px'
fieldMessage.id = 'fieldMessage';
fieldMessage.className = 'fieldMessage';
fieldMessage.placeholder = 'Type a message'; 


const field = document.createElement('div')
field.style.backgroundColor = '#9290C3'
field.style.height = 'auto' 
field.style.display = 'flex'
field.style.flexGrow = '1'
field.style.flexBasis = 'auto'
field.appendChild(fieldMessage)
downContainer.appendChild(field)

//----------CONFIGURACION ENVIAR MENSAJE AREA-------------//
//Crear boton para enviar mensajes
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
fontAwesomeLink.rel = 'stylesheet';
document.head.appendChild(fontAwesomeLink);

// Estilo para el botón de enviar
const sendButtonStyle = `
   #sendButton {     
       width: 100%;
       height: 100%;
       background-color: transparent;
       border: none;
       outline: none;
       font-size: 50px; 
       color: white;
   }
`;
//Agregar estilo al head
let styleSendButton = document.createElement('style');
styleSendButton.textContent = sendButtonStyle;
document.head.appendChild(styleSendButton);

//Crear y agregar al container
const sendButton = document.createElement('button');
sendButton.id = 'sendButton';
sendButton.className = 'sendButton';
sendButton.innerHTML = '<i class="fas fa-arrow-right"></i>';

const send  = document.createElement('div')
send.style.height = '100%'
send.style.width = '150px'
send.style.backgroundColor = '#9290C3'
downContainer.appendChild(send);
send.appendChild(sendButton)


//---------------------------------------------------//
//----------CONFIGURACION CONTAINER LATERAL IZQUIERDO SUPERIOR-------------//
const leftContainer = document.createElement('div')
leftContainer.style.backgroundColor = '#1B1A55'
leftContainer.style.height = '100%'
leftContainer.style.width = '300px'
upperContainer.appendChild(leftContainer)

const nameGroup = document.createElement('text')
nameGroup.style.color = 'white'
nameGroup.style.fontSize = '100px'
nameGroup.textContent = 'CHAT'
leftContainer.style.alignItems = 'center'
leftContainer.appendChild(nameGroup)



//---------------------------------------------------//
//----------CONFIGURACION CONTAINER LATERAL DERECHO SUPERIOR-------------//
const rightContainer = document.createElement('div')
rightContainer.style.background = '#535C91'
rightContainer.style.display = 'flex'
rightContainer.style.flexGrow = '1'
rightContainer.style.flexBasis = '0'
rightContainer.style.flexDirection = 'column'
rightContainer.style.alignItems = 'flex-end'
rightContainer.style.overflowY = 'auto'
upperContainer.appendChild(rightContainer)





//---------------------------------------------------//
//----------CONFIGURACION PARA ENVIAR LA FUNCION-------------//
send.addEventListener('click', function() {
    sendMessage();
    fieldMessage.value = '';
})
;

field.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        sendMessage();
        fieldMessage.value = '';
    }
});

//---------------------------------------------------//
//----------FUNCION PARA ENVIAR MENSAJES-------------//
function sendMessage(){
    let mensajeValue = document.getElementById('fieldMessage').value;

    let mensaje = document.createElement("div");
    mensaje.style.backgroundColor = '#474F7A';
    mensaje.style.display = 'inline-block'
    mensaje.style.marginTop = '10px'
    mensaje.style.marginRight = '20PX'
    mensaje.style.padding = '5px'
    mensaje.style.borderRadius = '15px'

    let info = document.createElement("h4");
    info.textContent = mensajeValue; // Use textContent for better performance and security
    info.style.fontSize= "20px" ;
    info.style.color = 'white';

    mensaje.appendChild(info); // Add the h4 element to the div

    rightContainer.appendChild(mensaje);
}