var numeros =[7,8,2,9,10];

var suma=0;

for ( numero in numeros) {
    if (numeros[numero]> 8){  // Cuando utilizas un for in la variable que se recorre en el array es la posicion de la varible no su valor
        suma+=numeros[numero];
    }
    }
alert (suma);