
    
var nombres = {
 "Personas": [
 {"imagen" : "img/TECNICO.png",
 "Carrera" : "Tecnico/a en Ingenieria en Computacion",
 },
 {"imagen" : "img/INGENIERIA.png",
 "Carrera" : "Ingenierio en Ciencias de Computacion",
 },
 ]
};
function iniciar(){
    var boton = document.getElementById("validar");
    if(boton.addEventListener){
    boton.addEventListener("click", validar, false);
    }
    else if(boton.attachEvent){
    boton.attachEvent("onclick", validar);
    }
    }
//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = volcarDatos(nombres.Personas);
function volcarDatos(datos){
 var total = datos.length;
 data = "<ul class=\"grid\">\n";
 for(var i=0; i<total; i++){
 data += "<li class=\"box\">\n";
 data += "<div class=\"box-shadow\"></div>\n";
 data += "<div class=\"box-gradient\">\n";
 data += "<img src=\"" + datos[i].imagen + "\" alt=\"Avatar de " +
datos[i].Carrera + " " + datos[i].apellido + "\" class=\"avatar\" />\n";
 data += "<h4>\nNombre: " + datos[i].Carrera+ "; 
 
 }
 data += "</ul>\n";
 return data;
}
function iniciar(){
    var boton = document.getElementById("validar");
    if(boton.addEventListener){
    boton.addEventListener("click", validar, false);
    }
    else if(boton.attachEvent){
    boton.attachEvent("onclick", validar);
    }
    }
    function int(){
        var botonInformacion = document.getElementById("Informacion");

        botonInformacion.onclick=chgslideButton
        
    }
    function chgslideButton(e) {

    }