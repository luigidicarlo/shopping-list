import { Product } from './product.class';

export function getProducts(): Product[] {
	return [
		{
			id: 'a1',
			name: 'Harina de Trigo',
			quantity: 3,
			unit: 'kilo',
			price: 0.95,
			isAvailable: true,
		},
		{
			id: 'a2',
			name: 'Azúcar',
			quantity: 2,
			unit: 'kilo',
			price: 1,
			isAvailable: false,
		},
		{
			id: 'a3',
			name: 'Esponja',
			quantity: 2,
			unit: 'unidad',
			price: 0.94,
			isAvailable: true,
		},
	];
}
