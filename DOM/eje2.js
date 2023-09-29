function myscript(operacion){

    if (operacion==='añadir'){
        var parrafoCreado= document.createElement('li');
        var contenidoParrafoCreado= document.createTextNode('elefante');
        parrafoCreado.appendChild(contenidoParrafoCreado);
        document.getElementById('listaelemen').appendChild(parrafoCreado);
    }
    else if (operacion==='insertar'){
        var parrafoInsertado= document.createElement('li');
        var contenidoParrafoInsertado= document.createTextNode('vaca');
        parrafoInsertado.appendChild(contenidoParrafoInsertado);
       insertAfter(document.getElementById('listaelemen').getElementsByTagName('li')[0],parrafoInsertado);
    }
    else if (operacion==='reemplazar'){
        var parrafoReemplazado= document.createElement('li');
        var contenidoParrafoReemplazado= document.createTextNode('ballena');
        parrafoReemplazado.appendChild(contenidoParrafoReemplazado);
        document.getElementById('listaelemen').replaceChild(parrafoReemplazado,document.getElementById('listaelemen').getElementsByTagName('li')[1]);
    }
    else if(operacion==='borrar'){
        document.getElementById('listaelemen').removeChild(document.getElementById('listaelemen').getElementsByTagName('li')[1]);

    }
    else if (operacion==='clonar'){
       var clon= document.getElementById('listaelemen').cloneNode(true);
       document.body.insertBefore(clon,document.getElementById('botones'));
    }

    else if (operacion==='sublistaDOM'){
        var leon=document.getElementById('listaelemen').getElementsByTagName('li')[0]
        if (leon.getElementsByTagName('ul').length === 0) {
        var listaCreada= document.createElement('ul');
        var parrafoCreado= document.createElement('li');
        var contenidoParrafoCreado= document.createTextNode('elefante');
        parrafoCreado.appendChild(contenidoParrafoCreado);
        listaCreada.appendChild(parrafoCreado);
        leon.appendChild(listaCreada);}

    }
    else {
        var leon=document.getElementById('listaelemen').getElementsByTagName('li')[0]
        if (leon.getElementsByTagName('ul').length === 0) {
            var sublista = document.createElement('ul');
            sublista.innerHTML = '<li>cocodrilo</li>';
            leon.appendChild(sublista);
        }
}
}


    function insertAfter(nodoPrincipal,nodoInsertado){ 
        if(nodoPrincipal.nextSibling){ 
            nodoPrincipal.parentNode.insertBefore(nodoInsertado,nodoPrincipal.nextSibling); 
        } else { 
            e.parentNode.appendChild(i); 
        }
    }