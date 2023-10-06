function myScript(operacion){
    if (operacion==='enlaces'){
        var enlaces= document.body.getElementsByTagName('a');
        alert(enlaces.length);
    }
    if (operacion==='parrafos'){
        var parrafos= document.body.getElementsByTagName('p');
        alert(parrafos.length);
    }
    if (operacion==='enlaces en parrafos'){
        var parrafos= document.body.getElementsByTagName('p');
        var salida="";
        for (var index = 0; index < parrafos.length; index++) {
            salida= salida + ' \n parrafo '+ (index+1)+ '\n';
            var enlaces= parrafos[index].getElementsByTagName('a');
            for(var index2 = 0; index2 < enlaces.length; index2++){
                var valor=enlaces[index2].href
                salida= salida + valor +' ';
            }

        }
        alert(salida);
    }
    if(operacion ==='referencia'){
        var enlaces= document.body.getElementsByTagName('a');
        for(var index2 = 0; index2 < enlaces.length; index2++){
            var valor=enlaces[index2].href;
            salida= salida + valor +' ';


    }
    alert(salida);
}
}