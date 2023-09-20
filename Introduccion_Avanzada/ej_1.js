function precioConIva(precioSinIva){
    
    var iva = precioSinIva * 0.21;
    
    var precioConIvaNum= precioSinIva + iva;
    
    precioConIvaNum.toFixed(2);
    
    return precioConIvaNum;
    }
    
    
    var precioSinIva= parseFloat(prompt('Dame un precio'));

    alert(precioConIva(precioSinIva));
    