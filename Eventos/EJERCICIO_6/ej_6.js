window.onload = function() {
    var arrayBotones = document.getElementsByTagName("button");
    for (var index = 0; index < arrayBotones.length; index++) {
        arrayBotones[index].onclick = aviso;
        
        
    }
function aviso() {
   alert("Has pulsado sobre un botón");
    
    }
}
