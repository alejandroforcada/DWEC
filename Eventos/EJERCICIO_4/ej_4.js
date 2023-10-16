function resalta(){
    this.style.fontSize = '16px';
}
function disminuye(){
    this.style.fontSize = '12px';
}


window.onload = function(){
    document.getElementById("parrafi").addEventListener('mouseover', resalta);
    document.getElementById("parrafi").addEventListener('mouseout', disminuye);
}




