import { Product as ProductClass } from '../../data/product.class';
import { Container } from '../layout/Container';

interface IProps {
	product: ProductClass;
}

export function Product({ product }: IProps) {
	return (
		<Container className="px-2" flex="row">
			<h2>{product.name}</h2>
			<h2>{product.price}</h2>
		</Container>
	);
}
