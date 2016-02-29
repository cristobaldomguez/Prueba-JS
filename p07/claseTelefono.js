$(document).ready(function() {
	
	function Telefono(numero, marca, color) {
		this.numero = numero
		this.marca = marca
		this.color = color
		this.contadorLlamadas = 0
	};

	Telefono.prototype.marcar = function(arg) {
		arg.contadorLlamadas++;
		console.log('Cantidad de llamadas: ' + arg.contadorLlamadas);
	};

	Telefono.prototype.telefonoMarca = function(arr) {
		var arr1 = arr.filter(function (m) {
		    return m.marca == 'Apple';
		});

		return arr1;
	};





	var arr = [
		{ numero: 123, marca: 'Apple',	 color: 'blanco' },
		{ numero: 234, marca: 'Samsung', color: 'gris' },
		{ numero: 345, marca: 'Nokia',	 color: 'negro' },
		{ numero: 456, marca: 'lg',		 color: 'rojo' },
		{ numero: 567, marca: 'Huawei',	 color: 'verde' },
		{ numero: 678, marca: 'Apple',	 color: 'spaceGray' },
		{ numero: 789, marca: 'Samsung', color: 'amarillo' },
		{ numero: 890, marca: 'Nokia',	 color: 'morado' },
		{ numero: 901, marca: 'lg',		 color: 'azul' },
		{ numero: 012, marca: 'Huawei',	 color: 'celeste' }
	];

	var tel1 = new Telefono(56984093881, 'Apple', 'Silver');
	tel1.marcar(tel1);
	var apple = tel1.telefonoMarca(arr);
	console.log(apple);
});