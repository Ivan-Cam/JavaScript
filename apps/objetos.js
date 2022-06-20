const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.1;

const item1 = {
	precio: 15,
	cantidad: 2,
	impuestos: IVA_GENERAL,
	calcularTotal: function () {
		return this.cantidad * this.precio * this.impuestos;
	},
};

const item2 = {
	precio: 25,
	cantidad: 3,
	impuestos: IVA_REDUCIDO,
	calcularTotal: function () {
		return this.cantidad * this.precio * this.impuestos;
	},
};

const factura = {
	item1,
	item2,
	calcularTotal: function (descuento) {
		return (
			(this.item1.calcularTotal() + this.item2.calcularTotal()) * descuento
		);
	},
};

console.log(factura.calcularTotal(0.8));
