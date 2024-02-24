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
upperContainer.style.minHeight = '100%'
upperContainer.style.flexGrow = '1'
upperContainer.style.flexBasis = '0'
upperContainer.style.display = 'flex'
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
profile.style.alignItems = 'center'
profile.style.height = '100%'
profile.style.width = '300px'
downContainer.appendChild(profile)

//NOMBRE DE PERFIL
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const nameStyle = `
    #name-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%; /* Ajusta la altura según tus necesidades */
    }

    #name {
        text-align: end;
        margin-left: 3ch;
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
field.style.height = '100%' 
field.style.flexGrow = '1'
field.style.flexBasis = '0'
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


//---------------------------------------------------//
//----------CONFIGURACION CONTAINER LATERAL DERECHO SUPERIOR-------------//
const rightContainer = document.createElement('div')
rightContainer.style.background = '#535C91'
rightContainer.style.flexGrow = '1'
rightContainer.style.flexBasis = '0'
rightContainer.style.display = 'flex'
rightContainer.style.flexDirection = 'column'
rightContainer.style.alignItems = 'flex-end'
rightContainer.style.overflowY = 'auto'
upperContainer.appendChild(rightContainer)