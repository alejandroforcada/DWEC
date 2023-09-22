function myScript(){

    var d = new Date();

    document.write(dias[d.getDay()],','+d.getDate(),' de '+meses[d.getMonth()],' de '+d.getFullYear());

}

var dias =['Domingo','Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado'];
var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
