<section>
#Prueba 2 de Desafiolatam, JAVASCRIPT

##Tips para tener éxito en la prueba.

- Leer la prueba completa antes de empezar.
- No se necesita contestar toda la prueba, concentrarse en contestar la mayor cantidad de respuestas posibles.
- No contestar preguntas a medias, sólo en escasas excepciones tienen puntos.
- Se pueden realizar preguntas en el grupo de desafiolatam de facebook.
- Copia de código será castigada con nota 0. 
- El código debe ser súbido a github y el link de github a la plataforma empieza, cada código debe ser contestado en una carpeta indicando el número de la pregunta dentro de la carpeta prueba.

~~~
	prueba
		.git
		p1/	
			index.html
			main.js
		p2/
			index.html
			main.js
		p3/
			index.html
			main.js
		p4/		
~~~

- La prueba empieza a las 7pm hora chile y termina a las 10pm hora chile, no se revisarán commits posterior a esa hora.
- Cada item funcional (requisito) vale un punto, la suma total de puntos equivale al 100%, la escala de dificultad se ajusta después de la corrección y cálculo de puntajes individualmente de cada alumno.
- Empezar por las preguntas más fáciles.
</section>

<section>

### Pregunta 1 (1pto)

En el siguiente algoritmo un usuario tiene que ingresar un numero, estos numeros se tienen que ir sumando. Si ingresa la palabra 'fin' u otra palabra clave definida por ustedes, se tiene que romper el ciclo e imprimir el resultado de la suma.
Arreglar el algoritmo para que funcione correctamente.

~~~javascript
var suma = 0;
do
	var ingreso = prompt("ingresa un número");
while (ingreso != break);
console.log(suma)
~~~

### Pregunta 2 (1pto)

El siguiente código debería remplazar un elemento de la página, pero por algún motivo (o varios) no funciona, hay que arreglarlo.

~~~html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="https://code.jquery.com/jquery-2.2.1.min.js">
	<script src="prueba.js">
</head>
<body>
	<p id="#p1"> Hola </p> 
</body>
</html>
~~~

~~~javascript
$(".p1").html("Nuevo parrafo")
~~~

### Pregunta 3 (2pto)
Se está busca una página que al hacer click en un div este cambie de color, el problema es que no queremos que esto pase cuando se haga click en las cosas que estan dentro del div, arreglar el código.

~~~html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="http://code.jquery.com/jquery-2.2.1.js">
</head> 
<body>
	El div de abajo al cambiarse de color al hacer click
	<div id="evento" style="background-color:yellow">
		<p> Hacerme click no deberías cambiar el color </p>
	</div>
</body>
</html>
~~~

Este ejercicio vale 2 ptos

### Pregunta 4 (4pto)
Se tiene la siguiente página web:

~~~html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="http://code.jquery.com/jquery-2.2.1.js">
</head> 
<body>
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
	</ul>
</body>
</html>
~~~

Se pide agregar un botón a la página que al presionarlo agregue el elemento 6, luego el 7 y así sucesivamente (1 pto)

Se pide agregar un botón que elimine el primer elemento de la lista, al agregar un número nuevo no es necesario contar que se borró uno del principio, o sea si va quedando 3, 4, 5 al agregar uno nuevo este seguirá siendo el 6. (1 pto)

Ademas del botón para agregar, habrá un input, al presionar el botón se debe agregar el contenido del input dentro (1 pto)

Ademas del input hay otro input para ingresar un color, el texto debe aparecer en ese color (1 pto)


### Pregunta 5 (1 pto)
El usuario ingresa un número en un promt, luego el sistema debe contar esa cantidad de segundos antes de mostra "hola" en pantalla (sin console log, pero se puede ocupar jquery)

### Pregunta 6 (2 ptos)
El usuario ingresa n en pantalla, se debe dibujar un cuadradro hueco de largo n.

Ejemplo si el usuario ingreso 6

~~~
******
*    *
*    *
*    *
*    *
******
~~~

### Pregunta 7 (3 ptos)
Crear la clase (con la función constructora) de teléfono, un teléfono tiene un número asignado que se le pasa a la función constructora, y carácterístcas como marca y color. (1 pto)

Crear un método que se llame marcar que aumente el contador de llamadas en uno. (1 pto)

Crear un arreglo de teléfonos y crear una función reciba un arreglo de teléfonos y que permita devolver otro arreglo con todos los teléfono de una marca. (1 pto)

### Pregunta 8 (2 ptos)

Se pide hacer una página web que tiene un input que permite ingresar un nombre, un input para ingresar un email y un dropdown que permite seleccionar el sexo de un usuario

Al hacer click en enviar se pide:

Validar que el email no sea vacío (1 pto)
Ingresar los datos dentro del objeto persona y acto seguido guardar este objeto dentro de un arreglo llamado personas (1 pto)

### Pregunta 9 (1 ptos)
Se pide una función que recibe un arreglo como parámetro y devuelva una copia del arreglo.
</section>

La prueba tiene 17 puntos
