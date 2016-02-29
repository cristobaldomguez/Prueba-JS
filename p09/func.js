$(document).ready(function() {
	
	var arr = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

	function duplicacion(arr) {
		return arr.slice(0);
	}

	var arr1 = duplicacion(arr);
	console.log(arr1);
});