/**
 * Se obtiene la instancia de los elementos HTML que se utilizarán
 */
let textarea = document.querySelector("textarea");
let btnEncrypt = document.getElementById("btnEncrypt");
let btnDecrypt = document.getElementById("btnDecrypt");
let textView = document.getElementById("text-result");
let snackText = document.querySelector(".snackbar-text");


/**
 * Esta función asigna el focus a la caja de texto al momento
 * de cargar la página y muestra la view de estado vacío.
 */
window.onload = function(){
    textarea.focus();
    show();
};


/**
 * Se asignan las funciones a los eventos de click de los botones
 */
btnEncrypt.onclick = encryptClick;
btnDecrypt.onclick = decryptClick;


/**
 * Función que muestra un Snackbar informativo basado en el Snackbar de Material para Android
 * @param {Element} element 
 */
function showSnackbar(element){
    let snackbar = document.getElementById("snackbar");
    snackbar.className = "snackbar show";
    snackbar.style.top = (element.offsetTop - snackbar.offsetHeight - 10) + "px";
    snackbar.style.left = (element.offsetLeft + element.offsetWidth / 2 - snackbar.offsetWidth / 2) + "px";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}


/**
 * Esta función es asignada al evento click desde el HTML al boton de Copiar
 * @param {any} e 
 */
function copyClick(e){
    showSnackbar(e);
    const text = textView.textContent;
    navigator.clipboard.writeText(text)
    .then(()=>{
        snackText.textContent = "Copiado al portapapeles";
        showSnackbar(e);
    })
    .catch((err) =>{
        snackText.textContent = "No se pudo copiar :(";
        showSnackbar(e);
    });
}

/**
 * Evento click para el boton de Encriptar
 */
function encryptClick(){
    let word = textarea.value;
    if(word.length > 0){
        let encryptedText = encrypt(word);
        textView.textContent = encryptedText;
        hide();
    }else{
        show();
    }
}


/**
 * Evento click para el boton de Desencriptar
 */
function decryptClick(){
    let word = textarea.value;
    if(word.length > 0){
        let decryptedText = decrypt(word);
        textView.textContent = decryptedText;
        hide();
    }else{
        show();
    }
}

/**
 * Función para encriptar un String
 * @param {String} word
 * @returns {String}
 */
function encrypt(word){
    let result = word.toLowerCase();
    result = result.replace(/e/g, "enter");
    result = result.replace(/i/g, "imes");
    result = result.replace(/a/g, "ai");
    result = result.replace(/o/g, "ober");
    result = result.replace(/u/g, "ufat");
    return result;
}

/**
 * Función para desencriptar un String
 * @param {String} word 
 * @returns {String}
 */
function decrypt(word){
    let result = word.toLowerCase();
    result = result.replace(/enter/g, "e");
    result = result.replace(/imes/g, "i");
    result = result.replace(/ai/g, "a");
    result = result.replace(/ober/g, "o");
    result = result.replace(/ufat/g, "u");
    return result;
}

/**
 * Muestra el contenedor de estado vacío
 */
function show(){
    document.querySelector('.value-view').classList.remove('visible');
    document.querySelector('.help-view').classList.add('visible');
}

/**
 * Oculta el contenedor de estado vacío
 */
function hide(){
    document.querySelector('.value-view').classList.add('visible');
    document.querySelector('.help-view').classList.remove('visible');
}