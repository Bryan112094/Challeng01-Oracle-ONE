let word_encrypt = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' }
 
let text_analyze = document.getElementById("analizar-texto");
let conContent = document.getElementById("conContenido");
let sinContent = document.getElementById("sinContenido");

function encrypt_text(){
    if ( text_analyze.value.length > 0) {
        let result = '';
        for (let i of text_analyze.value) {
            result += (word_encrypt[i] != undefined) ?  word_encrypt[i] : i;
        }
        if (conContent.style.display === 'none') {
            sinContent.style.display = 'none';
            conContent.style.display = '';
        }
        document.getElementById("texto-final").value = result;
    }
}

function decrypt_text(){
    result = text_analyze.value;
    if (result.length > 0) {
        for (let i in word_encrypt) {
            result = result.replaceAll(word_encrypt[i], i)
        }
        if (conContent.style.display === 'none') {
            sinContent.style.display = 'none';
            conContent.style.display = '';
        }
        document.getElementById("texto-final").value = result;
    }
}

function copy() {
    let copyText = document.querySelector("#texto-final");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);