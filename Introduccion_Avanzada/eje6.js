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
    var minutos=0;
    if (d.getMinutes()<10){
    minutos = '0'+ d.getMinutes();}

    else{
        minutos=d.getMinutes();
    }

    document.write(mensaje+'son las '+d.getHours(),':'+minutos,' horas');
}

