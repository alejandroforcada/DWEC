function myScript(){

    var d = new Date();
    var mensaje='';
    if (d.getHours()<14){

        mensaje='Buenos dias ';

    }

    else if (d.getHours<20){

        mensaje='Buenos tardes ';

    }
    else{
        mensaje='Buenas noches ';
    }

    document.write(mensaje+'son las '+d.getHours(),':'+d.getMinutes(),' horas');
}

