// NODO RAIZ
const DOM = document;

//---------------------------------------//
//----------CONFIGURACION BODY-----------//
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.boxSizing = 'border-box';

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
        float: right;
        height: 50px; /* Ajusta la altura según tus necesidades */
    }

    #name {
        float: right;
        margin-right: 1ch;
        margin-top: 30px;
        font-size: 35px; 
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
        float: right;
        margin-right: 100px;
        //width: 0;
        //margin: auto;
        //display: block;
        width: auto; 
        height: 80px;
        border-radius: 50%;     
        margin-top: 10px;
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
        width: 100%; 
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
fieldMessage.style.letterSpacing = '0.005em';
fieldMessage.style.wordSpacing = '0.05em'
fieldMessage.style.marginLeft = '50px'
fieldMessage.id = 'fieldMessage';
fieldMessage.className = 'fieldMessage';
fieldMessage.placeholder = 'Type a message'; 


const field = document.createElement('div')
field.style.backgroundColor = '#9290C3'
field.style.height = '100%' 
field.style.display = 'flex'
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
leftContainer.style.height = '100%' // Set the height of leftContainer
leftContainer.style.width = '300px'
upperContainer.appendChild(leftContainer)

const nameGroup = document.createElement('text')
nameGroup.style.color = 'white'
nameGroup.style.fontSize = '100px'
nameGroup.style.fontWeight = 'bold'
nameGroup.textContent = 'CHAT'
nameGroup.style.marginLeft = '15px'
nameGroup.style.fontFamily = 'Manrope'
leftContainer.appendChild(nameGroup)

const containerU = document.createElement('div');
containerU.style.backgroundColor = 'transparent';
containerU.style.marginTop = '20px'
containerU.style.width = '100%'
containerU.style.height = '100%'
containerU.id = 'scrollBar';  // Asegúrate de que el contenedor tenga el id 'scrollBar'
containerU.style.overflowY = 'scroll';  // Aplica overflow-y: scroll directamente al contenedor
containerU.style.overflowY = 'auto'; 
leftContainer.appendChild(containerU)



leftContainer.style.display = 'flex'
leftContainer.style.flexDirection = 'column'
leftContainer.style.alignItems = 'flex-start' // Align to the left
leftContainer.id = 'scrollBar';  // Asegúrate de que el contenedor tenga el id 'scrollBar'
leftContainer.style.overflowY = 'scroll';  // Aplica overflow-y: scroll directamente al contenedor
leftContainer.style.overflowY = 'auto'; // Hacer el contenedor scrollable
leftContainer.style.maxHeight = '950px'; // Establecer una altura máxima fija













//---------------------------------------------------//
//----------CONFIGURACION CONTAINER LATERAL DERECHO SUPERIOR-------------//

const scrollBarStyle = `
    #scrollBar {
        overflow-y: scroll;
    }
    #scrollBar::-webkit-scrollbar {
        display: none;
    }
`;

// Agregar estilo al head
let styleScrollBar = document.createElement('style');
styleScrollBar.textContent = scrollBarStyle;
document.head.appendChild(styleScrollBar);

const rightContainer = document.createElement('div');
rightContainer.style.background = '#535C91';
rightContainer.style.display = 'flex';
rightContainer.style.flexGrow = '1';
rightContainer.style.flexBasis = '0';
rightContainer.style.flexDirection = 'column';
rightContainer.style.alignItems = 'flex-end'; 
rightContainer.id = 'scrollBar';  // Asegúrate de que el contenedor tenga el id 'scrollBar'
rightContainer.style.overflowY = 'scroll';  // Aplica overflow-y: scroll directamente al contenedor
rightContainer.style.overflowY = 'auto'; // Hacer el contenedor scrollable
rightContainer.style.maxHeight = '950px'; // Establecer una altura máxima fija
upperContainer.appendChild(rightContainer);










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
function sendMessage() {
    let mensajeValue = document.getElementById('fieldMessage').value;

    let mensaje = document.createElement("div");
    mensaje.style.backgroundColor = '#474F7A';
    mensaje.style.display = 'inline-block';
    mensaje.style.marginTop = '15px';
    mensaje.style.marginRight = '20pX';
    mensaje.style.padding = '5px';
    mensaje.style.borderRadius = '15px';

    let info = document.createElement("h4");
    info.textContent = mensajeValue;
    info.style.fontFamily = 'Manrope';
    info.style.fontSize = "20px";
    info.style.letterSpacing = '0.005em';
    info.style.wordSpacing = '0.05em'
    info.style.color = 'white';

    mensaje.appendChild(info);

    rightContainer.appendChild(mensaje);

    // Hacer scroll hacia abajo automáticamente
    rightContainer.scrollTop = rightContainer.scrollHeight;
}



