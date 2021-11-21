$(document).ready(function(){
  $("#abrirventana1").click(function() {
  	$(".popup1").addClass("active");
	});

  $("#cerrarventana1").click(function() {
  	$(".popup1").removeClass("active");
	});

  $("#abrirventana2").click(function() {
  	$(".popup2").addClass("active");
	});

  $("#cerrarventana2").click(function() {
  	$(".popup2").removeClass("active");
	});

  $("#abrirventana3").click(function() {
  	$(".popup3").addClass("active");
	});

  $("#cerrarventana3").click(function() {
  	$(".popup3").removeClass("active");
	});

});