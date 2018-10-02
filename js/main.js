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
  var resultado = document.getElementById('lista-productos');

 // extras
var camisas = document.getElementById('camisa_evento');
 var etiquetas = document.getElementById('etiquetas');

/*calcular.addEventListener('click', function(){
    //Code
  }) */

calcular.addEventListener('click', calcularMontos);

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
}

}

  console.log("listo");

}); // DOM CONTENT LOADED
})();