//---------------------------------------------------//
//----------FUNCION PARA GENERAR LOS NOMBRES DE USUARIOS -------------//
function createUserContainer(usuario) {
    const userContainer = document.createElement('div')
    userContainer.style.width = '240px'
    userContainer.style.borderRadius = '15px'
    userContainer.style.padding = '10px'
    userContainer.style.marginTop = marginTopValue
    userContainer.style.marginLeft = '10px'
    userContainer.textContent = usuario
    userContainer.style.display = 'flex'
    userContainer.style.backgroundColor = '#4B527E'
    parentContainer.appendChild(userContainer) //linea a cambiar
  }
  
//---------------------------------------------------//
//--------- ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA--------//
async function optenerPosts(){
    let data = await fetch('http://uwu-guate.site:3000/messages',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })    
    console.log("await", data);
    let posts = await data.json();
    console.log(posts);

    return posts;
}

//---------------------------------------------------//
//------------------ MOSTRAR MENSAJES-------------------------------//
document.addEventListener('DOMContentLoaded', async function () {
    try {
        let posts = await optenerPosts();
        // Haz algo con los posts, por ejemplo, mostrarlos en la interfaz
        console.log('Posts obtenidos:', posts);
    } catch (error) {
        console.error('Error al obtener los posts:', error);
    }
});


// Función para recibir mensajes y mostrarlos en el rightContainer
function receiveMessage(messageValue) {
    let mensaje = document.createElement("div");
    mensaje.style.backgroundColor = '#474F7A';
    mensaje.style.display = 'inline-block';
    mensaje.style.marginTop = '15px';
    mensaje.style.marginRight = '20pX';
    mensaje.style.padding = '5px';
    mensaje.style.borderRadius = '15px';

    let info = document.createElement("h4");
    info.textContent = messageValue;
    info.style.fontFamily = 'Manrope';
    info.style.fontSize = "20px";
    info.style.letterSpacing = '0.005em';
    info.style.wordSpacing = '0.05em';
    info.style.color = 'white';

    mensaje.appendChild(info);

    rightContainer.appendChild(mensaje);

    // Hacer scroll hacia abajo automáticamente
    rightContainer.scrollTop = rightContainer.scrollHeight;
}

// Función para obtener mensajes de la API y mostrarlos en el rightContainer
async function displayMessagesFromAPI() {
    try {
        let posts = await optenerPosts();

        // Iterar sobre los mensajes obtenidos y mostrarlos
        posts.forEach(post => {
            if (post[1]) {
                receiveMessage(post[1]); 
            } else {
                console.warn('El objeto post no contiene una propiedad en la posición 1:', post);
            }
        });

    } catch (error) {
        console.error('Error al obtener los mensajes desde la API:', error);
    }
}



// Llamada inicial a displayMessagesFromAPI al cargar la página
document.addEventListener('DOMContentLoaded', async function () {
    await displayMessagesFromAPI();
});

// Configurar un temporizador para actualizar los mensajes cada cierto tiempo
const updateIntervalMinutes = 5; // Puedes ajustar este valor según tus necesidades
setInterval(async function () {
    await displayMessagesFromAPI();
}, updateIntervalMinutes * 60 * 1000); // Convierte minutos a milisegundos



async function sendMessage() {
    try {
        let mensajeValue = document.getElementById('fieldMessage').value;

        // Preparar el objeto para enviar a la API
        let newPost = {
            id: generateId(), // Generar el ID (puedes definir tu propia lógica para esto)
            name: "Irvs", // Nombre por defecto
            message: mensajeValue,
            createDate: generateCurrentDate() // Generar la fecha actual (puedes definir tu propia lógica para esto)
        };

        // Enviar el mensaje a la API
        await sendPostToAPI(newPost);

        // Mostrar el mensaje localmente
        receiveMessage(mensajeValue);

        // Limpiar el campo de mensajes
        document.getElementById('fieldMessage').value = '';
    } catch (error) {
        console.error('Error al enviar o mostrar el mensaje:', error);
    }
}

// Función para enviar el post a la API
async function sendPostToAPI(post) {
    try {
        // Realizar la solicitud POST a la API
        let response = await fetch('http://uwu-guate.site:3000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });

        if (!response.ok) {
            throw new Error('Error al enviar el mensaje a la API');
        }

    } catch (error) {
        console.error('Error al enviar el mensaje a la API:', error);
    }
}

// Función para generar un ID único (puedes ajustar esto según tus necesidades)
function generateId() {
    return Math.floor(Math.random() * 1000); // Solo para propósitos de ejemplo, debes usar un método más robusto en un entorno real
}

// Función para generar la fecha actual en el formato deseado (puedes ajustar esto según tus necesidades)
function generateCurrentDate() {
    let currentDate = new Date();
    return currentDate.toISOString();
}
