import React, { useEffect, useState } from 'react';
import { Container } from '../components/layout/Container';
import { LinkButton } from '../components/layout/LinkButton';
import { PageTitle } from '../components/layout/PageTitle';
import { Separator } from '../components/layout/Separator';
import { Products } from '../components/products/Products';
import { getProducts } from '../data/mock-products';
import { Product } from '../data/product.class';

export function HomePage() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		setProducts(getProducts());
	}, []);

	return (
		<React.Fragment>
			<PageTitle title="Mi inventario" />
			<Container centered>
				<LinkButton to="/products">
					<i className="fas fa-box"></i> Gestionar Productos
				</LinkButton>
			</Container>
			<Separator size="md" />
			<Products products={products} />
		</React.Fragment>
	);
}
