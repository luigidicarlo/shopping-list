import React from 'react';
import { Product as ProductClass } from '../../data/product.class';
import { Product } from './Product';

interface IProps {
	products: ProductClass[];
}

export function Products({ products }: IProps) {
	return (
		<React.Fragment>
			{products.map(product => (
				<Product key={product.id} product={product} />
			))}
		</React.Fragment>
	);
}
