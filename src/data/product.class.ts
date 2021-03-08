export class Product {
	constructor(
		public readonly id: string | number,
		public name: string,
		public quantity: number,
		public unit: string,
		public price: number,
		public isAvailable: boolean
	) {}
}
