// NODO RAIZ
const DOM = document;
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.boxSizing = 'border-box'

/**
 * Crear imagen
 */
const imageStyle = `
    #image {
        width: 80px; 
        height: 80px; 
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

//divLeftBottom.appendChild(imageProfile);

/**
 * Crear nombre
 */

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
        scroll: hide;
    }
`;
let styleName = document.createElement('style');
styleName.textContent = nameStyle;
document.head.appendChild(styleName);

let nameProfile = document.createElement('text');
nameProfile.id = 'name';
nameProfile.className = 'name';
nameProfile.textContent = 'Irving'

//divLeftBottom.appendChild(nameProfile);

/**
 * Crear campo de texto
 */

// Estilo para el campo de texto
const fieldTextStyle = `
    #fieldMessage {
        
        width: 100%; 
        height: 100%;
        font-size: 24px;
        background-color: transparent; 
        border: none; 
        color: white;
        resize: none; 
        outline: none; 
        overflow-y: scroll;
        padding: 0;
        margin: 0;
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
fieldMessage.id = 'fieldMessage';
fieldMessage.className = 'fieldMessage';
fieldMessage.placeholder = 'Type a message'; 

//divRightBottom.appendChild(fieldMessage);


/**
 * Crear boton para enviar mensajes
 */
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

let styleSendButton = document.createElement('style');
styleSendButton.textContent = sendButtonStyle;
document.head.appendChild(styleSendButton);

const sendButton = document.createElement('button');
sendButton.id = 'sendButton';
sendButton.className = 'sendButton';

sendButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
//divRightBottom.appendChild(sendButton);


const mainContainer = document.createElement('main');
mainContainer.style.background = 'green'
mainContainer.style.height = '98dvh'
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column'



document.body.appendChild(mainContainer)

const upperContainer = document.createElement('div');
upperContainer.style.backgroundColor = 'blue'
upperContainer.style.flexGrow = '1'
upperContainer.style.flexBasis = '0'
mainContainer.appendChild(upperContainer)

const downContainer = document.createElement('div');
downContainer.style.backgroundColor = 'red'
downContainer.style.height = '100px'
mainContainer.appendChild(downContainer)

upperContainer.style.display = 'flex'
upperContainer.style.flexDirection = 'row'

const leftContainer = document.createElement('div')
leftContainer.style.backgroundColor = '#1B1A55'
leftContainer.style.height = '100%'
leftContainer.style.width = '300px'
upperContainer.appendChild(leftContainer)

const rightContainer = document.createElement('div')
rightContainer.style.background = '#535C91'
rightContainer.style.flexGrow = '1'
rightContainer.style.flexBasis = '0'
upperContainer.appendChild(rightContainer)


downContainer.style.display = 'flex'
downContainer.style.flexDirection = 'row'

const profile = document.createElement('div')
profile.style.backgroundColor = '#070F2B'
profile.style.alignItems = 'center'
profile.style.height = '100%'
profile.style.width = '300px'
downContainer.appendChild(profile)

const field = document.createElement('div')
field.style.backgroundColor = '#9290C3'
field.style.height = '100%' 
field.style.flexGrow = '1'
field.style.flexBasis = '0'
downContainer.appendChild(field)




const send  = document.createElement('div')

send.style.height = '100%'
send.style.width = '150px'
send.style.backgroundColor = '#9290C3'
downContainer.appendChild(send)

profile.appendChild(imageProfile)
profile.appendChild(nameProfile)

send.appendChild(sendButton)

field.appendChild(fieldMessage)

//EVENTO
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





function sendMessage(){
    let mensajeValue = document.getElementById('fieldMessage').value;
    console.log(mensajeValue);
    ///console.log(mensajeValue);
    let divMensajeContenedor = DOM.createElement("div");
    divMensajeContenedor.style.backgroundColor = '#474F7A';
    divMensajeContenedor.style.width = "350px";
    divMensajeContenedor.style.minHeight = "60px";
    divMensajeContenedor.style.borderRadius = "15px";
    
  
    divMensajeContenedor.style.marginBottom = "8px";
    divMensajeContenedor.style.flexDirection = "column";


    let info = document.createElement("h4");
    divMensajeContenedor.innerHTML = mensajeValue;
    info.style.alignItems = "right";
    divMensajeContenedor.style.padding = "10px";
    info.style.fontSize= "20px" ;
    info.style.color = 'white';

    rightContainer.style.alignContent = 'end'
    rightContainer.appendChild(divMensajeContenedor);
    rightContainer.style.alignContent = 'end';

}





