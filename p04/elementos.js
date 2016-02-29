$(document).ready(function() {
	var lastElNum = 0;

	var appendInput = 	'<div class="add_input add_btn">';
	appendInput += 		'<input type="text" name="txt" class="get_input">';
	appendInput += 		'<a href="#" class="add_btn">Agregar elemento</a>';
	appendInput += 		'</div>';

	var appendBtn = 	'<div class="rm_btn">';
	appendBtn += 		'<a href="#">Eliminar elemento</a>';
	appendBtn += 		'</div>';

	var appendColor = 	'<div class="add_color">';
	appendColor += 		'<input type="text" name="txt" class="get_color">';
	appendColor += 		'<a href="#">Agregar Color</a>';
	appendColor += 		'</div>';

	// $('body').append('<div class="add_btn"><a href="#">Agregar elemento</a></div>');
	$('body').append(appendInput).append(appendBtn).append(appendColor);

	$('.rm_btn ').on('click', 'a', function(event) {
		event.preventDefault();
		$('ul li:first').remove();
	});

	//Botón para agregar un nuevo número en la lista
	/*$('.add_btn').on('click', 'a', function(event) {
		var lastElementNum = parseInt($('ul li:last-of-type').text());
		$('ul').append('<li>' + ++lastElementNum +'</li>');
		var nombre_btn = 'btn_' + (++lastElementNum);

		var nombre_btn = new Elemento();
        nombre_btn.add_btn();
	});*/

	// Botón que hace doble tarea, revisa si hay contenido en el input y lo agrega a la lista. 
	// De lo contrario agregará un nuevo número en la secuencia.

	$('.add_input').on('click', 'a', function(event) {
		event.preventDefault();
		var txt = $('.get_input').val();
		if (txt.length < 1) {
			
			$('ul li').each(function(i, value) {
				var v = parseInt($( this ).text());
				lastElNum = v > lastElNum ? v : lastElNum;
			});

			txt = ++lastElNum;
		}
		
  		$('ul').append('<li>' + txt +'</li>');
	});

	//Botón para cambiar el color del texto
	$('.add_color').on('click', 'a', function(event) {
		event.preventDefault();
		var color = $('.get_color').val();

		if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
			$('ul li').css({color: color}).change();
		} else {
			alert('Debes entregar un valor hexadecimal');
		}
	});
});