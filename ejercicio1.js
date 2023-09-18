
var suma=0;
var mayoresCien=0;
for (var index = 0; index < 5; index++) {
    numero= parseFloat(prompt('Dame un numero'));
    if (numero > 100){
        mayoresCien+=1;
    }
    suma+=numero;

}
alert(suma);
alert(mayoresCien);
