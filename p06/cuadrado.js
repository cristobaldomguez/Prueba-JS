$(document).ready(function() {
	var q = parseInt(prompt('Por favor, escribe el largo del cuadrado'));

	var prntVertical = '';
	for (var i = 1; i <= q; i++) {
		var prntHorizontal = '';

		for (var j = 1; j <= q; j++) {
			if (j == 1 || j == q) {
				prntHorizontal += ' * ';
			} else if (i == 1 || i == q) {
				prntHorizontal += ' * ';
			} else {
				prntHorizontal += '&nbsp;&nbsp;&nbsp;';
			}
		}

		$('body').append(prntHorizontal + '<br />');
		//console.log(prntHorizontal);
	}
});