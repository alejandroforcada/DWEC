
function myScript(){var nav = navigator.appName; //usar userAgent e indexOf para saber si es el navegador correcto



if (nav==="Netscape"){


    window.resizeTo(500,500);
}

else{
    alert("Operación no permitida con este navegador");
}
}
