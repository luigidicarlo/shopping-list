import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage';
import { ShoppingListPage } from './pages/ShoppingListPage';

export function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/list" component={ShoppingListPage} />
				<Route exact path="/products" component={ProductsPage} />
				<Route exact path="/" component={HomePage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</Router>
	);
}
