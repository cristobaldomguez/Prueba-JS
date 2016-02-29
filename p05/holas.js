$(document).ready(function() {
	var q = parseInt(prompt("Escriba los segundos de espera"));
	/*if (q > 0) {
		for(var i = 1; i <= q; i++){
			$("body").append("hola<br />");
		};
	} else {
		$("body").append("El número escrito no es válido");
	}*/

	var milisegundos = q * 1000;

	setTimeout(function(){ $("body").append("hola<br />"); }, milisegundos);
});