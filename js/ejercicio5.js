//Rubén Torres
'use strict'

//He buscado el funcionamiento del setTimeout()
//También he buscado como hacer que se actualice
//constantemente en el mismo lugar, porque haciendo 
//un document.write() me escribía uno al lado del otro
//de manera infinita, y con console.log() se bloqueaba el 
//navegador.

//Funciones
function  reloj(){

    let fecha = new Date();
    let h = fecha.getHours();
    let m = fecha.getMinutes();
    let s = fecha.getSeconds();
    m = validarTiempo(m);
    s = validarTiempo(s);
    document.getElementById('reloj').innerHTML = h + ':' + m + ':' + s;
    setTimeout(reloj, 1000);

}

function validarTiempo(tiempo) {
    if (tiempo < 10)
        tiempo = '0' + tiempo;
    return tiempo;
}