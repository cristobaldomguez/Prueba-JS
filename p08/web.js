$(document).ready(function() {
	
	$('.send').on('click', function(event) {
		event.preventDefault();

		if ($('[name=email]').val() == '') {
			alert('Falta el e-mail');
		}

		var persona = new Object();
		persona.nombre = $('[name=nombre]').val();
		persona.email = $('[name=email]').val();
		persona.sexo = $('option:selected').text();

		var personasArr = [];
		personasArr.push(persona);
		console.log(personasArr);
	});


});