function myscript(operacion){

    if (operacion==='añadir'){
        var parrafoCreado= document.createElement('p');
        var contenidoParrafoCreado= document.createTextNode('Parrafo añadido');
        parrafoCreado.appendChild(contenidoParrafoCreado);
        document.getElementById('divisor').appendChild(parrafoCreado);
    }
    else if (operacion==='insertar'){
        var parrafoInsertado= document.createElement('p');
        var contenidoParrafoInsertado= document.createTextNode('Párrafo insertado');
        parrafoInsertado.appendChild(contenidoParrafoInsertado);
       insertAfter(document.getElementById('divisor').getElementsByTagName('p')[0],parrafoInsertado);
    }
    else if (operacion==='reemplazar'){
        var parrafoReemplazado= document.createElement('p');
        var contenidoParrafoReemplazado= document.createTextNode('parrafo reemplazado');
        parrafoReemplazado.appendChild(contenidoParrafoReemplazado);
        document.getElementById('divisor').replaceChild(parrafoReemplazado,document.getElementById('divisor').getElementsByTagName('p')[1]);
    }
    else if(operacion==='borrar'){
        document.getElementById('divisor').removeChild(document.getElementById('divisor').getElementsByTagName('p')[1]);

    }
    else{
       var clon= document.getElementById('divisor').cloneNode(true);
       document.body.insertBefore(clon,document.getElementById('botones'));
    }
}


    function insertAfter(nodoPrincipal,nodoInsertado){ 
        if(nodoPrincipal.nextSibling){ 
            nodoPrincipal.parentNode.insertBefore(nodoInsertado,nodoPrincipal.nextSibling); 
        } else { 
            e.parentNode.appendChild(i); 
        }
    }
