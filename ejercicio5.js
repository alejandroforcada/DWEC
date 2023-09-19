var prencioSinIva= parseFloat(prompt('Dame un precio'));

var iva = prencioSinIva * 0.21;

var precioConIva= prencioSinIva + iva;



alert(precioConIva.toFixed(2));


