function precioConIva(precioSinIva){
    
    var iva = precioSinIva * 0.21;
    
    var precioConIvaNum= precioSinIva + iva;
    
 
    
    return precioConIvaNum.toFixed(2);
    }
    
    
    var precioSinIva= parseFloat(prompt('Dame un precio'));

    alert(precioConIva(precioSinIva));
    
