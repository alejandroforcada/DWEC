var numero=parseInt(prompt("Dame un numero del uno al diez"));

var numeroAleatorio= Math.floor(Math.random() * 10) + 1;

if (numero===numeroAleatorio){
    alert("Felicidades, has acertado");
}
else{
    alert("Has fallado");
}