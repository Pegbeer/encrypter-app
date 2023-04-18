let textarea = document.querySelector("textarea");
let btnEncrypt = document.getElementById("btnEncrypt");
let handler = document.getElementById("empty-container");
let resultContainer = document.getElementById("result-container");
let textResult = document.getElementById("text-result");

window.onload = function(){
    textarea.focus();
    show();
};

btnEncrypt.onclick = encryptClick;

function encryptClick(){
    let word = textarea.value;
    if(word.length > 0){
        let encryptedText = encrypt(word);
        textResult.textContent = encryptedText;
        hide();
    }else{
        show();
    }
}

function encrypt(word){
    let result = word.toLowerCase();
    result = result.replace(/e/g, "enter");
    result = result.replace(/i/g, "imes");
    result = result.replace(/a/g, "ai");
    result = result.replace(/o/g, "ober");
    result = result.replace(/u/g, "ufat");
    return result;
}

function decrypt(word){
    
}

function show(){
    console.log("SHOWING!");
    handler.classList.remove("hidden-view");
    resultContainer.classList.add("hidden-view");
}

function hide(){
    console.log("HIDING!");
    handler.classList.add("hidden-view");
    resultContainer.classList.remove("hidden-view");
}