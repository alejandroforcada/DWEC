function myScript(){

    var d = new Date();

    document.write(dias[d.getDay()-1],','+d.getDate(),' de '+meses[d.getMonth()],' de '+d.getFullYear());

}

var dias =['Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];