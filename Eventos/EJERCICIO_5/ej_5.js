window.onload = function() {
    document.getElementById("n").onkeypress = muestraInformacion;


function muestraInformacion(event) {
   // var evento = window.event || elEvento;
    if (event.charCode < 48 || event.charCode > 57){
        event.preventDefault();
        }
    }
    
}

