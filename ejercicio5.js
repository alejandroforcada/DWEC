var prencioSinIva= parseFloat(prompt('Dame un precio'));

var iva = prencioSinIva * 0.21;

var precioConIva= prencioSinIva + iva;

 precioConIva.toFixed(2);

alert(precioConIva);

