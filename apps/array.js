const miArray = [1, 2, 3, 4, 5, 6];
const miArray2 = ['1', '2', '3', '4'];
const miArray3 = [1, 2, 3, 4, 5, 6];

//Agrega un elemento al final
miArray.push(7);

//Extraer el ultimo elemento
const ultimoElemento = miArray.pop();

//Extraer el primer elemento
const primerElemento = miArray.shift();

//Agrega un elemento al inicio del arreglo
miArray.unshift();

//Insertar elementos en medio del arreglo
//Es desde donde, si se quiere eliminar los siguientes elementos y los valores a ingresar
miArray.splice(3, 0, 'jose', 'ivan');

//Recorrer el arreglo
//El array no se suele usar, pero forEach te da acceso
miArray2.forEach((elemento, index, array) => console.log(elemento * index));

//Map regresa un nuevo arreglo con los cambios que se indiquen en la funcion
//evitando la mutacion del arreglo original, siempre devolviendo la misma cantidad
//de valores que entraron
const miArray4 = miArray3.map(i => i + 3);

console.log(miArray2);
console.log(miArray4);

const factura = [
	{
		precio: 23,
		cantidad: 1
	},
	{
		precio: 19,
		cantidad: 2
	},
	{
		precio: 14,
		cantidad: 4
	},
	{
		precio: 22,
		cantidad: 1
	}
];

const IVA = 1.21;

const totalFactura = factura.map(e => e.precio * e.cantidad * IVA);

const facturaMayor40 = totalFactura.filter(e => e > 40);

const total = totalFactura.reduce((a, b) => a + b);

console.log(totalFactura);
console.log(facturaMayor40);
console.log(total);
