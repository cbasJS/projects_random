/**
 * JS Permite modificar elementos del DOM
 * Crear o eliminar
 * 
 * Cada elemento en el DOM se le conoce como Nodos
 */

//  Se obtiene los elementos por la etiqueta
 var cajas = document.getElementsByTagName('div');
// Se obtiene el elemento por el id
 var primeraCaja = document.getElementById('primeraCaja');
 // Se obtiene el elemento por la clase
 var cajas = document.getElementsByClassName('caja');

// Modificar elemento primeraCaja
// Se cambia el contenido que hay dentro
// primeraCaja.textContent = 'Royal';
// Se modifica y se puede hacer inyecciones HTML
// primeraCaja.innerHTML = '<u>developer</u>';

//  ----- Creacion de Nodos
// 1. Crear el elemento
var nuevo_elemento = document.createElement('div');

// 2. Crear un Nodo de texto
var contenido = document.createTextNode('nuevo_elemento');

// 3. Añadir el nodo de texto al elemento
nuevo_elemento.appendChild(contenido);

// 4. Agregar atributos
nuevo_elemento.setAttribute('id', 'nuevo_elemento');
nuevo_elemento.setAttribute('class', 'caja naranja');

// 5. Agregar el elemento al documento
// ----- Conociendo el elemento padre
var padre = cajas[0].parentNode;
// ----- Incrustando nuevo elemento
// padre.appendChild(nuevo_elemento);
// ----- Incrustando nuevo_elemento antes de...
padre.insertBefore(nuevo_elemento, cajas[2]);



// ---- Remplazando Nodo (remplaza elemento hijo del elemento padre)
// padre.replaceChild(nuevo_elemento, cajas[2]);
// ---- Eliminando Nodo (elimina elemento hijo del elemento padre)
padre.removeChild(cajas[4]);