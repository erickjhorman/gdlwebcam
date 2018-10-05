(function(){
"use strict";

var regalo = document.getElementById('regalo');
document.addEventListener('DOMContentLoaded', function(){

  // Campos Datos usuarios
  var nombre = document.getElementById('nombre');
  var apellido = document.getElementById('apellido');
  var email = document.getElementById('email');
  // Campo pases

  var pase_dia = document.getElementById('pase_dia');
  var pase_dosdias = document.getElementById('pase_dosdias');
  var pase_completo = document.getElementById('pase_completo');

  // Botones y divs

  var calcular = document.getElementById('calcular');
  var errorDiv = document.getElementById('error');
  var botonRegistro = document.getElementById('btnRegistro');
  var lista_productos = document.getElementById('lista-productos');
  var suma = document.getElementById('suma-total');

 // extras
var camisas = document.getElementById('camisa_evento');
 var etiquetas = document.getElementById('etiquetas');

/*calcular.addEventListener('click', function(){
    //Code
  }) */

calcular.addEventListener('click', calcularMontos);

pase_dia.addEventListener('blur', mostrarDias);  //Blur takes the value  of the input
pase_dosdias.addEventListener('blur', mostrarDias);
pase_completo.addEventListener('blur', mostrarDias);

function calcularMontos(event) {
event.preventDefault();
if (regalo.value === '') {
     alert("Debes elegir un reglo");
     regalo.focus();
} else {
  var boletoDia = parseInt(pase_dia.value, 10)||0,
      boletos2Dias = parseInt(pase_dosdias.value, 10)||0,
      boletoCompleto = parseInt(pase_completo.value, 10)||0,
      cantCamisas = parseInt(camisas.value,10)||0,
      canEtiquetas = parseInt(etiquetas.value,10)||0 ;

      var totalPagar = (boletoDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) +
      ((cantCamisas * 10)* 0.93) + (canEtiquetas * 2);
      console.log(totalPagar);

      var listadoProductos = [];  // I created an array

      if (boletoDia >= 1) {
          listadoProductos.push(boletoDia + 'Pases por dia');
      }
      if (boletoDia >= 1) {
          listadoProductos.push(boletos2Dias + 'Pases por dia');
      }

      if (boletoCompleto >= 1) {
          listadoProductos.push(boletoCompleto + 'Pases por dia');
      }

      if (cantCamisas >= 1) {
          listadoProductos.push(cantCamisas + 'Camisas');
      }

      if (canEtiquetas >= 1) {
          listadoProductos.push(canEtiquetas + 'Etiquetas');
      }

      console.log(listadoProductos);

      lista_productos.style.display = "block";
      lista_productos.innerHTML = ''; // I rerun the array to get the information
      for (var i = 0; i < listadoProductos.length; i++) {
        lista_productos.innerHTML += listadoProductos[i] + '<br/>'; // innerHTML print everything are into the array
      }

      suma.innerHTML = "$" + totalPagar.toFixed(2);
      // toFixed is for round off the result
}

}

function mostrarDias(){
  var boletoDia = parseInt(pase_dia.value, 10)||0,
      boletos2Dias = parseInt(pase_dosdias.value, 10)||0,
      boletoCompleto = parseInt(pase_completo.value, 10)||0;

      var diasElegidos = [];

      if (boletoDia > 0) {
        diasElegidos.push('viernes');
      }
      if (boletos2Dias > 0) {
        diasElegidos.push('viernes' , 'sabado');
      }
      if (boletoCompleto > 0) {
        diasElegidos.push('viernes' , 'sabado', 'domingo');
      }

      for (var i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = 'block';
      }

      console.log("Blur" + diasElegidos);
}


  console.log("listo");

}); // DOM CONTENT LOADED
})();
