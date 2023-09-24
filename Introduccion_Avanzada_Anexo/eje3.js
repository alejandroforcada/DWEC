function sumar(){
    var numero= document.getElementById("texto");
    var suma= parseInt(numero.value);
    numero.value= suma+10;
    
}
function reset(){
    var numero =document.getElementById("texto");
    numero.value=0;

}