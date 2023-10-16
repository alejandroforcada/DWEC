/*window.onload = function(){
    function cambiar_tamaño() {
        this.style.fontSize = '16px';
        
    }
    
    function tamaño_original(){
        this.style.fontSize = '12px';
    }
    
    document.getElementById("parrafi").onmouseover = cambiar_tamaño;
    document.getElementById("parrafi").onmouseout = tamaño_original;
}
*/

window.onload = function(){
    document.getElementById("parrafi").onmouseover = cambiar_tamaño;
    document.getElementById("parrafi").onmouseout = tamaño_original;

}
    function cambiar_tamaño() {
        this.style.fontSize = '16px';
        
    }
    
    function tamaño_original(){
        this.style.fontSize = '12px';
    }
    

