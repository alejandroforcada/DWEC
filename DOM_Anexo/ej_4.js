function numero_enlaces() {
    var cuantos = document.getElementsByTagName('a');
    alert('Numero total de enlaces: ' + cuantos.length);
}

function ref_enlaces() {
    var enlaces = document.getElementsByTagName('a');
    var salida = '';
    for (var index = 0; index < enlaces.length; index++) {
        var valor = enlaces[index].href;
        salida = salida + valor;
    }

    alert(salida);

}

function ref_parrafos() {
    var parrafos = document.getElementsByTagName('p');
    var salida = '';
    for (var index = 0; index < parrafos.length; index++) {
        var enlaces = parrafos[index].getElementsByTagName('a');
        
        for (let index2 = 0; index2 < enlaces.length; index2++) {
            var valor = enlaces[index2].href;
            salida = salida + valor;
            
        }
        
    }

    alert(salida);
    
}

function cambiar() {
    var parrafitos = document.getElementsByTagName('p');
    
    for (var index = 0; index < parrafitos.length; index++) {
        parrafitos[index].style.backgroundColor = 'green';
      
    }

}

function desactivar_color() {
    var parrafitos = document.getElementsByTagName('p');

    for (var index = 0; index < parrafitos.length; index++) {
        parrafitos[index].style.backgroundColor = 'white';
      
    }
   
}