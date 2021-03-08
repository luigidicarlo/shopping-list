import React, { useState } from 'react';
import { Button } from '../components/layout/Button';
import { Container } from '../components/layout/Container';
import { PageTitle } from '../components/layout/PageTitle';
import { ProductForm } from '../components/products/ProductForm';

export function ProductsPage() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleForm = () => setIsOpen(!isOpen);

	return (
		<React.Fragment>
			<PageTitle title="My Products" />
			<Container className="px-2">
				<Container centered>
					<Button onClick={toggleForm}>
						<i className="fas fa-plus"></i> Add Product
					</Button>
				</Container>
				{isOpen && <ProductForm title="Add Product" />}
			</Container>
		</React.Fragment>
	);
}
