const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// aqui empieza la funcion de encriptado
function btnEncript(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
    document.getElementById("into").style.display = "none"
    document.getElementById("resultado-ok").style.display = "block"
    document.getElementsByClassName("mensaje").value = textoEncriptado
    

    if(textoEncriptado == ""){
        alert("Debes ingresar texto para encriptaro desencriptar")
        return
    }
}

function encriptar(stringEncriptada){
    let condiciones = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < condiciones.length; i++){
        if(stringEncriptada.includes(condiciones[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(condiciones[i][0], condiciones[i][1])
        }
    }
    return stringEncriptada;
}


// aqui desencriptamos


function btnDesencript(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptada){
    let condiciones = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < condiciones.length; i++){
        if(stringDesencriptada.includes(condiciones[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(condiciones[i][1], condiciones[i][0])
        }
    }
    return stringDesencriptada;
}

function copy(){
    var textoCopiado = document.getElementsByClassName("mensaje");
    navigator.clipboard.writeText(textoCopiado.value);
    console.log("Copiado" + textoCopiado.value);
}