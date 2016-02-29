$(document).ready(function() {
	var suma = 0;
	do {
	    var ingreso = parseInt(prompt("ingresa un número"));
	    if (suma >= 2) {
	    	console.log('Fueron muchos intentos');
	    	break;
	    }
	    suma++;
	} while ( ingreso !== parseInt(ingreso, 10) );
	
	console.log(ingreso);
});