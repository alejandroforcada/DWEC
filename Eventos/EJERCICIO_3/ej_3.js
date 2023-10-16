function resalta(evento) {
   // var evento = elEvento || window.event;
    switch(evento.type) {
      case 'mouseover':
        this.style.fontSize = '16px';
        break;
      case 'mouseout':
        this.style.fontSize = '12px';
        break;
    }
  }
  
  window.onload = function() {
    document.getElementById("parrafi").onmouseover = resalta;
    document.getElementById("parrafi").onmouseout = resalta;
  }