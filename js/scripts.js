'use strict';

var nombre = document.getElementById("fname");
var apellido = document.getElementById("lname");
var correo = document.getElementById("correo");
var consulta = document.getElementById("dudaid");
var boton = document.getElementById("btn");

function guardar(nombre, apellido, correo, consulta){

    var array = [nombre, apellido, correo, consulta];

    console.log(array);
    alert("¡Gracias por contactarnos! Su consulta ah sido enviada");
}