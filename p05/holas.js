$(document).ready(function() {
	var q = parseInt(prompt("Escriba la cantidad de holas"));
	if (q > 0) {
		for(var i = 1; i <= q; i++){
			$("body").append("hola<br />");
		};
	} else {
		$("body").append("El número escrito no es válido");
	}
});