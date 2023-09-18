 var cadena = prompt('Dame una cadena');

var largo= cadena.length;
var mayus =cadena.toUpperCase();
var minus= cadena.toLowerCase();
var palabraSeparada =cadena.split(' ');


document.write("La cadena es "+cadena+ "<BR>");

document.write("La longitud de la cadena es "+largo+ " caracteres"+"<BR>");

document.write("La cadena en mayusculas es "+mayus+ " <BR>");

document.write("La cadena en minusculas es "+minus+ " <BR>");




document.write("CADENA NORMAL: "+"<BR>"); 
for (palabra in palabraSeparada) {
    document.write(palabraSeparada[palabra] + "<BR>"); 

}
var reversePalabra= palabraSeparada.reverse();
document.write("CADENA AL REVÉS: "+"<BR>"); 

for (palabra in reversePalabra) {
    document.write(reversePalabra[palabra] + "<BR>");}