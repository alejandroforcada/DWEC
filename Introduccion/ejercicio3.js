var mes = prompt('Dame un mes');
var estacion='';


if (mes=='enero' || mes=='febrero' || mes =='diciembre'){
    estacion ='invierno';
}
else if (mes=='marzo' || mes=='abril' || mes =='mayo'){
    estacion ='primavera';
}
else if (mes=='junio' || mes=='julio' || mes =='agosto'){
    estacion ='verano';
}
else if (mes=='septiembre' || mes=='octubre' || mes =='noviembre'){
    estacion ='otoño';
}

alert(estacion);